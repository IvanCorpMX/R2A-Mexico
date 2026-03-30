import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Shield, 
  Cctv, 
  Lock, 
  Zap, 
  Truck, 
  Radio, 
  TowerControl, 
  MapPin, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Globe,
  ChevronRight,
  Factory,
  Home,
  Cpu,
  BarChart3,
  Download,
  Wifi,
  Flame,
  MonitorPlay,
  Facebook,
  Twitter,
  MessageCircle,
  Instagram,
  Linkedin,
  Video,
  Activity,
  ShieldCheck,
  Lock,
  Server,
  ShieldAlert,
  Sun,
  Moon
} from 'lucide-react';

// --- Data ---
const BrandLogo = ({ brand, className = "" }: { brand: string, className?: string }) => {
  const filename = brand.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-') + '.png';
  
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src={`/logos/${filename}`} 
        alt={brand}
        className="h-full w-auto object-contain max-h-full opacity-70 hover:opacity-100 transition-opacity"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.nextElementSibling?.classList.remove('hidden');
        }}
      />
      <span className="hidden text-sm font-bold text-white/80">{brand}</span>
    </div>
  );
};

const categories = [
  {
    id: 'automatizacion',
    slug: 'sistemas-de-automatizacion-sureste-mexicano',
    h1: 'Sistemas de Automatización y Control de Accesos en el Sureste Mexicano',
    metaDescription: 'Optimice la seguridad de su empresa con expertos en automatización y control de accesos en el Sureste. Integramos Zebra y ZKTeco. Cotice su proyecto hoy.',
    ctaText: 'Cotizar Proyecto de Automatización',
    altImage: 'Sistema de control de acceso biométrico instalado en zona industrial de Villahermosa',
    title: 'Automatización',
    icon: <Cpu />,
    items: ['Domótica', 'Telemetría', 'Control de Acceso', 'Cercos Eléctricos', 'Biométricos', 'Acceso Vehicular', 'Torniquetes y Puertas'],
    brands: 'Honeywell, Resideo, Yonusa, ZKTeco',
    desc: 'Soluciones inteligentes para el control y automatización de accesos y seguridad perimetral. Integramos tecnología de punta para garantizar la protección de sus instalaciones en el Sureste Mexicano con sistemas robustos y confiables.',
    cardDesc: 'Soluciones inteligentes para el control y automatización de accesos. Integramos tecnología de punta para garantizar la protección total de sus instalaciones.'
  },
  {
    id: 'radiocomunicacion',
    slug: 'sistemas-de-radiocomunicacion-villahermosa',
    h1: 'Sistemas de Radiocomunicación Industrial en Villahermosa y el Sureste',
    metaDescription: 'Mejore la comunicación de su empresa con expertos en radiocomunicación en Villahermosa. Soluciones Kenwood y Icom para la industria. Cotice su proyecto hoy.',
    ctaText: 'Solicitar Diagnóstico de Comunicación',
    altImage: 'Equipos de radiocomunicación Kenwood operando en instalación industrial en Ciudad del Carmen',
    title: 'Radiocomunicaciones',
    icon: <Radio />,
    items: ['Radios Comerciales', 'Radios Intrínsecamente Seguros', 'Amplificadores', 'Antenas', 'Repetidores'],
    brands: 'Icom, Kenwood, TXPRO, Motorola',
    desc: 'Sistemas de comunicación eficientes y seguros para entornos industriales, comerciales y de emergencia en Villahermosa y Ciudad del Carmen. Aseguramos conectividad constante en cualquier situación crítica.',
    cardDesc: 'Sistemas de comunicación eficientes y seguros para entornos industriales y comerciales. Aseguramos conectividad constante en cualquier situación crítica.'
  },
  {
    id: 'videovigilancia',
    slug: 'sistemas-de-videovigilancia-industrial-sur-de-mexico',
    h1: 'Sistemas de Videovigilancia Industrial en el Sur de México',
    metaDescription: 'Proteja sus instalaciones con sistemas de videovigilancia CCTV de alta definición en el Sur de México. Integramos Hikvision y Dahua. Cotice su proyecto hoy.',
    ctaText: 'Cotizar Proyecto de Seguridad Industrial',
    altImage: 'Cámaras de videovigilancia PTZ instaladas en zona industrial del Sureste Mexicano',
    title: 'Videovigilancia',
    icon: <Cctv />,
    items: ['Cámaras Bala y Domo', 'Cámaras PTZ', 'Videograbadores'],
    brands: 'Hikvision, Provision ISR, Dahua',
    desc: 'Sistemas de circuito cerrado de televisión (CCTV) de alta definición para la industria en el Sur de México. Monitoreo continuo y almacenamiento seguro para la prevención y análisis de incidentes.',
    cardDesc: 'Sistemas de circuito cerrado de televisión (CCTV) de alta definición. Monitoreo continuo y almacenamiento seguro para la prevención y análisis de incidentes.'
  },
  {
    id: 'gps',
    slug: 'rastreo-gps-monitoreo-flotas-sureste',
    h1: 'Sistemas de Rastreo GPS y Monitoreo de Flotas en el Sureste Mexicano',
    metaDescription: 'Controle sus vehículos con plataformas de rastreo GPS y telemetría en el Sureste. Soluciones Teltonika y Ruptela para empresas. Cotice su proyecto hoy.',
    ctaText: 'Solicitar Demo de Plataforma GPS',
    altImage: 'Monitoreo de flotillas mediante plataforma telemétrica GPS en el Sureste Mexicano',
    title: 'GPS',
    icon: <MapPin />,
    items: ['Plataforma Telemétrica', 'Seguridad Personal', 'GPS y Control de Combustible', 'Bloqueo de Encendido'],
    brands: 'Teltonika, Ruptela, Bueno Cell, Wialon',
    desc: 'Rastreo y gestión de flotas en tiempo real para empresas en el Sureste Mexicano. Optimice sus recursos, reduzca costos operativos y garantice la seguridad de sus vehículos y personal en movimiento.',
    cardDesc: 'Rastreo y gestión de flotas en tiempo real. Optimice sus recursos, reduzca costos operativos y garantice la seguridad de sus vehículos en movimiento.'
  },
  {
    id: 'enlaces',
    slug: 'enlaces-dedicados-inalambricos-villahermosa',
    h1: 'Enlaces Dedicados Inalámbricos PtP y PtMP en Villahermosa',
    metaDescription: 'Conectividad empresarial de alto rendimiento con enlaces inalámbricos en Villahermosa y el Sureste. Soluciones Ubiquiti y Mimosa. Solicite diagnóstico hoy.',
    ctaText: 'Solicitar Diagnóstico de Red',
    altImage: 'Antenas para enlaces dedicados inalámbricos instaladas en torre de telecomunicaciones en Villahermosa',
    title: 'Enlaces ptp',
    icon: <Wifi />,
    items: ['Enlaces Backhaul (PtP)', 'Protección de Descarga'],
    brands: 'Ubiquiti, Mimosa',
    desc: 'Conectividad inalámbrica de alta velocidad y confiabilidad en Villahermosa y zonas aledañas. Diseñamos redes punto a punto y punto a multipunto para extender su red corporativa o proveer acceso a internet.',
    cardDesc: 'Conectividad inalámbrica de alta velocidad y confiabilidad. Diseñamos redes punto a punto y punto a multipunto para extender su red corporativa sin límites.'
  },
  {
    id: 'audiovideo',
    slug: 'soluciones-audiovisuales-corporativas-sureste',
    h1: 'Soluciones Audiovisuales y Videowall para Corporativos en el Sureste',
    metaDescription: 'Equipe sus salas de control y corporativos con soluciones audiovisuales profesionales en el Sureste Mexicano. Sistemas Sonos. Cotice su proyecto hoy.',
    ctaText: 'Cotizar Solución Audiovisual',
    altImage: 'Sistema de videowall y audio profesional instalado en sala de control en el Sureste',
    title: 'Audio y Video',
    icon: <MonitorPlay />,
    items: ['Voceo y Audio', 'Videowall', 'Extensores y Divisores', 'Repetidores', 'Sistemas de Evacuación por Voz'],
    brands: 'Sonos',
    desc: 'Soluciones audiovisuales profesionales para salas de control, corporativos y espacios comerciales en el Sureste Mexicano. Comunicación clara y visualización de alto impacto.',
    cardDesc: 'Soluciones audiovisuales profesionales para salas de control, corporativos y espacios comerciales. Comunicación clara y visualización de alto impacto.'
  },
  {
    id: 'torres',
    slug: 'torres-de-telecomunicaciones-villahermosa',
    h1: 'Instalación de Torres de Telecomunicaciones en Villahermosa y sureste de México',
    metaDescription: 'Especialistas en diseño e instalación de torres de telecomunicaciones en Villahermosa y el Sureste Mexicano. Infraestructura robusta para su red. Cotice su proyecto hoy.',
    ctaText: 'Cotizar Proyecto de Infraestructura',
    altImage: 'Torre de telecomunicaciones instalada en sitio industrial en Villahermosa',
    title: 'Torres de Telecomunicaciones',
    icon: <TowerControl />,
    items: ['Arriostradas (9 a 90 metros)', 'Auto-soportadas', 'Mástiles', 'Alojamiento de Infraestructura', 'Implementación y Monitoreo'],
    brands: '',
    desc: 'Diseño, instalación y mantenimiento de infraestructura para telecomunicaciones en la Zona Industrial de Villahermosa. Ofrecemos soluciones estructurales adaptadas a las necesidades específicas de cobertura y capacidad en el Sureste.',
    cardDesc: 'Diseño, instalación y mantenimiento de infraestructura para telecomunicaciones. Ofrecemos soluciones estructurales adaptadas a sus necesidades de cobertura y capacidad.'
  },
  {
    id: 'telemetria',
    slug: 'sistemas-de-telemetria-industrial-sureste',
    h1: 'Sistemas de Telemetría Industrial en el Sureste Mexicano',
    metaDescription: 'Monitoreo y control remoto de procesos industriales con sistemas de telemetría en el Sureste. Optimice su operación. Cotice su proyecto hoy.',
    ctaText: 'Cotizar Proyecto de Telemetría',
    altImage: 'Sistema de telemetría y control industrial operando en el Sureste Mexicano',
    title: 'Telemetría',
    icon: <Activity />,
    items: ['Monitoreo de Variables', 'Control Remoto', 'Sensores Industriales', 'Automatización de Procesos'],
    brands: '',
    desc: 'Sistemas avanzados de telemetría para la medición, monitoreo y control remoto de variables físicas y químicas en tiempo real, optimizando la toma de decisiones.',
    cardDesc: 'Sistemas avanzados para la medición, monitoreo y control remoto de variables en tiempo real, optimizando la toma de decisiones operativas.'
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Check initial theme
    if (document.body.classList.contains('light-mode')) {
      setIsLightMode(true);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.body.classList.toggle('light-mode');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Soluciones', href: '#soluciones' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/90 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="R2A México" 
            className="h-10 object-contain logo-dark"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <img 
            src="/logo-claro.png" 
            alt="R2A México" 
            className="h-10 object-contain logo-light"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden items-center gap-2">
            <div className="w-10 h-10 bg-brand-red flex items-center justify-center rounded-lg rotate-45">
              <Shield className="text-white -rotate-45 w-6 h-6" />
            </div>
            <span className="text-2xl font-extrabold tracking-tighter text-white">
              R2A<span className="text-brand-red">MÉXICO</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-white/70 hover:text-brand-red transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/brochure.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red hover:bg-red-700 text-[#ffffff] px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Download className="w-4 h-4" /> BROCHURE
          </a>
          <button
            onClick={toggleTheme}
            className="text-white/70 hover:text-brand-red transition-colors p-2 rounded-full hover:bg-white/5"
            aria-label="Toggle theme"
          >
            {isLightMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-white/70 hover:text-brand-red transition-colors p-2 rounded-full hover:bg-white/5"
            aria-label="Toggle theme"
          >
            {isLightMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          <button 
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-white/70 hover:text-brand-red"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="/brochure.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-red text-[#ffffff] text-center py-3 rounded-lg font-bold flex items-center justify-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Download className="w-5 h-5" /> DESCARGAR BROCHURE
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/fondoprincipal.webp" 
          alt="Security Infrastructure" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
          onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/telecommunications-tower/1920/1080?grayscale"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-12 md:mt-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            SEGURIDAD, CONTROL Y <br />
            <span className="text-brand-red">MONITOREO EN TIEMPO REAL</span>
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            R2A México S.A. de C.V. inicia operaciones en el año 2014 con el propósito de asegurar su entorno, ofrecemos soluciones en seguridad electrónica a nivel físico y lógico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <a 
              href="#soluciones" 
              onClick={(e) => handleNavClick(e, '#soluciones')}
              className="bg-brand-red hover:bg-red-700 text-[#ffffff] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all group"
            >
              EXPLORAR SOLUCIONES
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contacto" 
              onClick={(e) => handleNavClick(e, '#contacto')}
              className="border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all"
            >
              CONTACTAR ASESOR
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-6">NUESTRO <br /><span className="text-brand-red">OBJETIVO</span></h2>
            <p className="text-white/70 text-lg mb-6 leading-relaxed">
              R2A es una empresa dedicada a la seguridad electrónica, con nuestra experiencia podemos satisfacer soluciones domesticas hasta industrial.
            </p>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Contamos con un equipo de trabajo que cuenta con experiencia de 10 años en la gestión, planeación y ejecución de diversos proyectos en Seguridad Electrónica para los distintos sectores e industrias de nuestro país.
            </p>
            <div className="p-6 bg-brand-dark border-l-4 border-brand-red rounded-r-xl">
              <p className="text-xl font-medium italic text-white/90">
                "Nuestro objetivo es y será siempre ser un aliado estratégico con una excelente atención y servicio al cliente."
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <img src="/objetivo1.webp" alt="Equipo R2A" className="rounded-2xl object-cover h-[400px] w-full shadow-2xl" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/r2a-team1/400/600"; }} />
            </div>
            <div className="space-y-6 pt-16">
              <img src="/objetivo2.webp" alt="Instalación R2A" className="rounded-2xl object-cover h-[400px] w-full shadow-2xl" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/r2a-team2/400/600"; }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="soluciones" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">NUESTRAS <span className="text-brand-red">SOLUCIONES</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">Contamos con el personal eficiente y certificado para brindar soluciones integrales en seguridad electrónica y telecomunicaciones.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              onClick={() => navigate(`/servicios/${cat.slug}`)}
              className="glass-card p-6 rounded-2xl border-t-4 border-t-brand-red flex flex-col h-full cursor-pointer hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 flex items-center justify-between">
                {cat.title}
                <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-brand-red transition-colors" />
              </h3>
              <p className="text-white/60 text-sm mb-6 flex-grow leading-relaxed">
                {cat.cardDesc}
              </p>
              {cat.brands && (
                <div className="mt-auto pt-4 border-t border-white/10">
                  <p className="text-xs text-white/40 uppercase tracking-wider font-semibold mb-2">Marcas destacadas:</p>
                  <div className="relative w-full flex overflow-hidden mask-edges h-20">
                    <div className="flex gap-6 animate-marquee whitespace-nowrap items-center">
                      {[...Array(2)].map((_, loopIndex) => (
                        <React.Fragment key={loopIndex}>
                          {cat.brands.split(', ').map((brand, bIndex) => (
                            <BrandLogo key={`${loopIndex}-${bIndex}`} brand={brand} className="shrink-0 px-3 h-16" />
                          ))}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BrokerTelecomSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-brand-dark border-y border-white/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-black/20 skew-x-12 translate-x-1/4"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6">
              <Globe className="w-3 h-3" /> División Especializada
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              BROKER <span className="text-brand-red">TELECOM</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Conectividad empresarial de alto rendimiento. Internet dedicado, LAN to LAN y Troncales IP con cobertura en las principales ciudades de México.
            </p>
            <button 
              onClick={() => navigate('/broker-telecom')}
              className="bg-white text-[#0F172A] hover:bg-gray-200 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all group cursor-pointer"
            >
              VER SERVICIOS TELECOM
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-3xl overflow-hidden border-8 border-white/10 shadow-2xl">
              <img 
                src="/brokertelecomimagen.webp" 
                alt="Torre de Telecomunicaciones" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/telecom-tower/1000/600"; }}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-brand-red p-6 rounded-2xl shadow-2xl text-white">
              <p className="text-3xl font-black mb-1">99.9%</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-80">SLA Garantizado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CiberseguridadSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-brand-gray border-b border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-black/20 -skew-x-12 -translate-x-1/4"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-video rounded-3xl overflow-hidden border-8 border-white/10 shadow-2xl">
              <img 
                src="/ciberseguridadimagen.webp" 
                alt="Centro de Operaciones de Ciberseguridad" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/cybersecurity/1000/600"; }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-red p-6 rounded-2xl shadow-2xl text-white">
              <p className="text-3xl font-black mb-1">24/7</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-80">Monitoreo Continuo</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6">
              <ShieldCheck className="w-3 h-3" /> División Especializada
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              CIBER<span className="text-brand-red">SEGURIDAD</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Protección integral para su infraestructura digital. Prevención de amenazas, análisis de vulnerabilidades y respuesta a incidentes para garantizar la continuidad de su negocio.
            </p>
            <button 
              onClick={() => navigate('/ciberseguridad')}
              className="bg-brand-red text-[#ffffff] hover:bg-red-700 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all group cursor-pointer shadow-lg shadow-brand-red/20"
            >
              VER SERVICIOS DE CIBERSEGURIDAD
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const location = useLocation();
  const [activeMap, setActiveMap] = useState<'villahermosa' | 'tuxtla'>('villahermosa');
  const [isIframeVisible, setIsIframeVisible] = useState(false);
  const iframeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsIframeVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (iframeContainerRef.current) {
      observer.observe(iframeContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (location.hash === '#contacto') {
      setTimeout(() => {
        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return (
    <section id="contacto" className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              HABLEMOS DE <br />
              <span className="text-brand-red">TU PROYECTO</span>
            </h2>
            <p className="text-white/50 text-lg mb-12">
              Estamos listos para diseñar la solución que necesitas. Agenda una reunión directamente en nuestro calendario o contáctanos a través de nuestros canales oficiales.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-red">
                  <Phone />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">Llámanos</p>
                  <p className="text-xl font-bold">+52 55 4145 6851</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-red">
                  <Mail />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">Escríbenos</p>
                  <p className="text-xl font-bold">ventas@r2a.com.mx</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-white/40">Nuestra Ubicación</h3>
                <div className="flex gap-2 bg-white/5 p-1 rounded-lg w-fit">
                  <button
                    onClick={() => setActiveMap('villahermosa')}
                    className={`px-4 py-2 text-xs font-bold rounded-md transition-colors ${activeMap === 'villahermosa' ? 'bg-brand-red text-[#ffffff]' : 'text-white/50 hover:text-white'}`}
                  >
                    Villahermosa
                  </button>
                  <button
                    onClick={() => setActiveMap('tuxtla')}
                    className={`px-4 py-2 text-xs font-bold rounded-md transition-colors ${activeMap === 'tuxtla' ? 'bg-brand-red text-[#ffffff]' : 'text-white/50 hover:text-white'}`}
                  >
                    Tuxtla Gutiérrez
                  </button>
                </div>
              </div>
              
              {activeMap === 'villahermosa' ? (
                <iframe 
                  src="https://maps.google.com/maps?q=R2A+Mexico,+Villahermosa&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="250" 
                  style={{ border: 0, borderRadius: '1rem' }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : (
                <div className="relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.1505076087765!2d-93.17680651522299!3d16.769185942803816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd934cf2ade75%3A0x52e7711cd6e36952!2sR2A%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1773788574847!5m2!1ses!2sus" 
                    width="100%" 
                    height="250" 
                    style={{ border: 0, borderRadius: '1rem' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <a 
                    href="https://maps.app.goo.gl/XPNT5wsJJXzkkdSx6" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="absolute bottom-4 right-4 bg-brand-dark/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-xs font-bold border border-white/10 hover:bg-brand-red transition-colors flex items-center gap-2"
                  >
                    Abrir en Google Maps
                  </a>
                </div>
              )}
            </div>
          </div>

          <div ref={iframeContainerRef} className="bg-brand-dark p-2 rounded-3xl border border-white/10 shadow-2xl h-fit overflow-hidden min-h-[800px] flex items-center justify-center">
            {/* 
              NOTA: Para cambiar la URL de Microsoft Bookings en el futuro, 
              solo debes reemplazar el atributo 'src' de este iframe con tu nuevo enlace.
            */}
            {isIframeVisible ? (
              <iframe 
                src="https://outlook.office.com/bookwithme/user/d60d482122d6426d8e38f7285ba9b2a7@corp-mx.com?anonymous&ep=plink" 
                width="100%" 
                height="800" 
                style={{ border: 0, borderRadius: '1.5rem', backgroundColor: 'white' }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            ) : (
              <div className="text-white/50 flex flex-col items-center">
                <div className="w-8 h-8 border-4 border-brand-red border-t-transparent rounded-full animate-spin mb-4"></div>
                <p>Cargando agenda...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-brand-dark border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="R2A México" 
                className="h-10 object-contain logo-dark"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <img 
                src="/logo-claro.png" 
                alt="R2A México" 
                className="h-10 object-contain logo-light"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden text-xl font-extrabold tracking-tighter">
                R2A<span className="text-brand-red">MÉXICO</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Soluciones en seguridad electrónica a nivel físico y lógico, para proteger lo más importante para usted.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/r2amexico" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/r2amexico/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/r2a-mexico" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/r2a_mexico" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@r2amexico" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer">
                <Video className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-red">Contacto</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +52 993 351 1828</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +52 55 4145 6851</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> ventas@r2a.com.mx</li>
              <li className="flex items-center gap-2"><Globe className="w-4 h-4" /> www.r2a.com.mx</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} R2A México S.A. de C.V. Todos los derechos reservados.
          </p>
          <Link to="/aviso-de-privacidad" className="text-white/40 text-xs hover:text-white transition-colors">
            Aviso de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5215510348105"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-[#ffffff] p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors hover:scale-110 transform duration-200"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
};

// --- Pages ---

const BrokerTelecomPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-gray">
      <div className="max-w-5xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-brand-red transition-colors mb-8">
          <ArrowRight className="w-4 h-4 rotate-180" /> Volver al inicio
        </Link>
        
        <div className="glass-card p-10 rounded-3xl border-t-4 border-t-brand-red">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold tracking-widest uppercase mb-4">
                <Globe className="w-3 h-3" /> División Especializada
              </div>
              <h1 className="text-4xl md:text-6xl font-black">
                BROKER <span className="text-brand-red">TELECOM</span>
              </h1>
            </div>
            <div className="bg-brand-dark p-4 rounded-xl border border-white/10 text-right">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Autorización</p>
              <p className="font-mono font-bold text-white/90">IFT/223/UCS/2084/2018</p>
            </div>
          </div>

          <div className="mb-12 bg-white/5 p-6 rounded-2xl border border-white/10 border-l-4 border-l-brand-red">
            <p className="text-white/80 leading-relaxed text-lg">
              En R2A México actuamos como <strong className="text-white">comercializadores e integradores</strong> de soluciones de telecomunicaciones. <span className="text-white font-medium">Operamos a través de carriers autorizados en México</span>, lo que nos permite ofrecerte de manera imparcial las mejores opciones y tecnologías disponibles en el mercado, adaptadas exactamente a las necesidades de tu empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-brand-dark p-8 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-red mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Internet Dedicado</h3>
              <p className="text-white/60 leading-relaxed">
                Acceso a internet de alta capacidad que garantiza la conexión de las aplicaciones críticas de tu empresa.
              </p>
            </div>
            <div className="bg-brand-dark p-8 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-red mb-6">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">LAN to LAN</h3>
              <p className="text-white/60 leading-relaxed">
                Enlaces dedicados y privados con una conexión permanente punto a punto o punto multipunto.
              </p>
            </div>
            <div className="bg-brand-dark p-8 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-red mb-6">
                <Radio className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Internet Best Effort</h3>
              <p className="text-white/60 leading-relaxed">
                El mejor servicio disponible que resuelve los problemas de conectividad en tu empresa.
              </p>
            </div>
            <div className="bg-brand-dark p-8 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-red mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Troncales IP</h3>
              <p className="text-white/60 leading-relaxed">
                Servicio de VoIP y Comunicaciones Unificadas para tu empresa.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-12 mb-12 overflow-hidden">
            <h3 className="text-2xl font-bold mb-8 text-center">Contamos con cobertura en las principales ciudades de México</h3>
            <div className="relative w-full flex overflow-hidden mb-8 mask-edges">
              <div className="flex gap-6 animate-marquee whitespace-nowrap">
                {[...Array(4)].map((_, i) => (
                  <React.Fragment key={i}>
                    <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl flex items-center justify-center shrink-0 h-16 w-64">
                      <img 
                        src="/logos/alestra.png" 
                        alt="Alestra" 
                        className="max-h-8 max-w-[120px] object-contain opacity-80 hover:opacity-100 transition-opacity" 
                        onError={(e) => { 
                          e.currentTarget.style.display = 'none'; 
                          e.currentTarget.nextElementSibling?.classList.remove('hidden'); 
                        }} 
                      />
                      <span className="hidden text-white/80 font-bold text-sm">Integrador Autorizado <span className="text-white">alestra</span></span>
                    </div>
                    <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl flex items-center justify-center shrink-0 h-16 w-64">
                      <img 
                        src="/logos/metrocarrier.png" 
                        alt="MetroCarrier" 
                        className="max-h-8 max-w-[120px] object-contain opacity-80 hover:opacity-100 transition-opacity" 
                        onError={(e) => { 
                          e.currentTarget.style.display = 'none'; 
                          e.currentTarget.nextElementSibling?.classList.remove('hidden'); 
                        }} 
                      />
                      <span className="hidden text-white/80 font-bold text-sm">Socio Comercial <span className="text-white">MetroCarrier</span></span>
                    </div>
                    <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl flex items-center justify-center shrink-0 h-16 w-64">
                      <img 
                        src="/logos/net2phone.png" 
                        alt="net2phone" 
                        className="max-h-8 max-w-[120px] object-contain opacity-80 hover:opacity-100 transition-opacity" 
                        onError={(e) => { 
                          e.currentTarget.style.display = 'none'; 
                          e.currentTarget.nextElementSibling?.classList.remove('hidden'); 
                        }} 
                      />
                      <span className="hidden text-white/80 font-bold text-sm"><span className="text-white">net2phone</span> Partner Autorizado</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <p className="text-center text-white/70 text-lg">
              De acuerdo a sus necesidades podrá adquirir desde 1 SIP trunk hasta un ancho de banda de 100 Gbps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-brand-dark p-8 rounded-2xl border border-white/10">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-brand-red">Gestión y Ventas</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                  <AlertTriangle className="text-brand-red" />
                  <span className="font-bold">Red monitoreada 7x24x365 (NOC)</span>
                </div>
                <div className="flex items-center gap-4 bg-brand-red/10 p-4 rounded-xl border border-brand-red/20">
                  <CheckCircle2 className="text-brand-red" />
                  <span className="font-bold text-xl text-brand-red">99.9% SLA</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-brand-red">Contacto Directo</h3>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-brand-red" /> +52 1 55 1034 8105</li>
                <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-brand-red" /> +52 1 55 7877 7227</li>
                <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-brand-red" /> +52 1 999 906 3766</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/?service=Broker%20Telecom#contacto" className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-red-700 text-[#ffffff] px-8 py-4 rounded-xl font-black text-lg transition-all shadow-lg shadow-brand-red/20">
              COTIZAR SERVICIO TELECOM
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const CiberseguridadPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-gray">
      <div className="max-w-5xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-brand-red transition-colors mb-8">
          <ArrowRight className="w-4 h-4 rotate-180" /> Volver al inicio
        </Link>
        
        <div className="glass-card p-10 rounded-3xl border-t-4 border-t-brand-red">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold tracking-widest uppercase mb-4">
                <ShieldCheck className="w-3 h-3" /> División Especializada
              </div>
              <h1 className="text-4xl md:text-6xl font-black">
                CIBER<span className="text-brand-red">SEGURIDAD</span>
              </h1>
            </div>
            <div className="bg-brand-dark p-4 rounded-xl border border-white/10 text-right">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Certificación</p>
              <img src="/logos/iso27001.png" alt="ISO 27001" className="h-8 object-contain ml-auto" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
              <p className="hidden font-mono font-bold text-white/90">ISO 27001</p>
            </div>
          </div>

          <div className="mb-12 bg-white/5 p-6 rounded-2xl border border-white/10 border-l-4 border-l-brand-red">
            <p className="text-white/80 leading-relaxed text-lg">
              En R2A México somos especialistas en <strong className="text-white">ciberseguridad y protección de datos</strong>. <span className="text-white font-medium">Contamos con certificaciones internacionales y somos partners oficiales</span> de los líderes mundiales en seguridad informática, lo que nos permite diseñar e implementar estrategias de defensa robustas y adaptadas a las necesidades críticas de tu empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-brand-dark p-8 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-red mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Protección de Endpoints</h3>
              <p className="text-white/60 leading-relaxed">
                Seguridad avanzada para todos los dispositivos de su red, previniendo malware, ransomware y ataques de día cero.
              </p>
            </div>
            <div className="bg-brand-dark p-8 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-red mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Seguridad Perimetral</h3>
              <p className="text-white/60 leading-relaxed">
                Firewalls de próxima generación (NGFW) y sistemas de prevención de intrusos (IPS) para proteger los límites de su red.
              </p>
            </div>
            <div className="bg-brand-dark p-8 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-red mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Análisis de Vulnerabilidades</h3>
              <p className="text-white/60 leading-relaxed">
                Evaluaciones continuas para identificar y mitigar riesgos en su infraestructura antes de que sean explotados.
              </p>
            </div>
            <div className="bg-brand-dark p-8 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-red mb-6">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Respuesta a Incidentes</h3>
              <p className="text-white/60 leading-relaxed">
                Equipo de expertos listos para actuar de inmediato ante cualquier brecha de seguridad, minimizando el impacto.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-12 mb-12 overflow-hidden">
            <h3 className="text-2xl font-bold mb-8 text-center">Partners Certificados en Ciberseguridad</h3>
            <div className="flex justify-center mb-8">
              <div className="bg-white/5 border border-white/10 px-8 py-6 rounded-2xl flex flex-col items-center justify-center w-72 hover:bg-white/10 transition-colors">
                <img 
                  src="/logos/endpointprotector.png" 
                  alt="Endpointprotector" 
                  className="max-h-12 max-w-[160px] object-contain opacity-90 hover:opacity-100 transition-opacity mb-3" 
                  onError={(e) => { 
                    e.currentTarget.style.display = 'none'; 
                    e.currentTarget.nextElementSibling?.classList.remove('hidden'); 
                  }} 
                />
                <span className="hidden text-white font-bold text-xl mb-2">Endpointprotector</span>
                <span className="text-brand-red font-bold text-xs uppercase tracking-widest px-3 py-1 bg-brand-red/10 rounded-full">Partner Oficial</span>
              </div>
            </div>
            <p className="text-center text-white/70 text-lg">
              Integramos las tecnologías más avanzadas del mercado para ofrecer una defensa robusta y adaptativa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-brand-dark p-8 rounded-2xl border border-white/10">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-brand-red">Centro de Operaciones</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                  <ShieldCheck className="text-brand-red" />
                  <span className="font-bold">Certificación ISO 27001</span>
                </div>
                <div className="flex items-center gap-4 bg-brand-red/10 p-4 rounded-xl border border-brand-red/20">
                  <CheckCircle2 className="text-brand-red" />
                  <span className="font-bold text-xl text-brand-red">Respuesta Inmediata</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-brand-red">Contacto Directo</h3>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-brand-red" /> ciberseguridad@r2a.com.mx</li>
                <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-brand-red" /> +52 55 9337 3832</li>
                <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-brand-red" /> +52 993 351 1828</li>
                <li className="flex items-center gap-3"><MessageCircle className="w-5 h-5 text-green-500" /> +52 1 993 342 0755</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/?service=Ciberseguridad#contacto" className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-red-700 text-[#ffffff] px-8 py-4 rounded-xl font-black text-lg transition-all shadow-lg shadow-brand-red/20">
              COTIZAR SERVICIO DE CIBERSEGURIDAD
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const IsoCertificationSection = () => {
  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="md:w-1/3 flex justify-center order-2 md:order-1">
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 flex items-center justify-center w-full max-w-[400px] relative">
              <div className="absolute inset-0 bg-slate-100 rounded-3xl transform rotate-3 -z-10"></div>
              <img 
                src="/iso27001.png" 
                alt="Certificación ISO 27001" 
                className="w-full h-auto object-contain"
                onError={(e) => { 
                  e.currentTarget.style.display = 'none'; 
                  e.currentTarget.nextElementSibling?.classList.remove('hidden'); 
                }}
              />
              <div className="hidden flex-col items-center text-center">
                <ShieldCheck className="w-20 h-20 text-brand-dark mb-4" />
                <span className="font-black text-2xl text-brand-dark">ISO 27001</span>
                <span className="text-gray-500 font-medium mt-2">Certificado Oficial</span>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gray text-white font-bold text-sm mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Seguridad de la Información</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
              Certificados en <span className="text-brand-red">ISO 27001</span>
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-10">
              En R2A México, la protección de tus datos es nuestra máxima prioridad. Contamos con la certificación internacional ISO 27001, garantizando que nuestros procesos, operaciones y servicios cumplen con los estándares globales más estrictos.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-gray flex items-center justify-center shrink-0">
                  <Lock className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white mb-1">Confidencialidad</h4>
                  <p className="text-white/60 text-sm">Acceso restringido solo a personal autorizado.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-gray flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white mb-1">Integridad</h4>
                  <p className="text-white/60 text-sm">Datos exactos, completos y libres de alteraciones.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-gray flex items-center justify-center shrink-0">
                  <Server className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white mb-1">Disponibilidad</h4>
                  <p className="text-white/60 text-sm">Información accesible siempre que la necesites.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-gray flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white mb-1">Gestión de Riesgos</h4>
                  <p className="text-white/60 text-sm">Identificación y mitigación proactiva de amenazas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <BrokerTelecomSection />
      <CiberseguridadSection />
      <IsoCertificationSection />
      <SolutionsSection />
      <ContactForm />
    </>
  );
};

const SolutionPage = () => {
  const location = useLocation();
  const slug = location.pathname.split('/').pop();
  const category = categories.find(c => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (category) {
      document.title = `${category.title} | R2A México`;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', category.metaDescription);
    }
  }, [slug, category]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Solución no encontrada</h2>
          <Link to="/" className="text-brand-red hover:underline">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <Link to="/#soluciones" className="inline-flex items-center gap-2 text-white/50 hover:text-brand-red transition-colors mb-8">
          <ArrowRight className="w-4 h-4 rotate-180" /> Volver a soluciones
        </Link>
        
        <div className="glass-card p-10 rounded-3xl border-t-4 border-t-brand-red">
          <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
            <div className="flex-1">
              <div className="w-20 h-20 bg-brand-red/10 rounded-2xl flex items-center justify-center text-brand-red mb-8">
                {React.cloneElement(category.icon as React.ReactElement, { className: 'w-10 h-10' })}
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">{category.h1}</h1>
              <p className="text-xl text-white/70 leading-relaxed">
                {category.desc}
              </p>
            </div>
            <div className="w-full md:w-1/3 shrink-0">
              <img 
                src={`/${category.id}.webp`} 
                alt={category.altImage} 
                className="w-full h-64 object-cover rounded-2xl shadow-xl border border-white/10"
                onError={(e) => { e.currentTarget.src = `https://picsum.photos/seed/${category.id}/600/400`; }}
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Shield className="text-brand-red" /> Beneficios y Servicios Específicos
              </h2>
              <ul className="space-y-4">
                {category.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-white/80 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              {category.brands && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <CheckCircle2 className="text-brand-red" /> Integración con Marcas Líderes
                  </h2>
                  <div className="bg-brand-dark p-6 rounded-xl border border-white/10 overflow-hidden">
                    <p className="text-white/80 leading-relaxed mb-6">
                      Trabajamos con los líderes de la industria para garantizar la máxima calidad, confiabilidad y transferir autoridad a su infraestructura:
                    </p>
                    <div className="relative w-full flex overflow-hidden mask-edges h-20">
                      <div className="flex gap-6 animate-marquee whitespace-nowrap items-center">
                        {[...Array(2)].map((_, loopIndex) => (
                          <React.Fragment key={loopIndex}>
                            {category.brands.split(', ').map((brand, bIndex) => (
                              <div key={`${loopIndex}-${bIndex}`} className="bg-white/5 px-6 py-3 rounded-xl flex items-center justify-center shrink-0 h-16 min-w-[160px] border border-white/10">
                                <BrandLogo brand={brand} className="h-8 w-auto max-w-[120px]" />
                              </div>
                            ))}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="mt-8">
                <Link to={`/?service=${encodeURIComponent(category.title)}#contacto`} className="w-full bg-brand-red hover:bg-red-700 text-[#ffffff] py-4 rounded-xl font-black text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-red/20 cursor-pointer">
                  {category.ctaText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-brand-dark min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-black mb-8">AVISO DE <span className="text-brand-red">PRIVACIDAD</span></h1>
        
        <div className="prose prose-invert max-w-none text-white/70 space-y-6">
          <p><strong>Última actualización:</strong> 10/03/2026</p>
          
          <p>
            R2A México, empresa especializada en soluciones de seguridad electrónica, videovigilancia, control de accesos, radiocomunicación y telecomunicaciones es responsable del tratamiento de los datos personales que recaba.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Datos personales recabados</h2>
          <p>Podemos recabar:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Nombre</li>
            <li>Empresa</li>
            <li>Teléfono</li>
            <li>Correo electrónico</li>
            <li>Dirección del sitio donde se realizará la instalación</li>
            <li>Información técnica relacionada con proyectos de seguridad</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Finalidades</h2>
          
          <h3 className="text-xl font-bold text-white mt-6 mb-3">Primarias</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Elaboración de cotizaciones</li>
            <li>Diseño de soluciones de seguridad</li>
            <li>Prestación de servicios de instalación, mantenimiento o soporte</li>
            <li>Seguimiento comercial y atención a clientes</li>
          </ul>

          <h3 className="text-xl font-bold text-white mt-6 mb-3">Secundarias</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Envío de información comercial</li>
            <li>Invitaciones a demostraciones o presentaciones de tecnología</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Transferencia de datos</h2>
          <p>
            Los datos podrán compartirse con empresas del grupo CORP-MX para fines operativos o comerciales relacionados con los servicios solicitados.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Derechos ARCO</h2>
          <p>
            Podrá ejercer sus derechos ARCO enviando una solicitud a:<br />
            <a href="mailto:ventas@r2a.com.mx" className="text-brand-red hover:underline">ventas@r2a.com.mx</a>
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Cambios al aviso</h2>
          <p>
            Cualquier modificación será publicada en nuestro sitio web.
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios/:slug" element={<SolutionPage />} />
            <Route path="/broker-telecom" element={<BrokerTelecomPage />} />
            <Route path="/ciberseguridad" element={<CiberseguridadPage />} />
            <Route path="/aviso-de-privacidad" element={<PrivacyPolicyPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
