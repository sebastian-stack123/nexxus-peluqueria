import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Productos', href: '#productos' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Historia', href: '#historia' },
    { name: 'Opiniones', href: '#opiniones' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/80 backdrop-blur-md py-4 border-b border-gold/20 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-10 md:h-12">
        <div className="relative flex items-center h-full w-32 md:w-48 lg:w-56">
          <img 
            src="/fotos/Logonexxus.jpg" 
            alt="Nexxus Logo" 
            className="absolute top-1/2 -translate-y-1/2 left-0 h-24 md:h-32 lg:h-40 mix-blend-lighten opacity-90 object-contain pointer-events-none" 
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.2em] font-medium text-gray-300 hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/59326009237"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold border border-gold px-5 py-2 ml-4 text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-gold hover:text-dark transition-colors"
          >
            Reservar
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark/95 backdrop-blur-md shadow-xl md:hidden"
          >
            <div className="px-4 pt-2 pb-6 flex flex-col space-y-4 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg uppercase tracking-wider text-gray-300 hover:text-gold py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/59326009237"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-dark px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider mx-auto w-3/4 mt-4"
              >
                Reservar Ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
