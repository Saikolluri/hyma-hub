"use client";
import { motion, AnimatePresence } from "framer-motion";

interface MethodologyProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Methodology({ isOpen, onClose }: MethodologyProps) {
  const steps = [
    { 
      id: "01", 
      title: "Vision Extraction", 
      desc: "Deconstructing raw ideas into technical requirements and high-level logic flows." 
    },
    { 
      id: "02", 
      title: "Protocol Design", 
      desc: "Architecting the infrastructure using Rust for speed and Next.js for seamless delivery." 
    },
    { 
      id: "03", 
      title: "Software Provisioning", 
      desc: "Rapid development cycles to deploy mission-critical MVPs within 4-6 business weeks." 
    },
    { 
      id: "04", 
      title: "Neural Scaling", 
      desc: "Deploying across distributed nodes with automated scaling and 99.9% uptime protocols." 
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ y: "100%" }} 
          animate={{ y: 0 }} 
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
          className="fixed inset-0 z-[200] bg-[#02040a] p-8 md:p-20 overflow-y-auto"
        >
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-24">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-500 font-black text-[10px] tracking-[0.5em] uppercase italic">
                  Systems_Methodology_v1.0
                </span>
              </div>
              <button 
                onClick={onClose} 
                className="px-6 py-2 border border-white/10 rounded-full text-[10px] font-black uppercase hover:bg-white hover:text-black transition-all"
              >
                Exit_System
              </button>
            </div>

            {/* Title */}
            <h2 className="text-5xl md:text-[7rem] font-black italic uppercase leading-none mb-24 tracking-tighter">
              The Engineering <br/> <span className="text-blue-600">Blueprint.</span>
            </h2>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="p-12 border border-white/5 bg-white/[0.02] rounded-[32px] hover:border-blue-600/40 transition-all group"
                >
                  <span className="text-5xl font-black text-white/5 block mb-6 italic group-hover:text-blue-600/20 transition-colors">
                    {step.id}
                  </span>
                  <h3 className="text-2xl font-black italic uppercase mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-light italic leading-relaxed max-w-sm">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bottom Status */}
            <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
               <p className="text-gray-500 text-xs italic max-w-md">
                 Our methodology is optimized for high-performance software delivery, ensuring that visions born in the HUB are architected for longevity.
               </p>
               <button 
                 onClick={onClose}
                 className="px-12 py-5 bg-blue-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all"
               >
                 Close Documentation
               </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}