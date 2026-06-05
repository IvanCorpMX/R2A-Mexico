import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';

import { ScrollToHash } from './components/ScrollToHash';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

import { HomePage } from './pages/HomePage';
import { BrokerTelecomPage } from './pages/BrokerTelecomPage';
import { CiberseguridadPage } from './pages/CiberseguridadPage';
import { SolutionPage } from './pages/SolutionPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

export default function App() {
  const isSubdomain = window.location.hostname.includes('bt.r2a.com.mx');

  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {isSubdomain ? (
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<BrokerTelecomPage />} />
                <Route path="/broker-telecom" element={<Navigate to="/" replace />} />
                <Route path="/aviso-de-privacidad" element={<PrivacyPolicyPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </AnimatePresence>
          ) : (
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/nosotros" element={<Navigate to="/#nosotros" replace />} />
                <Route path="/soluciones" element={<Navigate to="/#soluciones" replace />} />
                <Route path="/contacto" element={<Navigate to="/#contacto" replace />} />
                <Route path="/inicio" element={<Navigate to="/" replace />} />
                <Route path="/servicios/:slug" element={<SolutionPage />} />
                <Route path="/broker-telecom" element={<BrokerTelecomPage />} />
                <Route path="/ciberseguridad" element={<CiberseguridadPage />} />
                <Route path="/aviso-de-privacidad" element={<PrivacyPolicyPage />} />
              </Routes>
            </AnimatePresence>
          )}
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
