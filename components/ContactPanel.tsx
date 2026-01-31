"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPanel({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise(r => setTimeout(r, 2000));
    setStatus('success');
    setTimeout(() => { 
        onClose(); 
        setStatus('idle'); 
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            onClick={onClose} 
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[110]" 
          />
          <motion.div 
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full md:w-[550px] bg-[#02040a] z-[120] p-12 border-l border-white/5 overflow-y-auto"
          >
            <button onClick={onClose} className="text-gray-600 hover:text-blue-500 mb-12 text-[9px] font-black uppercase tracking-[0.4em] transition-colors">
              [ Terminate_Connection ]
            </button>
            
            {status === 'success' ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="h-full flex flex-col justify-center text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-[0_0_30px_#2563eb]">
                    <span className="text-white text-2xl font-black italic">✓</span>
                </div>
                <h3 className="text-3xl font-black italic uppercase">Transmission Complete.</h3>
                <p className="text-gray-500 text-[10px] font-mono mt-4 tracking-widest">Our engineers will respond within 24 hours.</p>
              </motion.div>
            ) : (
              <>
                <h2 className="text-5xl font-black italic uppercase mb-2 leading-none">Venture <span className="text-blue-600 font-thin">Brief.</span></h2>
                <p className="text-gray-600 text-[9px] mb-12 tracking-[0.2em] uppercase font-mono italic">Engineering Intake / Vijayawada Hub</p>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.3em] text-blue-500 font-black">Idea Taxonomy</label>
                    <select className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-[11px] outline-none focus:border-blue-600 transition-all text-gray-400">
                      <option className="bg-black italic">Artificial Intelligence / Neural Nets</option>
                      <option className="bg-black italic">Enterprise SaaS Systems</option>
                      <option className="bg-black italic">Industrial Spatial Compute</option>
                      <option className="bg-black italic">Fintech & Web3 Core</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.3em] text-gray-500 font-black">Vision Architecture</label>
                    <textarea 
                      required
                      placeholder="Define the technical logic..." 
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-[11px] h-32 outline-none focus:border-blue-600 transition-all text-white placeholder:text-gray-800 italic" 
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Full Name" required className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-[11px] outline-none focus:border-blue-600" />
                    <input type="text" placeholder="Location" className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-[11px] outline-none focus:border-blue-600" />
                  </div>

                  <input type="email" placeholder="Email Channel" required className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-[11px] outline-none focus:border-blue-600" />
                  <input type="tel" placeholder="Mobile Uplink" required className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-[11px] outline-none focus:border-blue-600" />
                  
                  <button 
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-5 bg-blue-600 text-white font-black uppercase tracking-[0.4em] rounded-xl hover:shadow-[0_0_40px_rgba(37,99,235,0.3)] transition-all text-[10px] mt-6 disabled:opacity-50"
                  >
                    {status === 'sending' ? "Establishing Uplink..." : "Transmit Vision"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}