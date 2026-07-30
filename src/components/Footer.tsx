export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300 py-8 md:h-32 flex items-center shrink-0 border-t border-gold/10">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        <img src="/fotos/Logonexxus.jpg" alt="Nexxus Logo" className="h-12 mix-blend-lighten opacity-90 object-contain" />
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-center md:text-left">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gold mb-1">Ubicación</p>
            <p className="text-sm font-light">Edificio Florencia 1, Av. Gonzalez Suarez N32-42</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gold mb-1">Horario</p>
            <p className="text-sm font-light">L,M,J,S: 9am-7pm | Mar: 24h</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gold mb-1">Contacto</p>
            <p className="text-sm font-light">(02) 600-9237</p>
          </div>
        </div>
        <div className="flex gap-4">
        </div>
      </div>
    </footer>
  );
}
