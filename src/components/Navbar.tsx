import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Shield, Download, Sun, Moon, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Check initial theme
    if (document.body.classList.contains('light-mode')) {
      setIsLightMode(true);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.body.classList.toggle('light-mode');
  };

  const isSubdomain = window.location.hostname.includes('bt.r2a.com.mx');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
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

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Soluciones', href: '#soluciones' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/90 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
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
          <Link to="/" className="flex items-center gap-2">
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
            <div className="hidden items-center gap-2">
              <div className="w-10 h-10 bg-brand-red flex items-center justify-center rounded-lg rotate-45">
                <Shield className="text-white -rotate-45 w-6 h-6" />
              </div>
              <span className="text-2xl font-extrabold tracking-tighter text-white">
                R2A<span className="text-brand-red">MÉXICO</span>
              </span>
            </div>
          </Link>
        )}

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-white/70 hover:text-brand-red transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/brochure.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red hover:bg-red-700 text-[#ffffff] px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Download className="w-4 h-4" /> BROCHURE
          </a>
          <button
            onClick={toggleTheme}
            className="text-white/70 hover:text-brand-red transition-colors p-2 rounded-full hover:bg-white/5"
            aria-label="Toggle theme"
          >
            {isLightMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-white/70 hover:text-brand-red transition-colors p-2 rounded-full hover:bg-white/5"
            aria-label="Toggle theme"
          >
            {isLightMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          <button 
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-white/70 hover:text-brand-red"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="/brochure.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-red text-[#ffffff] text-center py-3 rounded-lg font-bold flex items-center justify-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Download className="w-5 h-5" /> DESCARGAR BROCHURE
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
