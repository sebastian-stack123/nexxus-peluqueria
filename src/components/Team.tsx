import { motion } from 'motion/react';

const team = [
  {
    name: 'Alejandro Rivera',
    role: 'Director Creativo & Master Colorist',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Valentina Cruz',
    role: 'Especialista en Balayage',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Mateo Vargas',
    role: 'Master Barber',
    image: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Isabella Montes',
    role: 'Especialista en Tratamientos',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=600&auto=format&fit=crop',
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm text-gold uppercase tracking-[0.4em] mb-4">Artistas Capilares</h2>
          <h3 className="text-5xl md:text-6xl font-serif font-light text-white">Conoce a Nuestro Equipo</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative w-full aspect-[3/4] mx-auto mb-6 overflow-hidden border border-gold/10 group-hover:border-gold transition-colors duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
              </div>
              <h4 className="text-sm uppercase tracking-widest font-bold text-white mb-2">{member.name}</h4>
              <p className="text-gold text-[10px] uppercase tracking-wider">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
