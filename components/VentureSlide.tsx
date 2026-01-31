"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function VentureSlide({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const services = [
    {
      title: "Legal & Incorporation",
      desc: "Document collection, ROC filings, and formalizing your vision into a protected legal entity.",
      icon: "01",
      tag: "PHASE_START"
    },
    {
      title: "Budgetary Architecture",
      desc: "Comprehensive financial modeling, burn-rate projections, and capital allocation strategies.",
      icon: "02",
      tag: "FISCAL_PLAN"
    },
    {
      title: "Core Engineering",
      desc: "Full-stack development, dedicated infrastructure, and 24/7 technical deployment support.",
      icon: "03",
      tag: "TECH_BUILD"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ x: "100%" }} 
          animate={{ x: 0 }} 
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 35, stiffness: 250 }}
          className="fixed inset-0 z-[250] bg-[#02040a] p-6 md:p-20 overflow-y-auto"
        >
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-24 border-b border-white/5 pb-8">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <span className="text-blue-600 font-black text-[9px] tracking-[0.5em] uppercase italic">System_Provisioning_v1.0</span>
              </div>
              <button onClick={onClose} className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                <span className="text-[10px] font-black uppercase tracking-widest">[ Terminate_Session ]</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left Column: Vision */}
              <div className="lg:col-span-5">
                <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.85] mb-8">
                  Venture <br/> <span className="text-blue-600">Provision.</span>
                </h2>
                <p className="text-gray-400 text-lg italic font-light leading-relaxed mb-10 border-l-2 border-blue-600 pl-6">
                  We don't just build apps; we architect companies. HYMA handles the friction of legal and financial overhead so you can focus on the core logic.
                </p>
                <div className="space-y-4 opacity-50">
                    <div className="flex items-center gap-4 text-[9px] font-mono uppercase tracking-[0.3em]">
                        <span className="text-blue-600">●</span> Status: Infrastructure_Ready
                    </div>
                    <div className="flex items-center gap-4 text-[9px] font-mono uppercase tracking-[0.3em]">
                        <span className="text-blue-600">●</span> Region: Andhra_Pradesh_Nodes
                    </div>
                </div>
              </div>

              {/* Right Column: Process Roadmap */}
              <div className="lg:col-span-7 space-y-6">
                {services.map((s, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="group p-8 border border-white/5 bg-white/[0.02] rounded-3xl hover:border-blue-600/30 transition-all flex gap-8 items-start"
                  >
                    <span className="text-blue-600/30 font-black text-4xl font-mono group-hover:text-blue-600 transition-colors">{s.icon}</span>
                    <div>
                        <span className="text-[8px] font-black text-blue-500 tracking-[0.3em] uppercase block mb-2">{s.tag}</span>
                        <h3 className="text-2xl font-black italic uppercase mb-3 tracking-tight text-white">{s.title}</h3>
                        <p className="text-gray-500 text-sm font-light italic leading-relaxed">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="mt-24 p-12 bg-gradient-to-br from-blue-700 to-blue-900 rounded-[40px] relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h4 className="text-3xl md:text-4xl font-black italic uppercase text-white mb-2 tracking-tighter">Ready for Uplink?</h4>
                        <p className="text-blue-200 text-xs font-mono uppercase tracking-[0.3em]">Initial consultation & technical audit inclusive.</p>
                    </div>
                    <button className="px-12 py-5 bg-white text-black rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl hover:bg-black hover:text-white transition-all active:scale-95">
                        Initiate_Incubation
                    </button>
                </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}