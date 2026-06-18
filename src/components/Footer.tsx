import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Video, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isSubdomain = window.location.hostname.includes('bt.r2a.com.mx');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (isSubdomain) {
      window.location.href = `https://r2a.com.mx/${href}`;
      return;
    }

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
    <footer className="bg-brand-dark border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              {isSubdomain ? (
                 <a href="https://r2a.com.mx" className="flex items-center gap-2">
                    <img 
                      src="/images/logo.png" 
                      alt="R2A México" 
                      className="h-10 object-contain logo-dark"
                    />
                    <img 
                      src="/images/logo-claro.png" 
                      alt="R2A México" 
                      className="h-10 object-contain logo-light"
                    />
                 </a>
              ) : (
                <>
                  <img 
                    src="/images/logo.png" 
                    alt="R2A México" 
                    className="h-10 object-contain logo-dark"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <img 
                    src="/images/logo-claro.png" 
                    alt="R2A México" 
                    className="h-10 object-contain logo-light"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                </>
              )}
              <span className="hidden text-xl font-extrabold tracking-tighter">
                R2A<span className="text-brand-red">MÉXICO</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Soluciones en seguridad electrónica a nivel físico y lógico, para proteger lo más importante para usted.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/r2amexico" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer animate-none">
                <Facebook className="w-5 h-5 text-white/50 hover:text-white" />
              </a>
              <a href="https://www.instagram.com/r2amexico/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer animate-none">
                <Instagram className="w-5 h-5 text-white/50 hover:text-white" />
              </a>
              <a href="https://www.linkedin.com/company/r2a-mexico" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer animate-none">
                <Linkedin className="w-5 h-5 text-white/50 hover:text-white" />
              </a>
              <a href="https://x.com/r2a_mexico" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer animate-none">
                <Twitter className="w-5 h-5 text-white/50 hover:text-white" />
              </a>
              <a href="https://www.tiktok.com/@r2amexico" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer animate-none">
                <Video className="w-5 h-5 text-white/50 hover:text-white" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-red">Navegación</h4>
              <ul className="space-y-4 text-sm text-white/40">
                <li><a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="hover:text-brand-red transition-colors">Inicio</a></li>
                <li><a href="#nosotros" onClick={(e) => handleNavClick(e, '#nosotros')} className="hover:text-brand-red transition-colors">Nosotros</a></li>
                <li><a href="#soluciones" onClick={(e) => handleNavClick(e, '#soluciones')} className="hover:text-brand-red transition-colors">Soluciones</a></li>
                <li><a href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')} className="hover:text-brand-red transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-red">Contacto</h4>
              <ul className="space-y-4 text-sm text-white/40">
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +52 55 7877 7227</li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> ventas@r2a.com.mx</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} R2A México S.A. de C.V. Todos los derechos reservados.
          </p>
          <Link to="/aviso-de-privacidad" className="text-white/40 text-xs hover:text-white transition-colors">
            Aviso de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
};
