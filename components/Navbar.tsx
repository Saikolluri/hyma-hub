"use client";
import React from "react";
import Image from "next/image";

interface NavbarProps {
  onContactClick: () => void;
  onProductsClick: () => void; // This fixes the 'Property does not exist' error
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick, onProductsClick }) => {
  return (
    <nav className="fixed top-0 w-full z-[150] h-24 px-6 md:px-12 flex items-center justify-between backdrop-blur-xl border-b border-white/5 bg-black/40">
      <div 
        className="flex items-center gap-4 cursor-pointer group"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <div className="relative w-12 h-12">
          {/* We are using the logo you uploaded */}
          <Image 
            src="/logo.png" 
            alt="HYMA Logo" 
            fill 
            className="object-contain"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-black italic tracking-tighter leading-none text-white">HYMA</span>
          <span className="text-[7px] font-mono tracking-[0.5em] text-blue-500 uppercase font-bold">Technologies</span>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <button 
          onClick={onProductsClick} 
          className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-blue-500 transition-all"
        >
          Products
        </button>
        <button 
          onClick={onContactClick} 
          className="bg-white text-black px-6 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-lg shadow-white/5"
        >
          Uplink
        </button>
      </div>
    </nav>
  );
};

export default Navbar;