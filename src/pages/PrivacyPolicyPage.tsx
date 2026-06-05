import React, { useEffect } from 'react';
import { useSEO } from '../hooks/useSEO';

export const PrivacyPolicyPage = () => {
  useSEO(
    'Aviso de Privacidad | R2A México',
    'Consulte nuestro aviso de privacidad y conozca cómo R2A México protege sus datos personales y la seguridad de su información.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-brand-dark min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8">AVISO DE <span className="text-brand-red">PRIVACIDAD</span></h1>
        
        <div className="prose prose-invert max-w-none text-white/70 space-y-6">
          <p><strong>Última actualización:</strong> 10/03/2026</p>
          
          <p>
            R2A México, empresa especializada en soluciones de seguridad electrónica, videovigilancia, control de accesos, radiocomunicación y telecomunicaciones es responsable del tratamiento de los datos personales que recaba.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Datos personales recabados</h2>
          <p>Podemos recabar:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Nombre</li>
            <li>Empresa</li>
            <li>Teléfono</li>
            <li>Correo electrónico</li>
            <li>Dirección del sitio donde se realizará la instalación</li>
            <li>Información técnica relacionada con proyectos de seguridad</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Finalidades</h2>
          
          <h3 className="text-xl font-bold text-white mt-6 mb-3">Primarias</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Elaboración de cotizaciones</li>
            <li>Diseño de soluciones de seguridad</li>
            <li>Prestación de servicios de instalación, mantenimiento o soporte</li>
            <li>Seguimiento comercial y atención a clientes</li>
          </ul>

          <h3 className="text-xl font-bold text-white mt-6 mb-3">Secundarias</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Envío de información comercial</li>
            <li>Invitaciones a demostraciones o presentaciones de tecnología</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Transferencia de datos</h2>
          <p>
            Los datos podrán compartirse con empresas del grupo CORP-MX para fines operativos o comerciales relacionados con los servicios solicitados.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Derechos ARCO</h2>
          <p>
            Podrá ejercer sus derechos ARCO enviando una solicitud a:<br />
            <a href="mailto:ventas@r2a.com.mx" className="text-brand-red hover:underline">ventas@r2a.com.mx</a>
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Cambios al aviso</h2>
          <p>
            Cualquier modificación será publicada en nuestro sitio web.
          </p>
        </div>
      </div>
    </div>
  );
};
export default PrivacyPolicyPage;
