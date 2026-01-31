"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// This interface fix resolves the error shown in your screenshot
interface WaitlistProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
}

export default function WaitlistModal({ isOpen, onClose, onSubmit }: WaitlistProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      onSubmit(email);
      setEmail(""); // Reset field after submission
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-gradient-to-br from-gray-900 to-black border border-white/10 p-8 rounded-3xl shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-2 italic">Join the Core.</h3>
            <p className="text-gray-400 mb-6 text-sm">Secure your spot in the HYMA distributed network beta.</p>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="operator@network.com" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors font-mono text-sm text-white"
              />
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] pointer-events-auto"
              >
                Request Access
              </button>
            </form>
            
            <button onClick={onClose} className="mt-6 text-xs text-gray-600 hover:text-gray-400 uppercase tracking-widest w-full text-center pointer-events-auto">
              CLOSE INTERFACE
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}