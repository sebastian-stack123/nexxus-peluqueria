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
                <div className="w-full">
                  <h4 className="text-white font-bold mb-3">Horario</h4>
                  <ul className="text-sm text-gray-400 space-y-2 border border-gold/10 p-4 rounded-sm bg-[#111]">
                    <li className="flex justify-between border-b border-gray-800 pb-2">
                      <span>Lunes a Viernes</span> 
                      <span className="text-white text-right">9:00 AM - 7:00 PM<br/><span className="text-[10px] text-gray-500">(Última cita 6:00 PM)</span></span>
                    </li>
                    <li className="flex justify-between border-b border-gray-800 py-2">
                      <span>Sábado</span> 
                      <span className="text-white text-right">9:00 AM - 6:00 PM<br/><span className="text-[10px] text-gray-500">(Última cita 5:00 PM)</span></span>
                    </li>
                    <li className="flex justify-between pt-2">
                      <span>Domingo</span> 
                      <span className="text-gray-500">Cerrado</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-gold flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-bold mb-1">Teléfonos</h4>
                  <div className="flex flex-col space-y-1">
                    <a href="https://wa.me/593989732232" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors text-sm underline-offset-2 hover:underline">098 973 2232 (WhatsApp)</a>
                    <a href="tel:+593991992224" className="text-gray-400 hover:text-white transition-colors text-sm underline-offset-2 hover:underline">099 199 2224</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-gold flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-bold mb-1">Correo</h4>
                  <p className="text-gray-400">jmnexxus1967@hotmail.com</p>
                </div>
              </div>
            </div>
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
