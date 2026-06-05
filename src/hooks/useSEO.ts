import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useSEO = (title: string, description: string, schema?: object) => {
  const location = useLocation();
  const serializedSchema = schema ? JSON.stringify(schema) : '';

  useEffect(() => {
    document.title = title;
    
    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);
    
    // Base and path calculations
    const baseUrl = window.location.hostname.includes('bt.r2a.com.mx') 
      ? 'https://bt.r2a.com.mx' 
      : 'https://r2a.com.mx';
    const path = location.pathname.replace(/\/$/, '');
    const canonicalUrl = !window.location.hostname.includes('bt') && path === '/broker-telecom'
      ? 'https://bt.r2a.com.mx/'
      : `${baseUrl}${path}`;

    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // OpenGraph Tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: `${baseUrl}/images/logo.png` },
      { property: 'og:locale', content: 'es_MX' },
      { property: 'og:site_name', content: 'R2A México' }
    ];

    ogTags.forEach(tag => {
      let element = document.querySelector(`meta[property="${tag.property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', tag.property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', tag.content);
    });

    // Twitter Tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `${baseUrl}/images/logo.png` }
    ];

    twitterTags.forEach(tag => {
      let element = document.querySelector(`meta[name="${tag.name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', tag.name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', tag.content);
    });

    // Dynamic JSON-LD Schema
    const existingSchema = document.getElementById('jsonld-schema-dynamic');
    if (existingSchema) {
      existingSchema.remove();
    }
    if (serializedSchema) {
      const script = document.createElement('script');
      script.setAttribute('id', 'jsonld-schema-dynamic');
      script.setAttribute('type', 'application/ld+json');
      script.textContent = serializedSchema;
      document.head.appendChild(script);
    }

  }, [title, description, location.pathname, serializedSchema]);
};
