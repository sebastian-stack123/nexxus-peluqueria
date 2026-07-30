import { useEffect } from 'react';

export default function Cookies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-dark min-h-screen text-gray-300 font-light">
      <h1 className="text-4xl md:text-5xl font-serif text-white mb-8">Política de Cookies</h1>
      <div className="space-y-6">
        <p>
          En Nexxus utilizamos cookies y tecnologías similares para mejorar tu experiencia de navegación en nuestro sitio web.
        </p>
        <h2 className="text-2xl text-gold font-serif mt-8 mb-4">¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Nos ayudan a recordar tus preferencias y a entender cómo interactúas con nuestro sitio.
        </p>
        <h2 className="text-2xl text-gold font-serif mt-8 mb-4">¿Cómo utilizamos las cookies?</h2>
        <p>
          Utilizamos cookies para:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Asegurar que nuestro sitio web funcione correctamente.</li>
          <li>Analizar el tráfico y uso del sitio web.</li>
          <li>Mejorar nuestros servicios y personalizar tu experiencia.</li>
        </ul>
        <h2 className="text-2xl text-gold font-serif mt-8 mb-4">Gestión de Cookies</h2>
        <p>
          Puedes controlar y/o eliminar las cookies a través de la configuración de tu navegador. Sin embargo, ten en cuenta que deshabilitar las cookies puede afectar la funcionalidad de nuestro sitio web.
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
