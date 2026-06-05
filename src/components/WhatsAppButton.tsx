import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5215510348105"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-[#ffffff] p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors hover:scale-110 transform duration-200"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
};
