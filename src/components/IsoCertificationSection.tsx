import React from 'react';
import { ShieldCheck, Lock, CheckCircle2, Server, ShieldAlert } from 'lucide-react';

export const IsoCertificationSection = () => {
  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="md:w-1/3 flex justify-center order-2 md:order-1">
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 flex items-center justify-center w-full max-w-[400px] relative">
              <div className="absolute inset-0 bg-slate-100 rounded-3xl transform rotate-3 -z-10"></div>
              <img 
                src="/images/logos/iso27001.png" 
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
