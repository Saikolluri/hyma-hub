"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Terminal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const bootSequence = [
    "> INITIALIZING HYMA CORE...",
    "> CONNECTING TO NEURAL NODES...",
    "> LOADING 3D MESH GENERATOR...",
    "> STACK: NEXT.JS 16.1.6 // TAILWIND 4.0",
    "> ENCRYPTING DATA STREAMS...",
    "> PROTOCOL ALPHA-6 ENABLED.",
    "> SYSTEM READY. WELCOME, OPERATOR."
  ];

  useEffect(() => {
    if (isOpen) {
      setLines([]);
      bootSequence.forEach((text, i) => {
        setTimeout(() => {
          setLines((prev) => [...prev, text]);
        }, i * 600);
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 pointer-events-none"
        >
          <div className="w-full max-w-2xl bg-black/90 border border-blue-500/30 rounded-lg shadow-[0_0_50px_rgba(0,102,255,0.2)] backdrop-blur-xl pointer-events-auto overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
              <span className="text-[10px] font-bold tracking-widest text-blue-400">HYMA_CORE_TERMINAL</span>
              <button onClick={onClose} className="text-white/50 hover:text-white text-xs">ESC // CLOSE</button>
            </div>
            <div ref={scrollRef} className="p-6 h-64 overflow-y-auto font-mono text-sm space-y-2 custom-scrollbar">
              {lines.map((line, i) => (
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} key={i} className="flex gap-3">
                  <span className="text-blue-500">➜</span>
                  <span className="text-gray-300">{line}</span>
                </motion.div>
              ))}
              {lines.length < bootSequence.length && (
                <div className="w-2 h-5 bg-blue-500 animate-pulse inline-block" />
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
