import { useEffect } from 'react';

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-dark min-h-screen text-gray-300 font-light">
      <h1 className="text-4xl md:text-5xl font-serif text-white mb-8">Política de Privacidad</h1>
      <div className="space-y-6">
        <p>
          En Nexxus, valoramos y respetamos tu privacidad. Esta política describe cómo recopilamos, usamos y protegemos tu información personal.
        </p>
        <h2 className="text-2xl text-gold font-serif mt-8 mb-4">Información que Recopilamos</h2>
        <p>
          Podemos recopilar información personal, como tu nombre, número de teléfono y dirección de correo electrónico, cuando nos contactas o reservas una cita.
        </p>
        <h2 className="text-2xl text-gold font-serif mt-8 mb-4">Uso de la Información</h2>
        <p>
          Utilizamos tu información para:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Gestionar tus citas y brindarte nuestros servicios.</li>
          <li>Comunicarnos contigo respecto a tus reservas.</li>
          <li>Mejorar nuestra atención al cliente.</li>
        </ul>
        <h2 className="text-2xl text-gold font-serif mt-8 mb-4">Protección de Datos</h2>
        <p>
          Implementamos medidas de seguridad para proteger tu información personal contra acceso, alteración o divulgación no autorizados. No compartimos tu información con terceros, excepto cuando sea necesario para brindarte nuestros servicios o lo exija la ley.
        </p>
        <div className="mt-12">
          <a href="/" className="text-gold uppercase tracking-widest text-xs hover:text-white transition-colors">
            &larr; Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}
