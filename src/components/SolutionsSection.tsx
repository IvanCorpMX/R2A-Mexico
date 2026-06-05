import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/categories';
import { BrandLogo } from './BrandLogo';

export const SolutionsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="soluciones" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">NUESTRAS <span className="text-brand-red">SOLUCIONES EN SEGURIDAD</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">Contamos con el personal eficiente y certificado para brindar soluciones integrales en seguridad electrónica y telecomunicaciones.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              onClick={() => navigate(`/servicios/${cat.slug}`)}
              className="bg-brand-dark p-8 rounded-3xl border border-white/10 hover:border-brand-red/50 flex flex-col h-full cursor-pointer hover:bg-white/5 transition-all group shadow-xl"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
                {cat.icon}
              </div>
              <h3 className="text-lg xl:text-xl font-bold mb-4 flex items-start justify-between gap-2">
                <span className={cat.title === 'Torres de Telecomunicaciones' ? 'leading-tight' : 'whitespace-nowrap tracking-tighter'}>
                  {cat.title}
                </span>
                <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-brand-red group-hover:translate-x-1 transition-all shrink-0 mt-1" />
              </h3>
              <p className="text-white/60 text-sm mb-8 flex-grow leading-relaxed">
                {cat.cardDesc}
              </p>
              {cat.brands && (
                <div className="mt-auto pt-6 border-t border-white/10">
                  <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-4">Integración con:</p>
                  <div className="relative w-full flex overflow-hidden mask-edges h-12">
                    <div className="flex gap-8 animate-marquee whitespace-nowrap items-center">
                      {[...Array(2)].map((_, loopIndex) => (
                        <React.Fragment key={loopIndex}>
                          {cat.brands.split(', ').map((brand, bIndex) => (
                            <BrandLogo key={`${loopIndex}-${bIndex}`} brand={brand} className="shrink-0 h-8" />
                          ))}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
