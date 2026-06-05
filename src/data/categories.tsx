import React from 'react';
import { Cpu, Radio, Cctv, MapPin, Wifi, MonitorPlay, TowerControl, Activity } from 'lucide-react';

export interface Category {
  id: string;
  slug: string;
  h1: string;
  metaDescription: string;
  ctaText: string;
  altImage: string;
  title: string;
  icon: React.ReactNode;
  items: string[];
  brands: string;
  desc: string;
  cardDesc: string;
}

export const categories: Category[] = [
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
    ctaText: 'Solicitante Diagnóstico de Comunicación',
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
    brands: 'Teltonika, Ruptela, Wialon',
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
    brands: 'Sonos, Lea, Lutron, HPMLED',
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
    brands: 'Womaster',
    desc: 'Sistemas avanzados de telemetría para la medición, monitoreo y control remoto de variables físicas y químicas en tiempo real, optimizando la toma de decisiones.',
    cardDesc: 'Sistemas avanzados para la medición, monitoreo y control remoto de variables en tiempo real, optimizando la toma de decisiones operativas.'
  }
];
