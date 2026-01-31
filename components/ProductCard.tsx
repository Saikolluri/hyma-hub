"use client";
import React from "react";
import { motion } from "framer-motion";

interface ProductProps {
  name: string;
  cat: string;
  desc: string;
  specs: string[];
  status: string;
}

const ProductCard: React.FC<ProductProps> = ({ name, cat, desc, specs, status }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-10 border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent rounded-[2.5rem] flex flex-col h-full group"
    >
      <div className="flex justify-between items-start mb-10">
        <div className="space-y-1">
          <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">{cat}</span>
          <h3 className="text-3xl font-black italic uppercase text-white group-hover:text-blue-400 transition-colors">{name}</h3>
        </div>
        <div className="px-3 py-1 bg-blue-600/10 border border-blue-600/30 rounded-full">
          <span className="text-[8px] font-bold text-blue-400 uppercase tracking-tighter">{status}</span>
        </div>
      </div>

      <p className="text-gray-400 text-sm italic font-light leading-relaxed mb-10 flex-grow">
        {desc}
      </p>

      {/* TECHNICAL SPECS BLOCK */}
      <div className="space-y-3 mb-10">
        <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest block border-b border-white/5 pb-2">Technical_Specifications</span>
        {specs.map((spec, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-1 h-1 bg-blue-600 rounded-full" />
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">{spec}</span>
          </div>
        ))}
      </div>

      <button className="w-full py-4 border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-[0.4em] group-hover:bg-white group-hover:text-black transition-all">
        Access Repository
      </button>
    </motion.div>
  );
};

export default ProductCard;
