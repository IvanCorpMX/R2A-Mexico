import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Activity, ArrowRight } from 'lucide-react';

export const CiberseguridadSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative bg-brand-gray border-b border-white/10 overflow-hidden flex flex-col lg:flex-row min-h-[80vh]">
      <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full order-2 lg:order-1">
        <img 
          src="/images/ciberseguridadimagen.webp" 
          alt="Centro de Operaciones de Ciberseguridad SOC en México - R2A México" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
          onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/cybersecurity/1000/800"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-gray via-transparent to-transparent lg:bg-gradient-to-l lg:from-brand-gray lg:via-brand-gray/20 lg:to-transparent"></div>
        
        <div className="absolute bottom-10 left-10 lg:bottom-16 lg:left-16 bg-brand-dark/80 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-2xl flex items-center gap-5 group hover:bg-brand-dark transition-colors">
          <div className="w-16 h-16 bg-brand-red rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-brand-red/20 group-hover:scale-110 transition-transform">
            <Activity className="w-8 h-8 text-white" />
          </div>
          <div>
            <p className="text-3xl font-black text-white mb-0 leading-none">24/7</p>
            <p className="text-sm text-white/70 font-bold uppercase tracking-widest mt-1">Monitoreo Continuo</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 relative z-10 order-1 lg:order-2">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6">
            <ShieldCheck className="w-3 h-3" /> División Especializada
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            CIBER<br/><span className="text-brand-red">SEGURIDAD</span>
          </h2>
          <p className="text-white/70 text-xl mb-10 leading-relaxed">
            Protección integral para su infraestructura digital. Prevención de amenazas, análisis de vulnerabilidades y respuesta a incidentes para garantizar la continuidad de su negocio.
          </p>
          <button 
            onClick={() => navigate('/ciberseguridad')}
            className="bg-brand-red text-[#ffffff] hover:bg-red-700 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all group cursor-pointer shadow-lg shadow-brand-red/20 text-lg"
          >
            VER SERVICIOS DE CIBERSEGURIDAD
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
