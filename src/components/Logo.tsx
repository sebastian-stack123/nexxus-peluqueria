import React from 'react';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#inicio" className={`flex flex-col items-center justify-center ${className}`}>
      <div className="flex items-center font-serif uppercase tracking-widest leading-none">
        <span className="text-2xl md:text-3xl">Ne</span>
        <div className="flex flex-col items-center text-gold mx-0.5" style={{ lineHeight: '0.45' }}>
          <span className="text-2xl md:text-3xl">x</span>
          <span className="text-2xl md:text-3xl">x</span>
        </div>
        <span className="text-2xl md:text-3xl">us</span>
      </div>
      <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-gray-400 mt-2">Peluquería</span>
    </a>
  );
}
