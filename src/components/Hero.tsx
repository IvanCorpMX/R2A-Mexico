import React from 'react';
import { motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
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
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/fondoprincipal.webp" 
          alt="Infraestructura de Seguridad y Telecomunicaciones en Villahermosa - R2A México" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
          fetchPriority="high"
          onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/telecommunications-tower/1920/1080?grayscale"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-12 md:mt-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            SOLUCIONES INTEGRALES EN <br />
            <span className="text-brand-red">SEGURIDAD ELECTRÓNICA Y TELECOMUNICACIONES</span>
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            R2A México S.A. de C.V. inicia operaciones en el año 2014 con el propósito de asegurar su entorno, ofrecemos soluciones en seguridad electrónica a nivel físico y lógico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <a 
              href="#soluciones" 
              onClick={(e) => handleNavClick(e, '#soluciones')}
              className="bg-brand-red hover:bg-red-700 text-[#ffffff] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all group"
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
