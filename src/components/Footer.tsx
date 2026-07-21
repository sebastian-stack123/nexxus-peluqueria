import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-white text-black py-8 md:h-32 flex items-center shrink-0">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        <Logo className="scale-90" />
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-center md:text-left">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Ubicación</p>
            <p className="text-sm font-bold">Edificio Florencia 1, Av. Gonzalez Suarez N32-42</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Horario</p>
            <p className="text-sm font-bold">L,M,J,S: 9am-7pm | Mar: 24h</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Contacto</p>
            <p className="text-sm font-bold">(02) 600-9237</p>
          </div>
        </div>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 border border-black/10 flex items-center justify-center hover:border-black transition-colors text-xs font-bold">IG</a>
          <a href="#" className="w-10 h-10 border border-black/10 flex items-center justify-center hover:border-black transition-colors text-xs font-bold">FB</a>
        </div>
      </div>
    </footer>
  );
}
