import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm text-gold uppercase tracking-[0.4em] mb-4">Lo que hacemos</h2>
          <h3 className="text-5xl md:text-6xl font-serif font-light text-white">Nuestros Servicios</h3>
        </div>

        <motion.a
          href="https://wa.me/593989732232"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative block bg-[#111] border border-gold/20 overflow-hidden hover:border-gold transition-all duration-500"
        >
          {/* Subtle background glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="p-12 md:p-16 flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-8 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold transition-colors duration-500 group-hover:scale-110">
              <Sparkles className="text-gold group-hover:text-black transition-colors duration-500" size={32} />
            </div>
            
            <h4 className="text-3xl md:text-4xl font-serif font-light text-white mb-4 group-hover:text-gold transition-colors duration-300">
              Servicios de Peluquería Unisex
            </h4>
            
            <p className="text-gray-400 font-light text-lg mb-8 max-w-lg">
              Cortes, tintes, tratamientos, peinados y más. Contamos con una amplia variedad de opciones para el cuidado y belleza de tu cabello.
            </p>

            <div className="inline-flex items-center gap-3 text-gold uppercase tracking-[0.2em] text-sm font-bold border-b border-gold/30 pb-1 group-hover:border-gold transition-colors">
              Preguntar por servicios específicos
              <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
