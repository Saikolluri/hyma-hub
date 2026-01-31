"use client";

import React from "react";
import { motion } from "framer-motion";

const phases = [
  { 
    id: "01", 
    status: "COMPLETE", 
    title: "Core Architecture", 
    desc: "Establishment of the distributed 3D neural node network." 
  },
  { 
    id: "02", 
    status: "ACTIVE", 
    title: "Spatial Interface", 
    desc: "Deployment of immersive UI kits for industrial automation." 
  },
  { 
    id: "03", 
    status: "PENDING", 
    title: "Quantum Sync", 
    desc: "Low-latency satellite synchronization for global operations." 
  },
];

export default function Roadmap() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
      {phases.map((phase, i) => (
        <motion.div 
          key={phase.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.2 }}
          className="relative pl-8 border-l border-blue-500/30"
        >
          <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-blue-500 rounded-full shadow-[0_0_10px_#2563eb]" />
          <span className="text-blue-500 font-mono text-xs font-bold tracking-tighter">{phase.status}</span>
          <h4 className="text-4xl font-black italic text-white my-2">{phase.id}</h4>
          <h5 className="text-xl font-bold text-gray-100 mb-2">{phase.title}</h5>
          <p className="text-gray-500 text-sm leading-relaxed">{phase.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
