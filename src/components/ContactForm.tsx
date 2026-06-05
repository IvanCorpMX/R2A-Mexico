import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Mail, Globe } from 'lucide-react';

export const ContactForm = () => {
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

            <address className="space-y-8 not-italic">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-red">
                  <Phone />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">Llámanos</p>
                  <p className="text-xl font-bold">+52 993 351 1828</p>
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
            </address>

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
                src="https://outlook.office.com/bookwithme/user/3244eb75e06848859b46bcda659e9019@corp-mx.com?anonymous&ismsaljsauthenabled&ep=plink" 
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
