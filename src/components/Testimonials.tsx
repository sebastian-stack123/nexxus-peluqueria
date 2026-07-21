import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carolina Mendoza',
    role: 'Cliente Frecuente',
    content: 'El nivel de profesionalismo en Nexxus es inigualable. Sentí que estaba en un salón de Nueva York. El balayage que me hicieron quedó espectacular y el trato fue de lujo desde que entré.',
  },
  {
    name: 'Andrea Salazar',
    role: 'Novia',
    content: 'Confié en ellos para el día de mi boda y fue la mejor decisión. El peinado duró toda la noche y el maquillaje resaltó mis facciones de manera muy elegante. Totalmente recomendados.',
  },
  {
    name: 'Roberto Velez',
    role: 'Cliente Ejecutivo',
    content: 'La barbería es impecable. El ambiente es relajante y el corte siempre es preciso. Es mi lugar de confianza para mantener mi imagen corporativa.',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="opiniones" className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm text-gold uppercase tracking-[0.4em] mb-4">Testimonios</h2>
          <h3 className="text-5xl md:text-6xl font-serif font-light text-white">Lo que dicen de nosotros</h3>
        </div>

        <div className="relative max-w-4xl mx-auto bg-[#111] p-8 md:p-16 border border-gold/10">
          <Quote className="text-gold/20 w-24 h-24 absolute top-8 left-8" />
          
          <div className="relative z-10 min-h-[250px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-gold fill-gold w-6 h-6 mx-1" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-gray-300 italic mb-8 leading-relaxed font-light">
                  "{testimonials[currentIndex].content}"
                </p>
                <div>
                  <h4 className="text-lg font-bold text-white">{testimonials[currentIndex].name}</h4>
                  <p className="text-gold text-sm uppercase tracking-wider">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="p-4 bg-dark border border-gold/20 hover:border-gold hover:text-gold text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="p-4 bg-dark border border-gold/20 hover:border-gold hover:text-gold text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
