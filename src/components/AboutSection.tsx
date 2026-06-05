import React from 'react';

export const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-6">NUESTRO <br /><span className="text-brand-red">OBJETIVO</span></h2>
            <p className="text-white/70 text-lg mb-6 leading-relaxed">
              R2A es una empresa dedicada a la seguridad electrónica, con nuestra experiencia podemos satisfacer soluciones domesticas hasta industrial.
            </p>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Contamos con un equipo de trabajo que cuenta con experiencia de 10 años en la gestión, planeación y ejecución de diversos proyectos en Seguridad Electrónica para los distintos sectores e industrias de nuestro país.
            </p>
            <div className="p-6 bg-brand-dark border-l-4 border-brand-red rounded-r-xl">
              <p className="text-xl font-medium italic text-white/90">
                "Nuestro objetivo es y será siempre ser un aliado estratégico con una excelente atención y servicio al cliente."
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <img src="/images/objetivo1.webp" alt="Equipo de expertos en seguridad electrónica en Villahermosa - R2A México" className="rounded-2xl object-cover h-[400px] w-full shadow-2xl" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/r2a-team1/400/600"; }} />
            </div>
            <div className="space-y-6 pt-16">
              <img src="/images/objetivo2.webp" alt="Instalación de cámaras de seguridad y telecomunicaciones en el Sureste - R2A México" className="rounded-2xl object-cover h-[400px] w-full shadow-2xl" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/r2a-team2/400/600"; }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
