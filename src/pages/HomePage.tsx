import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { BrokerTelecomSection } from '../components/BrokerTelecomSection';
import { CiberseguridadSection } from '../components/CiberseguridadSection';
import { IsoCertificationSection } from '../components/IsoCertificationSection';
import { SolutionsSection } from '../components/SolutionsSection';
import { ContactForm } from '../components/ContactForm';

export const HomePage = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "SecurityService",
    "name": "R2A México",
    "alternateName": "R2A México S.A. de C.V.",
    "description": "Soluciones integrales en seguridad electrónica, telecomunicaciones y ciberseguridad en el Sureste de México. Integrador líder en Villahermosa Tabasco y Tuxtla Gutiérrez Chiapas.",
    "url": "https://r2a.com.mx",
    "logo": "https://r2a.com.mx/images/logo.png",
    "image": "https://r2a.com.mx/images/logo.png",
    "telephone": "+529933511828",
    "priceRange": "$$",
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Villahermosa",
        "addressRegion": "Tabasco",
        "addressCountry": "MX",
        "streetAddress": "R2A México, Villahermosa"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Tuxtla Gutiérrez",
        "addressRegion": "Chiapas",
        "addressCountry": "MX",
        "streetAddress": "R2A México, Tuxtla"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.9892,
      "longitude": -92.9475
    },
    "areaServed": [
      "Tabasco",
      "Chiapas",
      "Campeche",
      "Yucatán",
      "Quintana Roo",
      "Veracruz",
      "Sureste de México"
    ],
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [
      "https://www.facebook.com/r2amexico",
      "https://www.instagram.com/r2amexico/",
      "https://www.linkedin.com/company/r2a-mexico",
      "https://x.com/r2a_mexico",
      "https://www.tiktok.com/@r2amexico"
    ]
  };

  useSEO(
    'R2A México | Seguridad Electrónica y Telecomunicaciones en el Sureste',
    'Soluciones integrales en seguridad electrónica, telecomunicaciones y ciberseguridad en el Sureste de México. Protegemos su negocio con tecnología líder y soporte especializado.',
    homeSchema
  );

  return (
    <>
      <Hero />
      <AboutSection />
      <BrokerTelecomSection />
      <CiberseguridadSection />
      <IsoCertificationSection />
      <SolutionsSection />
      <ContactForm />
    </>
  );
};
