import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Shield, Globe, Cctv, Lock, Wifi, MapPin, MonitorPlay, TowerControl, Activity, Flame, Server, Zap, CheckCircle2, Radio } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { categories } from '../data/categories';
import { BrandLogo } from '../components/BrandLogo';

const getServiceIcon = (text: string) => {
  const lower = text.toLowerCase();
  if (lower.includes('cámara') || lower.includes('video') || lower.includes('cctv')) return <Cctv className="w-6 h-6 text-brand-red shrink-0" />;
  if (lower.includes('acceso') || lower.includes('puerta') || lower.includes('torniquete')) return <Lock className="w-6 h-6 text-brand-red shrink-0" />;
  if (lower.includes('red') || lower.includes('enlace') || lower.includes('wifi') || lower.includes('inalámbric') || lower.includes('repetidor')) return <Wifi className="w-6 h-6 text-brand-red shrink-0" />;
  if (lower.includes('gps') || lower.includes('rastreo') || lower.includes('flota') || lower.includes('vehículo') || lower.includes('telemétrica')) return <MapPin className="w-6 h-6 text-brand-red shrink-0" />;
  if (lower.includes('audio') || lower.includes('voceo') || lower.includes('sonido') || lower.includes('evacuación')) return <MonitorPlay className="w-6 h-6 text-brand-red shrink-0" />;
  if (lower.includes('torre') || lower.includes('mástil') || lower.includes('infraestructura')) return <TowerControl className="w-6 h-6 text-brand-red shrink-0" />;
  if (lower.includes('telemetría') || lower.includes('sensor') || lower.includes('monitoreo') || lower.includes('variable')) return <Activity className="w-6 h-6 text-brand-red shrink-0" />;
  if (lower.includes('radio') || lower.includes('comunicación')) return <Radio className="w-6 h-6 text-brand-red shrink-0" />;
  if (lower.includes('fuego') || lower.includes('incendio') || lower.includes('alarma')) return <Flame className="w-6 h-6 text-brand-red shrink-0" />;
  if (lower.includes('servidor') || lower.includes('almacenamiento') || lower.includes('grabador')) return <Server className="w-6 h-6 text-brand-red shrink-0" />;
  if (lower.includes('cerco') || lower.includes('eléctrico') || lower.includes('energía')) return <Zap className="w-6 h-6 text-brand-red shrink-0" />;
  return <CheckCircle2 className="w-6 h-6 text-brand-red shrink-0" />;
};

export const SolutionPage = () => {
  const location = useLocation();
  const slug = location.pathname.split('/').pop();
  const category = categories.find(c => c.slug === slug);

  const serviceSchema = category ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": category.title,
    "alternateName": category.h1,
    "description": category.metaDescription,
    "serviceType": "Electronic Security and Telecommunications",
    "provider": {
      "@type": "LocalBusiness",
      "name": "R2A México",
      "image": "https://r2a.com.mx/images/logo.png",
      "telephone": "+529933511828",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Villahermosa",
        "addressRegion": "Tabasco",
        "addressCountry": "MX"
      }
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Villahermosa"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Tuxtla Gutiérrez"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Tabasco"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Chiapas"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Campeche"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Yucatán"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Quintana Roo"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Sureste de México"
      }
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "MXN",
      "price": "0.00",
      "description": "Cotización a medida y asesoramiento especializado gratuito."
    },
    "brand": category.brands ? category.brands.split(', ').map(b => ({
      "@type": "Brand",
      "name": b
    })) : undefined
  } : undefined;

  useSEO(
    category ? `${category.title} | R2A México` : 'Solución | R2A México',
    category ? category.metaDescription : 'Soluciones integrales de seguridad y telecomunicaciones.',
    serviceSchema
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug, category]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 bg-brand-dark">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Solución no encontrada</h2>
          <Link to="/" className="text-brand-red hover:underline">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/#soluciones" className="inline-flex items-center gap-2 text-white/50 hover:text-brand-red transition-colors mb-8">
          <ArrowRight className="w-4 h-4 rotate-180" /> Volver a soluciones
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-16">
          <div className="flex-1">
            <div className="w-20 h-20 bg-brand-red/10 rounded-2xl flex items-center justify-center text-brand-red mb-8">
              {category.id === 'gps' ? (
                <img src="/images/gps-logo.png" alt="GPS Logo" className="w-16 h-16 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
              ) : null}
              <div className={category.id === 'gps' ? 'hidden' : ''}>
                {React.cloneElement(category.icon as React.ReactElement, { className: 'w-10 h-10' })}
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">{category.h1}</h1>
            <p className="text-xl text-white/70 leading-relaxed mb-10">
              {category.desc}
            </p>
          </div>
          <div className="w-full lg:w-5/12 shrink-0">
            <img 
              src={`/images/${category.id}.webp`} 
              alt={category.altImage} 
              className="w-full aspect-[4/3] object-cover rounded-3xl shadow-2xl border border-white/10"
              onError={(e) => { e.currentTarget.src = `https://picsum.photos/seed/${category.id}/800/600`; }}
            />
          </div>
        </div>
        
        <div className="relative mt-16 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute inset-0 bg-[url('/images/hero-bg.webp')] bg-fixed bg-cover bg-center opacity-100"></div>
          <div className="absolute inset-0 bg-brand-dark/70 backdrop-blur-sm"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-16 p-10 lg:p-16">
            <div className={!category.brands ? "md:col-span-2" : ""}>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-white">
                <Shield className="text-brand-red w-8 h-8" /> Servicios que ofrecemos
              </h2>
              <ul className={`space-y-6 ${!category.brands ? 'md:grid md:grid-cols-2 md:gap-6 md:space-y-0' : ''}`}>
                {category.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-5 text-white/90 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors shadow-lg">
                    <div className="bg-brand-dark p-3 rounded-xl border border-white/5 shrink-0">
                      {getServiceIcon(item)}
                    </div>
                    <span className="font-bold text-xl">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {category.brands && (
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-white">
                    <Globe className="text-brand-red w-8 h-8" /> Integración con Marcas
                  </h2>
                  <div className="bg-white/5 py-12 rounded-3xl border border-white/10 overflow-hidden relative shadow-lg">
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-brand-dark/80 to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-brand-dark/80 to-transparent z-10"></div>
                    <p className="text-white/80 leading-relaxed mb-10 text-lg px-8 text-center">
                      Trabajamos con los líderes de la industria para garantizar la máxima calidad, confiabilidad y transferir autoridad a su infraestructura:
                    </p>
                    {category.brands.split(', ').length > 1 ? (
                      <div className="relative w-full flex overflow-hidden h-24">
                        <div className="flex gap-16 animate-marquee whitespace-nowrap items-center">
                          {[...Array(3)].map((_, loopIndex) => (
                            <React.Fragment key={loopIndex}>
                              {category.brands.split(', ').map((brand, bIndex) => (
                                <BrandLogo key={`${loopIndex}-${bIndex}`} brand={brand} className="shrink-0 h-16" />
                              ))}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-center items-center h-24">
                        <BrandLogo brand={category.brands} className="h-20" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
