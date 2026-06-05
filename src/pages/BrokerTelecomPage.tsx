import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Wifi, Radio, Phone, AlertTriangle, ShieldCheck } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export const BrokerTelecomPage = () => {
  const telecomSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Broker Telecom - Telecomunicaciones Especializadas",
    "alternateName": "División de Telecomunicaciones R2A",
    "description": "Integración de servicios de telecomunicaciones sobre carriers autorizados en México. Enlaces dedicados, LAN to LAN, Troncales IP VoIP, y enlaces e internet de alta velocidad.",
    "serviceType": "Telecommunications and High-Capacity Connectivity",
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
        "name": "México"
      }
    ]
  };

  useSEO(
    'Broker Telecom | Servicios de Telecomunicaciones Especializados R2A México',
    'Integración de servicios de telecomunicaciones sobre carriers autorizados en México. Gestión, seguridad y continuidad operativa para su infraestructura crítica.',
    telecomSchema
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isSubdomain = window.location.hostname.includes('bt.r2a.com.mx');

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-gray">
      <div className="max-w-5xl mx-auto px-6">
        {isSubdomain ? (
          <a href="https://r2a.com.mx" className="inline-flex items-center gap-2 text-white/50 hover:text-brand-red transition-colors mb-8">
            <ArrowRight className="w-4 h-4 rotate-180" /> Volver al sitio principal
          </a>
        ) : (
          <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-brand-red transition-colors mb-8">
            <ArrowRight className="w-4 h-4 rotate-180" /> Volver al inicio
          </Link>
        )}
        
        <div className="glass-card p-10 rounded-3xl border-t-4 border-t-brand-red bg-brand-dark/50 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold tracking-widest uppercase mb-4">
                <Globe className="w-3 h-3" /> División Especializada
              </div>
              <div className="mt-2">
                <img 
                  src="/images/logos/broker-telecom.png" 
                  alt="Broker Telecom" 
                  className="h-12 md:h-16 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <h1 className="hidden text-4xl md:text-6xl font-black">
                  BROKER <span className="text-brand-red">TELECOM</span>
                </h1>
              </div>
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
              <h3 className="text-2xl font-bold mb-4">Servicios Dedicados</h3>
              <p className="text-white/60 leading-relaxed">
                Acceso a conexiones de alta capacidad que garantiza la conexión de las aplicaciones críticas de tu empresa.
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
              <h3 className="text-2xl font-bold mb-4">Servicios Best Effort</h3>
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
                <div className="flex items-center gap-5 bg-gradient-to-br from-brand-red/20 to-brand-red/5 p-5 rounded-2xl border border-brand-red/30 shadow-lg shadow-brand-red/5 transition-transform hover:-translate-y-1">
                  <div className="bg-brand-red p-3 rounded-xl shrink-0 shadow-lg shadow-brand-red/20">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-black text-lg text-white leading-tight">SLA respaldado por los mejores carriers de México</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-brand-red">Contacto Directo</h3>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-brand-red" /> +52 55 1034 8105</li>
                <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-brand-red" /> +52 55 7877 7227</li>
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
