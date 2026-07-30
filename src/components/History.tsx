import { motion } from 'motion/react';
import { History as HistoryIcon, Clock, ShieldCheck, Leaf } from 'lucide-react';

export default function History() {
  return (
    <section id="historia" className="py-24 bg-[#1a1a1a] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-gold rounded-full mix-blend-multiply filter blur-[100px] opacity-10 translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm text-gold uppercase tracking-[0.4em] mb-4">Nuestro Legado</h2>
            <h3 className="text-5xl md:text-6xl font-serif font-light text-white mb-8">Una historia<br/>generacional</h3>
            <div className="space-y-6 text-gray-400 font-light leading-relaxed">
              <p>
                Nuestra pasión por la belleza comenzó hace más de 50 años. Lo que inició como una pequeña visión se ha convertido en un legado generacional que trasciende en el tiempo, manteniendo la esencia y el amor por el arte capilar.
              </p>
              <p>
                Cada integrante de nuestra familia cuenta con más de 30 años de experiencia, perfeccionando técnicas y adaptándose a las tendencias más exclusivas del mundo.
              </p>
              <p>
                Creemos firmemente en el respeto por el cabello y el medio ambiente. Por ello, nuestra trayectoria nos ha llevado a seleccionar meticulosamente productos éticos, no tóxicos y de los más altos estándares europeos para asegurar resultados excepcionales.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 mt-8">
              <div className="bg-[#111] p-8 border border-gold/10 text-center rounded-sm">
                <HistoryIcon className="w-10 h-10 text-gold mx-auto mb-4" />
                <h4 className="text-3xl font-serif text-white mb-2">+50</h4>
                <p className="text-xs uppercase tracking-widest text-gray-500">Años de historia</p>
              </div>
              <div className="bg-[#111] p-8 border border-gold/10 text-center rounded-sm">
                <Leaf className="w-10 h-10 text-gold mx-auto mb-4" />
                <h4 className="text-xl font-serif text-white mb-2">Ética</h4>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">Productos saludables</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-[#111] p-8 border border-gold/10 text-center rounded-sm">
                <Clock className="w-10 h-10 text-gold mx-auto mb-4" />
                <h4 className="text-3xl font-serif text-white mb-2">+30</h4>
                <p className="text-xs uppercase tracking-widest text-gray-500">Años de exp. por profesional</p>
              </div>
              <div className="bg-[#111] p-8 border border-gold/10 text-center rounded-sm">
                <ShieldCheck className="w-10 h-10 text-gold mx-auto mb-4" />
                <h4 className="text-xl font-serif text-white mb-2">Premium</h4>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">Calidad Europea</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
