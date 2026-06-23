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
              <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                <img 
                  src="/images/logos/broker-telecom.png" 
                  alt="Broker Telecom" 
                  className="h-12 md:h-16 w-auto object-contain shrink-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
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
              <h3 className="text-2xl font-bold mb-4">Servicios de Conectividad Empresarial</h3>
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
                        src="/images/logos/alestra.png" 
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
                        src="/images/logos/metrocarrier.png" 
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
                        src="/images/logos/net2phone.png" 
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
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-red shrink-0" />
                  <a href="tel:+525593373833" className="hover:text-brand-red transition-colors font-medium">
                    +52 559 337 3833
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#25D366] shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <a href="https://wa.me/525578777227" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors font-medium">
                    +52 55 7877 7227
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#25D366] shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <a href="https://wa.me/525548788178" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors font-medium">
                    +52 55 4878 8178
                  </a>
                </li>
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
