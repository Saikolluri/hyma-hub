"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Toast({ message, isVisible }: { message: string; isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, y: 50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 20, x: "-50%" }}
          className="fixed bottom-10 left-1/2 z-[100] bg-blue-600 text-white px-6 py-3 rounded-full font-bold shadow-[0_0_30px_rgba(37,99,235,0.5)] border border-blue-400/50 flex items-center gap-3"
        >
          <div className="w-2 h-2 bg-white rounded-full animate-ping" />
          <span className="text-xs tracking-widest uppercase">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
