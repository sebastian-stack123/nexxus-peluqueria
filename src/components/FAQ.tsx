import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: '¿Con qué antelación debo reservar mi cita?',
    answer: 'Te recomendamos reservar con al menos 2 a 3 días de anticipación para asegurar el horario y especialista de tu preferencia. Para fines de semana, lo ideal es una semana antes.',
  },
  {
    question: '¿Qué productos utilizan en el salón?',
    answer: 'Utilizamos exclusivamente líneas profesionales de alta gama como Kérastase, L\'Oréal Professionnel, Redken y Olaplex, garantizando el cuidado óptimo de tu cabello.',
  },
  {
    question: '¿Hacen evaluaciones antes de un cambio de color?',
    answer: 'Sí, toda decoloración o cambio drástico incluye un diagnóstico capilar previo (gratuito) para evaluar la resistencia de tu cabello y asegurar los mejores resultados sin comprometer su salud.',
  },
  {
    question: '¿Aceptan tarjetas de crédito?',
    answer: 'Sí, aceptamos todas las tarjetas de crédito y débito, transferencias bancarias y efectivo.',
  },
  {
    question: '¿Ofrecen paquetes para novias?',
    answer: 'Sí, contamos con paquetes exclusivos para novias que incluyen pruebas previas, maquillaje, peinado y preparación de la piel. Contáctanos por WhatsApp para enviarte el dossier completo.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[10px] text-gold uppercase tracking-[0.4em] font-bold mb-4">Resolvemos tus dudas</h2>
          <h3 className="text-5xl font-serif font-light text-white">Preguntas Frecuentes</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#111] border border-gold/10 hover:border-gold/30 transition-colors overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-sm uppercase tracking-widest font-bold text-white">{faq.question}</span>
                <span className="text-gold ml-4 flex-shrink-0">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-xs text-gray-500 font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
