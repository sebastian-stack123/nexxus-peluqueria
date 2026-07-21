import { motion } from 'motion/react';
import { Scissors, Palette, Sparkles, Droplet, Wind, UserCheck, Star, Heart } from 'lucide-react';

const services = [
  { icon: <Scissors size={32} />, name: 'Corte de cabello', desc: 'Cortes en tendencia diseñados para resaltar tus facciones.' },
  { icon: <Palette size={32} />, name: 'Coloración', desc: 'Colores vibrantes y duraderos con productos de primera.' },
  { icon: <Sparkles size={32} />, name: 'Balayage', desc: 'Técnica francesa para un degradado natural y luminoso.' },
  { icon: <Star size={32} />, name: 'Mechas', desc: 'Iluminación estratégica para darle vida a tu cabello.' },
  { icon: <Wind size={32} />, name: 'Alisados', desc: 'Alisados permanentes y progresivos sin dañar la fibra.' },
  { icon: <Droplet size={32} />, name: 'Tratamientos', desc: 'Hidratación profunda, botox capilar y reconstrucción.' },
  { icon: <UserCheck size={32} />, name: 'Barbería', desc: 'Cortes clásicos, perfilado de barba y cuidado masculino.' },
  { icon: <Heart size={32} />, name: 'Peinados', desc: 'Estilos elegantes para novias, quinceañeras y eventos especiales.' },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm text-gold uppercase tracking-[0.4em] mb-4">Lo que hacemos</h2>
          <h3 className="text-5xl md:text-6xl font-serif font-light text-white">Nuestros Servicios</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111] p-8 border border-gold/10 hover:border-gold/30 transition-colors group flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 shrink-0 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold transition-colors">
                  <div className="text-gold group-hover:text-black transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-sm uppercase tracking-widest font-bold text-white">{service.name}</h4>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-6 flex-grow">{service.desc}</p>
              <a
                href="https://wa.me/59326009237"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-widest text-gold hover:text-white transition-colors block mt-auto"
              >
                Reservar &rarr;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
