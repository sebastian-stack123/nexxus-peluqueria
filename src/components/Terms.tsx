import { useEffect } from 'react';

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-dark min-h-screen text-gray-300 font-light">
      <h1 className="text-4xl md:text-5xl font-serif text-white mb-8">Términos y Condiciones</h1>
      <div className="space-y-6">
        <p>
          Bienvenido a Nexxus. Al acceder y utilizar nuestro sitio web y servicios, aceptas estar sujeto a los siguientes términos y condiciones.
        </p>
        <h2 className="text-2xl text-gold font-serif mt-8 mb-4">1. Servicios</h2>
        <p>
          Nuestros servicios de peluquería y cuidado capilar están sujetos a disponibilidad. Nos reservamos el derecho de rechazar el servicio a cualquier persona por cualquier motivo en cualquier momento.
        </p>
        <h2 className="text-2xl text-gold font-serif mt-8 mb-4">2. Citas y Cancelaciones</h2>
        <p>
          Recomendamos reservar con antelación. Si necesitas cancelar o reprogramar, te pedimos que lo hagas con al menos 24 horas de anticipación.
        </p>
        <h2 className="text-2xl text-gold font-serif mt-8 mb-4">3. Precios y Pagos</h2>
        <p>
          Los precios están sujetos a cambios sin previo aviso. Aceptamos transferencias bancarias y efectivo como formas de pago.
        </p>
        <h2 className="text-2xl text-gold font-serif mt-8 mb-4">4. Responsabilidad</h2>
        <p>
          No nos hacemos responsables por reacciones alérgicas a productos si no hemos sido informados previamente de dichas alergias.
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
