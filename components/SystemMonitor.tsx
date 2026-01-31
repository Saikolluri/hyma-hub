"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SystemMonitor() {
  const [metrics, setMetrics] = useState({ cpu: 42, nodes: 1204, latency: 14 });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        cpu: Math.floor(Math.random() * (65 - 30) + 30),
        nodes: 1204 + Math.floor(Math.random() * 10),
        latency: Math.floor(Math.random() * (20 - 10) + 10)
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-32 right-6 z-40 hidden xl:block">
      <motion.div 
        whileHover={{ width: 180, backgroundColor: "rgba(0,0,0,0.6)" }}
        className="p-4 rounded-2xl border border-white/5 bg-black/30 backdrop-blur-xl font-mono text-[9px] space-y-4 w-12 overflow-hidden transition-all duration-500 group"
      >
        <div className="flex flex-col items-center group-hover:items-start transition-all">
          <p className="text-blue-500 mb-2 font-black">SYS</p>
          
          <div className="w-full space-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div>
              <p className="text-gray-500 mb-1 uppercase tracking-widest">Core_Load</p>
              <div className="w-full h-[2px] bg-white/10 rounded-full">
                <motion.div animate={{ width: `${metrics.cpu}%` }} className="h-full bg-blue-500 shadow-[0_0_8px_#2563eb]" />
              </div>
              <p className="mt-1 text-blue-400">{metrics.cpu}%</p>
            </div>

            <div>
                <p className="text-gray-500 mb-1 uppercase tracking-widest">Active_Nodes</p>
                <p className="text-white font-bold">{metrics.nodes}</p>
            </div>

            <div className="flex justify-between items-center border-t border-white/5 pt-2">
                <span className="text-gray-600 tracking-tighter">LATENCY</span>
                <span className="text-green-500">{metrics.latency}ms</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}