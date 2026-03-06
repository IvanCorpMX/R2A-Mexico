import React, { useState, useEffect } from 'react';
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
  Video
} from 'lucide-react';

// --- Data ---
const categories = [
  {
    id: 'automatizacion',
    title: 'Automatización',
    icon: <Cpu />,
    items: ['Sistemas de Alarmas', 'Cercos Eléctricos', 'Identificación y Credencialización', 'Biométricos', 'Acceso Vehicular', 'Torniquetes y Puertas'],
    brands: 'Honeywell, Resideo, Yonusa, Zebra, ZKTeco',
    desc: 'Soluciones inteligentes para el control y automatización de accesos y seguridad perimetral. Integramos tecnología de punta para garantizar la protección de sus instalaciones con sistemas robustos y confiables.'
  },
  {
    id: 'radiocomunicacion',
    title: 'Radiocomunicaciones',
    icon: <Radio />,
    items: ['Radios Comerciales', 'Amplificadores', 'Antenas', 'Repetidores', 'Accesorios Originales'],
    brands: 'Icom, Kenwood',
    desc: 'Sistemas de comunicación eficientes y seguros para entornos industriales, comerciales y de emergencia. Aseguramos conectividad constante en cualquier situación crítica.'
  },
  {
    id: 'torres',
    title: 'Torres de Telecomunicaciones',
    icon: <TowerControl />,
    items: ['Arriostradas (9 a 90 metros)', 'Auto-soportadas', 'Mástiles', 'Alojamiento de Infraestructura', 'Implementación y Monitoreo'],
    brands: 'Diseño de Ingeniería',
    desc: 'Diseño, instalación y mantenimiento de infraestructura para telecomunicaciones. Ofrecemos soluciones estructurales adaptadas a las necesidades específicas de cobertura y capacidad.'
  },
  {
    id: 'gps',
    title: 'GPS y Monitoreo',
    icon: <MapPin />,
    items: ['Plataforma Telemétrica', 'Seguridad Personal', 'GPS y Control de Combustible', 'Bloqueo de Encendido'],
    brands: 'Teltonika, Ruptela',
    desc: 'Rastreo y gestión de flotas en tiempo real. Optimice sus recursos, reduzca costos operativos y garantice la seguridad de sus vehículos y personal en movimiento.'
  },
  {
    id: 'videovigilancia',
    title: 'Videovigilancia',
    icon: <Cctv />,
    items: ['Software CMS y VMS', 'Videoportero', 'Cámaras Bala y Domo', 'Cámaras PTZ', 'Videograbadores'],
    brands: 'Hikvision, Provision ISR, Dahua',
    desc: 'Sistemas de circuito cerrado de televisión (CCTV) de alta definición. Monitoreo continuo y almacenamiento seguro para la prevención y análisis de incidentes.'
  },
  {
    id: 'enlaces',
    title: 'Enlaces PtP y PtMP',
    icon: <Wifi />,
    items: ['Enlaces Backhaul (PtP)', 'Enlaces para alto Desempeño', 'Zonas urbanas y suburbanas', 'Frecuencias con y sin licencia'],
    brands: 'Ubiquiti, Mimosa',
    desc: 'Conectividad inalámbrica de alta velocidad y confiabilidad. Diseñamos redes punto a punto y punto a multipunto para extender su red corporativa o proveer acceso a internet.'
  },
  {
    id: 'fuego',
    title: 'Detección de Fuego',
    icon: <Flame />,
    items: ['Detectores de Humo', 'Detector de Temperatura', 'Paneles contra Incendios', 'Notificación y Voceo', 'Señalamientos'],
    brands: 'Honeywell',
    desc: 'Sistemas tempranos de detección de incendios. Protegemos vidas y activos mediante tecnología de alerta rápida y precisa, cumpliendo con las normativas de seguridad.'
  },
  {
    id: 'audiovideo',
    title: 'Audio y Video',
    icon: <MonitorPlay />,
    items: ['Voceo y Audio', 'Videowall', 'Extensores y Divisores', 'Repetidores', 'Sistemas de Evacuación por Voz'],
    brands: 'Sonos',
    desc: 'Soluciones audiovisuales profesionales para salas de control, corporativos y espacios comerciales. Comunicación clara y visualización de alto impacto.'
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            className="h-10 object-contain"
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
            className="bg-brand-red hover:bg-red-700 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Download className="w-4 h-4" /> BROCHURE
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
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
                className="bg-brand-red text-white text-center py-3 rounded-lg font-bold flex items-center justify-center gap-2"
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
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold tracking-widest uppercase mb-4">
            <Shield className="w-3 h-3" /> Seguridad Electrónica
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            PROTEGEMOS LO MÁS <br />
            <span className="text-brand-red">IMPORTANTE PARA USTED</span>
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            R2A México S.A. de C.V. inicia operaciones en el año 2014 con el propósito de asegurar su entorno, ofrecemos soluciones en seguridad electrónica a nivel físico y lógico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <a 
              href="#soluciones" 
              onClick={(e) => handleNavClick(e, '#soluciones')}
              className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all group"
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
              Contamos con un equipo de trabajo que cuenta con experiencia de hasta 8 años en la gestión, planeación y ejecución de diversos proyectos en Seguridad Electrónica para los distintos sectores e industrias de nuestro país.
            </p>
            <div className="p-6 bg-brand-dark border-l-4 border-brand-red rounded-r-xl">
              <p className="text-xl font-medium italic text-white/90">
                "Nuestro objetivo es y será siempre ser un aliado estratégico con una excelente atención y servicio al cliente."
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="/objetivo1.webp" alt="Equipo R2A" className="rounded-2xl object-cover h-64 w-full" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/r2a-team1/400/500"; }} />
              <img src="/objetivo2.webp" alt="Instalación R2A" className="rounded-2xl object-cover h-48 w-full" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/r2a-team2/400/400"; }} />
            </div>
            <div className="space-y-4 pt-12">
              <img src="/objetivo3.webp" alt="Tecnología R2A" className="rounded-2xl object-cover h-48 w-full" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/r2a-team3/400/400"; }} />
              <img src="/objetivo4.webp" alt="Monitoreo R2A" className="rounded-2xl object-cover h-64 w-full" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/r2a-team4/400/500"; }} />
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
              onClick={() => navigate(`/solucion/${cat.id}`)}
              className="glass-card p-6 rounded-2xl border-t-4 border-t-brand-red flex flex-col h-full cursor-pointer hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 flex items-center justify-between">
                {cat.title}
                <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-brand-red transition-colors" />
              </h3>
              <ul className="space-y-2 mb-6 flex-grow">
                {cat.items.slice(0, 3).map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-white/60 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
                {cat.items.length > 3 && (
                  <li className="text-xs text-brand-red font-medium mt-2">
                    + {cat.items.length - 3} más...
                  </li>
                )}
              </ul>
              <div className="mt-auto pt-4 border-t border-white/10">
                <p className="text-xs text-white/40 uppercase tracking-wider font-semibold mb-2">Marcas destacadas:</p>
                <div className="relative w-full flex overflow-hidden mask-edges h-8">
                  <div className="flex gap-4 animate-marquee whitespace-nowrap items-center">
                    {[...Array(2)].map((_, loopIndex) => (
                      <React.Fragment key={loopIndex}>
                        {cat.brands.split(', ').map((brand, bIndex) => (
                          <div key={`${loopIndex}-${bIndex}`} className="flex items-center justify-center shrink-0 px-2">
                            <img 
                              src={`/${brand.toLowerCase().replace(/\s+/g, '')}.png`} 
                              alt={brand} 
                              className="max-h-6 max-w-[80px] object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                              }}
                            />
                            <span className="hidden text-sm font-bold text-white/80">{brand}</span>
                          </div>
                        ))}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
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
              className="bg-white text-brand-dark hover:bg-gray-200 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all group cursor-pointer"
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
              <p className="text-3xl font-black mb-1">96.5%</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-80">SLA Garantizado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
    }
    if (location.hash === '#contacto') {
      setTimeout(() => {
        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'El nombre es requerido';
    if (!formData.email) {
      newErrors.email = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Correo inválido';
    }
    if (!formData.service) newErrors.service = 'Seleccione un servicio de interés';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' });
        alert('Formulario enviado con éxito. Nos pondremos en contacto pronto.');
      }, 1500);
    }
  };

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
              Estamos listos para diseñar la solución que necesitas. Completa el formulario o contáctanos directamente a través de nuestros canales oficiales.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-red">
                  <Phone />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">Llámanos</p>
                  <p className="text-xl font-bold">+52 993 351 1828</p>
                  <p className="text-xl font-bold">+52 993 342 2134</p>
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
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-red">
                  <Globe />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">Sitio Web</p>
                  <p className="text-xl font-bold">www.r2a.com.mx</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Nuestra Ubicación</h3>
              <iframe 
                src="https://maps.google.com/maps?q=R2A+Mexico,+Villahermosa&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="250" 
                style={{ border: 0, borderRadius: '1rem' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="bg-brand-dark p-10 rounded-3xl border border-white/10 shadow-2xl h-fit">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Nombre Completo *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className={`w-full bg-white/5 border ${errors.name ? 'border-brand-red' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red transition-colors`} placeholder="Ej. Juan Pérez" />
                  {errors.name && <p className="text-brand-red text-xs mt-1">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Empresa</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red transition-colors" placeholder="Nombre de tu empresa" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Correo Electrónico *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className={`w-full bg-white/5 border ${errors.email ? 'border-brand-red' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red transition-colors`} placeholder="juan@empresa.com" />
                  {errors.email && <p className="text-brand-red text-xs mt-1">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Teléfono</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red transition-colors" placeholder="993 123 4567" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Servicio de Interés *</label>
                <div className="relative">
                  <select name="service" value={formData.service} onChange={handleChange} className={`w-full bg-brand-dark border ${errors.service ? 'border-brand-red' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red transition-colors appearance-none text-white`}>
                    <option value="" disabled className="bg-brand-dark text-white/50">Selecciona una opción</option>
                    <option value="Automatización" className="bg-brand-dark text-white">Automatización</option>
                    <option value="Radiocomunicaciones" className="bg-brand-dark text-white">Radiocomunicaciones</option>
                    <option value="Torres de Telecomunicaciones" className="bg-brand-dark text-white">Torres de Telecomunicaciones</option>
                    <option value="GPS y Monitoreo" className="bg-brand-dark text-white">GPS y Monitoreo</option>
                    <option value="Videovigilancia" className="bg-brand-dark text-white">Videovigilancia</option>
                    <option value="Enlaces PtP y PtMP" className="bg-brand-dark text-white">Enlaces PtP y PtMP</option>
                    <option value="Detección de Fuego" className="bg-brand-dark text-white">Detección de Fuego</option>
                    <option value="Audio y Video" className="bg-brand-dark text-white">Audio y Video</option>
                    <option value="Broker Telecom" className="bg-brand-dark text-white">Broker Telecom</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/50">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
                {errors.service && <p className="text-brand-red text-xs mt-1">{errors.service}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Mensaje / Detalles</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red transition-colors" placeholder="Cuéntanos brevemente tus necesidades..."></textarea>
              </div>
              <button type="submit" disabled={isSubmitted} className="w-full bg-brand-red hover:bg-red-700 disabled:opacity-50 text-white py-4 rounded-xl font-black text-lg transition-all transform active:scale-95 shadow-lg shadow-brand-red/20">
                {isSubmitted ? 'ENVIANDO...' : 'ENVIAR SOLICITUD'}
              </button>
            </form>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-red flex items-center justify-center rounded-lg rotate-45">
                <Shield className="text-white -rotate-45 w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tighter">
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
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-red">Áreas de Servicio</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li>Tabasco</li>
              <li>Sur de Veracruz</li>
              <li>Chiapas</li>
              <li>Campeche</li>
              <li>Mérida</li>
              <li>Cancún</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-red">Contacto</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +52 993 351 1828</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +52 993 342 2134</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> ventas@r2a.com.mx</li>
              <li className="flex items-center gap-2"><Globe className="w-4 h-4" /> www.r2a.com.mx</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-red">Marcas Asociadas</h4>
            <div className="flex flex-wrap gap-2">
              {['Honeywell', 'ZKTeco', 'Kenwood', 'Hikvision', 'Ubiquiti', 'Sonos', 'Teltonika'].map(brand => (
                <span key={brand} className="bg-white/5 px-3 py-1 rounded-full text-xs text-white/60 border border-white/10">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} R2A México S.A. de C.V. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/529933511828"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors hover:scale-110 transform duration-200"
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
                    <div className="bg-white px-6 py-3 rounded-xl flex items-center justify-center shrink-0 h-16 w-64">
                      <img src="/alestra.png" alt="Alestra" className="max-h-full max-w-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
                      <span className="hidden text-black font-bold text-sm">Integrador Autorizado <span className="text-blue-600">alestra</span></span>
                    </div>
                    <div className="bg-white px-6 py-3 rounded-xl flex items-center justify-center shrink-0 h-16 w-64">
                      <img src="/metrocarrier.png" alt="MetroCarrier" className="max-h-full max-w-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
                      <span className="hidden text-black font-bold text-sm">Socio Comercial <span className="text-blue-500">MetroCarrier</span></span>
                    </div>
                    <div className="bg-white px-6 py-3 rounded-xl flex items-center justify-center shrink-0 h-16 w-64">
                      <img src="/net2phone.png" alt="net2phone" className="max-h-full max-w-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
                      <span className="hidden text-black font-bold text-sm"><span className="text-blue-600">net2phone</span> Partner Autorizado</span>
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
                  <span className="font-bold text-xl text-brand-red">96.5% SLA</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-brand-red">Contacto Directo</h3>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-brand-red" /> bt@r2a.com.mx</li>
                <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-brand-red" /> +52 55 9337 3832</li>
                <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-brand-red" /> +52 993 351 1828</li>
                <li className="flex items-center gap-3"><MessageCircle className="w-5 h-5 text-green-500" /> +52 55 7901 7377</li>
                <li className="flex items-center gap-3"><MessageCircle className="w-5 h-5 text-green-500" /> +52 993 342 2134</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/?service=Broker%20Telecom#contacto" className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-xl font-black text-lg transition-all shadow-lg shadow-brand-red/20">
              COTIZAR SERVICIO TELECOM
            </Link>
            <a href="/brochure-telecom.pdf" download className="inline-flex items-center justify-center gap-2 bg-white text-brand-dark hover:bg-gray-200 px-8 py-4 rounded-xl font-black text-lg transition-all shadow-lg">
              <Download className="w-5 h-5" /> DESCARGAR BROCHURE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <BrokerTelecomSection />
      <SolutionsSection />
      <ContactForm />
    </>
  );
};

const SolutionPage = () => {
  const location = useLocation();
  const id = location.pathname.split('/').pop();
  const category = categories.find(c => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/#soluciones" className="inline-flex items-center gap-2 text-white/50 hover:text-brand-red transition-colors mb-8">
          <ArrowRight className="w-4 h-4 rotate-180" /> Volver a soluciones
        </Link>
        
        <div className="glass-card p-10 rounded-3xl border-t-4 border-t-brand-red">
          <div className="w-20 h-20 bg-brand-red/10 rounded-2xl flex items-center justify-center text-brand-red mb-8">
            {React.cloneElement(category.icon as React.ReactElement, { className: 'w-10 h-10' })}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black mb-6">{category.title}</h1>
          <p className="text-xl text-white/70 leading-relaxed mb-10">
            {category.desc}
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Shield className="text-brand-red" /> Servicios Incluidos
              </h3>
              <ul className="space-y-4">
                {category.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-white/80 bg-white/5 p-4 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-brand-red" /> Marcas que Manejamos
              </h3>
              <div className="bg-brand-dark p-6 rounded-xl border border-white/10">
                <p className="text-white/80 leading-relaxed">
                  Trabajamos con los líderes de la industria para garantizar la máxima calidad y confiabilidad:
                </p>
                <div className="mt-6 flex flex-wrap gap-4 items-center">
                  {category.brands.split(', ').map(brand => (
                    <div key={brand} className="bg-white/5 px-4 py-2 rounded-xl flex items-center justify-center h-12 min-w-[100px] border border-white/10">
                      <img 
                        src={`/${brand.toLowerCase().replace(/\s+/g, '')}.png`} 
                        alt={brand} 
                        className="max-h-8 max-w-full object-contain filter brightness-0 invert opacity-80"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <span className="hidden text-white font-bold text-sm tracking-wide">{brand}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <Link to={`/?service=${encodeURIComponent(category.title)}#contacto`} className="w-full bg-brand-red hover:bg-red-700 text-white py-4 rounded-xl font-black text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-red/20 cursor-pointer">
                  COTIZAR ESTA SOLUCIÓN
                </Link>
              </div>
            </div>
          </div>
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
            <Route path="/solucion/:id" element={<SolutionPage />} />
            <Route path="/broker-telecom" element={<BrokerTelecomPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
