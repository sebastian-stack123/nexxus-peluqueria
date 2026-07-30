import { motion } from 'motion/react';
import { Award, ShieldCheck, HeartHandshake, Users, Home, Leaf, Globe, Sparkles } from 'lucide-react';

const reasons = [
  { icon: <Award size={40} />, title: '+30 Años de Experiencia', desc: 'Tres décadas perfeccionando nuestro arte.' },
  { icon: <Leaf size={40} />, title: 'Productos No Tóxicos', desc: 'Fórmulas limpias que protegen tu salud.' },
  { icon: <HeartHandshake size={40} />, title: 'Saludables & Veganos', desc: 'Respeto absoluto por tu cabello y el planeta.' },
  { icon: <Globe size={40} />, title: 'Calidad Europea', desc: 'Las mejores marcas internacionales.' },
  { icon: <Sparkles size={40} />, title: 'Principios Éticos', desc: 'Compromiso y transparencia en cada proceso.' },
];

export default function WhyChooseUs() {
  return (
    <section id="nosotros" className="py-24 bg-dark relative overflow-hidden">
      {/* Decorative Gold Element */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm text-gold uppercase tracking-[0.4em] mb-4">Excelencia en cada detalle</h2>
          <h3 className="text-5xl md:text-6xl font-serif font-light text-white mb-6">¿Por qué elegirnos?</h3>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg font-light leading-relaxed">
            En Nexxus, no solo cortamos cabello; creamos experiencias. Nos enorgullece ofrecer un servicio de primer nivel, comparable con los mejores salones del mundo, siempre siguiendo principios éticos en cada paso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="mx-auto w-20 h-20 border border-gold/30 rounded-full flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-black transition-colors duration-300">
                {reason.icon}
              </div>
              <h4 className="text-sm uppercase tracking-widest font-bold text-white mb-2">{reason.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
