import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/fotos/inicio.jpg"
          alt="Salón Nexxus"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-dark/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="text-gold text-sm uppercase tracking-[0.4em] mb-4 block">Quito • Ecuador</span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-serif leading-tight mb-6 font-light text-white"
        >
          Transformamos tu <br className="hidden md:block" />
          <span className="italic font-normal border-b-2 border-gold">imagen</span> con estilo.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed font-light"
        >
          Transformamos tu imagen con estilo, precisión y experiencia.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="https://wa.me/59326009237"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-black px-10 py-4 font-bold text-xs uppercase tracking-widest hover:bg-white transition-all duration-300 text-center w-full sm:w-auto"
          >
            Reservar por WhatsApp
          </a>
          <a
            href="#servicios"
            className="border border-white/20 px-10 py-4 font-bold text-xs uppercase tracking-widest hover:border-gold hover:text-white transition-all duration-300 text-center w-full sm:w-auto text-white"
          >
            Ver Servicios
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-xs text-gray-400 uppercase tracking-widest mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="text-gold" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
