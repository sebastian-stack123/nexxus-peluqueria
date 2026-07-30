import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const products = [
  {
    name: 'Línea de Hidratación',
    image: '/fotos/Foto hidratacion.jpg',
    href: 'https://wa.me/593989732232',
  },
  {
    name: 'Línea de Rizos',
    image: '/fotos/linea rizos.jpg',
    href: 'https://wa.me/593989732232',
  },
  {
    name: 'Definición de Peinados',
    image: '/fotos/foto1.jpg',
    href: 'https://wa.me/593989732232',
  },
  {
    name: 'Más Productos',
    image: '/fotos/cuidado capilar.jpg',
    href: 'https://wa.me/593989732232',
  },
];

export default function Products() {
  return (
    <section id="productos" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm text-gold uppercase tracking-[0.4em] mb-4">Cuidado Capilar</h2>
          <h3 className="text-5xl md:text-6xl font-serif font-light text-white">Nuestros Productos</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block relative h-[400px] rounded-lg overflow-hidden cursor-pointer"
            >
              {/* Product Image */}
              <div className="absolute inset-0 bg-[#111]">
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-40"
                  />
                )}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent flex flex-col justify-end p-8 transition-colors duration-300 group-hover:from-dark group-hover:via-dark/80">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-2xl font-serif font-light text-white">{product.name}</h4>
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-dark transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <p className="text-gold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Reserva estos productos por WhatsApp
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
