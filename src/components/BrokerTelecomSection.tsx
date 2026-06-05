import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Globe, ArrowRight } from 'lucide-react';

export const BrokerTelecomSection = () => {
  const navigate = useNavigate();

  const handleTelecomClick = () => {
    // Solo redirigir al subdominio si estamos en el dominio principal de producción
    if (window.location.hostname === 'r2a.com.mx' || window.location.hostname === 'www.r2a.com.mx') {
      window.location.href = 'https://bt.r2a.com.mx';
    } else {
      navigate('/broker-telecom');
    }
  };

  return (
    <section className="relative bg-brand-dark border-y border-white/10 overflow-hidden flex flex-col lg:flex-row min-h-[80vh]">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 relative z-10">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6">
            <Globe className="w-3 h-3" /> División Especializada
          </div>
          <div className="mb-6">
            <img 
              src="/images/logos/broker-telecom.png" 
              alt="Broker Telecom" 
              className="h-16 md:h-20 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <h2 className="hidden text-5xl md:text-7xl font-black mb-6 leading-tight">
              BROKER <br/><span className="text-brand-red">TELECOM</span>
            </h2>
          </div>
          <p className="text-white/70 text-xl mb-10 leading-relaxed">
            Integración y comercialización de servicios de telecomunicaciones sobre carriers autorizados en México, agregando gestión, seguridad y continuidad operativa.
          </p>
          <button 
            onClick={handleTelecomClick}
            className="bg-white text-brand-dark hover:bg-gray-200 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all group cursor-pointer text-lg"
          >
            VER SERVICIOS TELECOM
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
        <img 
          src="/images/brokertelecomimagen.webp" 
          alt="Integración de servicios Broker Telecom en Villahermosa - R2A México" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
          onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/telecom-tower/1000/800"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent lg:bg-gradient-to-r lg:from-brand-dark lg:via-brand-dark/20 lg:to-transparent"></div>
        
        <div className="absolute bottom-10 right-10 lg:bottom-16 lg:right-16 bg-brand-dark/80 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-2xl max-w-[340px] flex items-center gap-5 group hover:bg-brand-dark transition-colors">
          <div className="w-16 h-16 bg-brand-red rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-brand-red/20 group-hover:scale-110 transition-transform">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <div>
            <p className="text-sm font-bold text-white uppercase tracking-wider leading-snug">Respaldado por los mejores carriers de México</p>
          </div>
        </div>
      </div>
    </section>
  );
};
