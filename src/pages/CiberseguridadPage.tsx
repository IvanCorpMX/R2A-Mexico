import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Shield, Lock, Activity, AlertTriangle, Mail, Phone, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export const CiberseguridadPage = () => {
  const ciberSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Ciberseguridad y Protección de Datos",
    "alternateName": "Ciberseguridad Corporativa e Industrial",
    "description": "Especialistas en ciberseguridad industrial y corporativa en México. Protección de endpoints, seguridad perimetral, NGFW, IPS, y respuesta inmediata ante incidentes.",
    "serviceType": "Cybersecurity and Data Protection Services",
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
    'Ciberseguridad y Protección de Datos | R2A México',
    'Especialistas en ciberseguridad industrial y corporativa. Protección de endpoints, seguridad perimetral y respuesta a incidentes con certificaciones internacionales.',
    ciberSchema
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-gray">
      <div className="max-w-5xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-brand-red transition-colors mb-8">
          <ArrowRight className="w-4 h-4 rotate-180" /> Volver al inicio
        </Link>
        
        <div className="glass-card p-10 rounded-3xl border-t-4 border-t-brand-red bg-brand-dark/50 backdrop-blur-md">
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
              <img src="/images/logos/iso27001.png" alt="ISO 27001" className="h-8 object-contain ml-auto" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
              <p className="hidden font-mono font-bold text-white/90">ISO 27001</p>
            </div>
          </div>

          <div className="mb-12 bg-white/5 p-6 rounded-2xl border border-white/10 border-l-4 border-l-brand-red">
            <p className="text-white/80 leading-relaxed text-lg">
              En R2A México somos especialistas en <strong className="text-white">ciberseguridad y protección de datos</strong>. <span className="text-white font-medium">Contamos con certificaciones internacionales y somos partners oficiales</span> de los líderes mundiales en seguridad informática, lo que nos permite diseñar e implementar estrategias de defense robustas y adaptadas a las necesidades críticas de tu empresa.
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
                  src="/images/logos/endpointprotector.png" 
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
