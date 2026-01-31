"use client";

import React from "react";
import { motion } from "framer-motion";

const partners = ["NEURAL", "QUANTUM", "ORBITAL", "CORE", "SATELLITE", "VECTOR", "NODE"];

export default function Network() {
  return (
    <div className="w-full py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden whitespace-nowrap">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-20 items-center inline-block"
      >
        {[...partners, ...partners].map((name, i) => (
          <span key={i} className="text-2xl font-black italic tracking-tighter text-white/20 hover:text-blue-500/50 transition-colors cursor-default">
            {name}_SYSTEMS
          </span>
        ))}
      </motion.div>
    </div>
  );
}
