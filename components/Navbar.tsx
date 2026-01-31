"use client";
import React from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  onContactClick: () => void;
  onProductsClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick, onProductsClick }) => {
  return (
    <nav className="fixed top-0 w-full z-[150] h-24 px-6 md:px-12 flex items-center justify-between backdrop-blur-xl border-b border-white/5 bg-black/40">
      {/* PREMIMUM LOGO SECTION */}
      <div 
        className="flex items-center gap-4 cursor-pointer group"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <div className="relative w-10 h-10 flex items-center justify-center">
          {/* SVG LOGO: Modern Geometric 'H' Node */}
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-blue-600 stroke-[6] filter drop-shadow-[0_0_8px_rgba(37,99,235,0.6)] group-hover:stroke-white transition-colors duration-500">
            <path d="M30 20 V80 M70 20 V80 M30 50 H70" strokeLinecap="round" />
            <circle cx="30" cy="20" r="4" fill="white" className="animate-pulse" />
            <circle cx="70" cy="80" r="4" fill="white" className="animate-pulse" />
          </svg>
          <div className="absolute inset-0 bg-blue-600/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-black italic tracking-tighter leading-none text-white">HYMA</span>
          <span className="text-[7px] font-mono tracking-[0.5em] text-blue-500 uppercase font-bold">Technologies</span>
        </div>
      </div>

      {/* NAV LINKS */}
      <div className="flex items-center gap-8 md:gap-12">
        <button 
          onClick={onProductsClick} 
          className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-blue-500 transition-all"
        >
          Products
        </button>
        <button 
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          className="hidden md:block text-[9px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-blue-500 transition-all"
        >
          Provisioning
        </button>
        <button 
          onClick={onContactClick}
          className="bg-blue-600 text-white px-8 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all shadow-lg shadow-blue-600/20"
        >
          Uplink
        </button>
      </div>
    </nav>
  );
};

export default Navbar;