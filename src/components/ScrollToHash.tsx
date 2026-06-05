import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Handle hash links
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // Handle direct paths that should scroll to sections
      const pathMap: Record<string, string> = {
        '/nosotros': '#nosotros',
        '/soluciones': '#soluciones',
        '/contacto': '#contacto',
        '/inicio': '#inicio'
      };

      const normalizedPath = pathname.toLowerCase().replace(/\/$/, '');
      const targetHash = pathMap[normalizedPath] || pathMap[pathname.toLowerCase()];
      
      if (targetHash) {
        const element = document.querySelector(targetHash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      } else if (pathname === '/' || normalizedPath === '') {
        // If it's just the home page without hash, scroll to top
        window.scrollTo(0, 0);
      } else {
        // Default scroll to top for other pages
        window.scrollTo(0, 0);
      }
    }
  }, [pathname, hash]);

  return null;
};
