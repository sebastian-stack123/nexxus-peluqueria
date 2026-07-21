import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeftRight } from 'lucide-react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percent);
    }
  };

  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <section className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm text-gold uppercase tracking-[0.4em] mb-4">Resultados Reales</h2>
          <h3 className="text-5xl md:text-6xl font-serif font-light text-white">Antes y Después</h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative overflow-hidden shadow-2xl border border-gold/10"
          ref={containerRef}
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
        >
          {/* After Image (Background) */}
          <img
            src="https://images.unsplash.com/photo-1633333333333-aaaaaa?q=80&w=1200&auto=format&fit=crop" // Placeholder for After
            alt="Después"
            className="w-full h-[500px] md:h-[600px] object-cover"
          />
          <div className="absolute top-4 right-4 bg-dark/80 text-gold px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider backdrop-blur-sm">
            Después
          </div>

          {/* Before Image (Clipped overlay) */}
          <div
            className="absolute top-0 left-0 bottom-0 overflow-hidden bg-gray-900"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1633333333333-bbbbbb?q=80&w=1200&auto=format&fit=crop" // Placeholder for Before
              alt="Antes"
              className="w-full h-full object-cover max-w-none"
              style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100vw', height: '100%' }} // Keep image static while container clips
            />
            <div className="absolute top-4 left-4 bg-dark/80 text-gray-300 px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider backdrop-blur-sm">
              Antes
            </div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-gold cursor-ew-resize flex items-center justify-center"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center shadow-lg text-dark">
              <ArrowLeftRight size={20} />
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/59326009237"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-black px-10 py-4 font-bold text-xs uppercase tracking-widest hover:bg-white transition-all duration-300"
          >
            Quiero este cambio
          </a>
        </div>
      </div>
    </section>
  );
}
