import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[10px] text-gold uppercase tracking-[0.4em] font-bold mb-4">Visítanos</h2>
          <h3 className="text-5xl md:text-6xl font-serif font-light text-white">Contacto & Ubicación</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info & Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <MapPin className="text-gold flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-bold mb-1">Dirección</h4>
                  <p className="text-gray-400 text-sm">Edificio Florencia 1, Av. Gonzalez Suarez N32-42, Quito</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="text-gold flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-bold mb-1">Horario</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Lun, Mié, Jue, Sáb: 9 AM - 7 PM<br/>
                    Martes: Abierto 24 horas<br/>
                    Viernes: 9 AM - 6 PM<br/>
                    Domingo: Cerrado
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-gold flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-bold mb-1">Teléfono</h4>
                  <p className="text-gray-400 text-sm">(02) 600-9237</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-gold flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-bold mb-1">Correo</h4>
                  <p className="text-gray-400">reservas@nexxus.ec</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-gold hover:text-dark transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-gold hover:text-dark transition-colors">
                <Facebook size={20} />
              </a>
            </div>

            <form className="space-y-6 pt-8 border-t border-gray-800" onSubmit={(e) => e.preventDefault()}>
              <h4 className="text-3xl font-serif font-light text-white mb-6">Envíanos un mensaje</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input type="text" placeholder="Nombre completo" className="bg-[#111] border border-gold/20 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors w-full" />
                <input type="tel" placeholder="Teléfono" className="bg-[#111] border border-gold/20 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors w-full" />
              </div>
              <textarea placeholder="¿En qué podemos ayudarte?" rows={4} className="bg-[#111] border border-gold/20 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors w-full"></textarea>
              <button type="submit" className="bg-gold text-black px-10 py-4 font-bold text-xs uppercase tracking-widest hover:bg-white transition-all duration-300 w-full sm:w-auto">
                Enviar Mensaje
              </button>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px] lg:h-auto overflow-hidden border border-gold/10"
          >
            <iframe
              src="https://maps.google.com/maps?q=Edificio%20Florencia%201,%20Av.%20Gonzalez%20Suarez%20N32-42,%20Quito&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) invert(0.9) hue-rotate(180deg)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
