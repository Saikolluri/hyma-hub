"use client";
import React, { Suspense, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import Navbar from "../components/Navbar";
import ContactPanel from "../components/ContactPanel";
import IdeaCard from "../components/IdeaCard";
import IdeaSearch from "../components/IdeaSearch";
import BackgroundGrid from "../components/BackgroundGrid";
import SystemMonitor from "../components/SystemMonitor";
import ChatBot from "../components/ChatBot"; // This will now use the new shape logic

// --- INTERNAL COMPONENT: ENHANCED PRODUCT CARD ---
const ProductCard = ({ name, cat, desc, specs, status }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-10 border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent rounded-[2.5rem] flex flex-col h-full group"
  >
    <div className="flex justify-between items-start mb-10">
      <div className="space-y-1">
        <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">{cat}</span>
        <h3 className="text-3xl font-black italic uppercase text-white group-hover:text-blue-400 transition-colors">{name}</h3>
      </div>
      <div className="px-3 py-1 bg-blue-600/10 border border-blue-600/30 rounded-full text-[8px] font-bold text-blue-400 uppercase tracking-tighter">
        {status}
      </div>
    </div>
    <p className="text-gray-400 text-sm italic font-light leading-relaxed mb-10 flex-grow">{desc}</p>
    <div className="space-y-3 mb-10">
      <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest block border-b border-white/5 pb-2">Technical_Specifications</span>
      {specs.map((spec: string, i: number) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">{spec}</span>
        </div>
      ))}
    </div>
    <button className="w-full py-4 border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-[0.4em] group-hover:bg-white group-hover:text-black transition-all">
      Access Repository
    </button>
  </motion.div>
);

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isProductsView, setIsProductsView] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const [ideas, setIdeas] = useState([
    { user: "Alpha_Node", title: "Neural Supply Chain", description: "Predictive AI modeling for automated logistics.", tags: ["AI", "Enterprise"] },
    { user: "Visionary", title: "Spatial OS", description: "Minimal kernel for industrial AR hardware.", tags: ["Hardware", "OS"] },
    { user: "Nexus_Dev", title: "ZeroTrust Core", description: "Blockchain-based identity for secure intranets.", tags: ["Security", "Web3"] },
  ]);

  const handlePostIdea = (newTitle: string) => {
    const newIdea = {
      user: "Guest_Op",
      title: newTitle,
      description: "Concept awaiting software provisioning from HYMA Technologies.",
      tags: ["Pending Review"],
    };
    setIdeas([newIdea, ...ideas]);
  };

  const filteredIdeas = ideas.filter(idea => 
    idea.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    idea.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="relative bg-[#02040a] text-white selection:bg-blue-600/30 min-h-screen">
      <BackgroundGrid />
      
      {/* 1. NAVBAR WITH SYNCED PROPS */}
      <Navbar 
        onContactClick={() => setIsContactOpen(true)} 
        onProductsClick={() => setIsProductsView(true)} 
      />
      
      <ContactPanel isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <SystemMonitor />
      
      {/* 2. NEW CHATBOT SHAPE WRAPPER */}
      <div className="fixed bottom-8 right-8 z-[500] group">
        <ChatBot />
        <style jsx global>{`
          /* Forcing the ChatBot trigger to be a premium circular/orb shape */
          .chatbot-trigger {
            border-radius: 9999px !important;
            border: 1px solid rgba(37, 99, 235, 0.3) !important;
            background: rgba(0, 0, 0, 0.8) !important;
            backdrop-filter: blur(10px);
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 20px rgba(37, 99, 235, 0.2);
          }
        `}</style>
      </div>

      {/* 3. PRODUCT SHOWCASE OVERLAY */}
      <AnimatePresence>
        {isProductsView && (
          <motion.section 
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-0 z-[200] bg-[#02040a] px-6 py-32 overflow-y-auto selection:bg-blue-500/40"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
                <button 
                  onClick={() => setIsProductsView(false)}
                  className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500 hover:text-white transition-all flex items-center gap-2 group"
                >
                  <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to Hub
                </button>
                
                <div className="px-6 py-3 bg-blue-600/5 border border-blue-600/20 rounded-2xl flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
                    <span className="text-[9px] font-mono text-green-500 uppercase tracking-widest">Inventory_Sync_Active</span>
                  </div>
                  <div className="h-4 w-[1px] bg-white/10" />
                  <span className="text-[8px] font-mono text-gray-500 uppercase tracking-tighter italic">Nodes: 002 // Uptime: 99.9%</span>
                </div>
              </div>

              <div className="mb-20">
                <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-none tracking-tighter">
                  Developed <br /><span className="text-blue-600">Inventory.</span>
                </h2>
                <p className="text-gray-500 text-sm italic mt-8 max-w-xl border-l border-blue-600/40 pl-6 leading-relaxed">
                  Proprietary software nodes and industrial kernels provisioned by Hyma Technologies. These systems represent the "Stable Build" of concepts graduated from the Idea Hub.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProductCard 
                  name="Neural_Audit"
                  cat="Infrastructure // FinTech"
                  desc="A high-performance fiscal verification engine designed to eliminate manual audit latency in startup accounting. Engineered for zero-error throughput."
                  specs={["Latency: <20ms", "Stack: Rust / Go", "Auth: ZeroTrust Protocol"]}
                  status="Active Deployment"
                />
                <ProductCard 
                  name="Hyma_Kernel"
                  cat="OS Layer // Robotics"
                  desc="A specialized micro-kernel providing the logic-layer for hardware synchronization in industrial robotic environments. Optimized for low-memory footprints."
                  specs={["Memory: 4MB Footprint", "Real-time: RTOS Enabled", "I/O: Spatial Mesh Integration"]}
                  status="BETA_BUILD_v0.9"
                />
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* 4. HERO SECTION */}
      <section className="relative pt-52 pb-24 px-6 z-10 flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <h1 className="text-7xl md:text-[12rem] font-black tracking-tighter leading-[0.8] uppercase italic select-none">
            <span className="text-white/10">IDEA</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-600 drop-shadow-[0_0_50px_rgba(37,99,235,0.2)]">HUB.</span>
          </h1>
          <div className="mt-12 flex items-center justify-center gap-6">
            <div className="h-[1px] w-12 bg-blue-900" />
            <p className="text-[10px] font-mono tracking-[0.8em] text-blue-500 uppercase">Innovation Laboratory</p>
            <div className="h-[1px] w-12 bg-blue-900" />
          </div>
          <button 
            onClick={() => setIsProductsView(true)}
            className="mt-16 text-[9px] font-black uppercase tracking-[0.6em] text-white/30 hover:text-blue-500 transition-all border-b border-transparent hover:border-blue-500 pb-2"
          >
            Explore Product Inventory
          </button>
        </motion.div>
      </section>

      {/* 5. IDEA HUB FEED */}
      <section id="hub" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col items-center">
            <IdeaSearch 
              onSearch={(q: string) => setSearchQuery(q)} 
              onPost={handlePostIdea} 
            />
            <div className="mt-12 flex items-center gap-4 w-full">
                <span className="text-[9px] font-black tracking-[0.4em] text-blue-600 uppercase italic">Neural_Feed</span>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-blue-600/30 to-transparent" />
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredIdeas.map((idea, i) => (
                <motion.div 
                  key={i} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                >
                  <IdeaCard {...idea} />
                  <div className="flex gap-4 mt-[-10px] px-8 relative z-20">
                    <button className="text-[9px] font-black text-gray-600 hover:text-blue-500 transition-all uppercase tracking-widest">Like</button>
                    <button className="text-[9px] font-black text-gray-600 hover:text-blue-500 transition-all uppercase tracking-widest">Comment</button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 6. PROVISIONING SERVICES */}
      <section id="services" className="relative z-10 py-40 px-6 bg-white/[0.01] border-y border-white/5 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
               <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-none mb-10 text-white">
                Technical <br/><span className="text-blue-600 font-thin">Provision.</span>
               </h2>
               <p className="text-gray-400 text-lg italic font-light leading-relaxed mb-12 max-w-lg">
                HYMA Technologies operates as the execution arm. We harvest concepts from the HUB and deploy mission-critical infrastructure.
               </p>
               <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-10">
                  <div>
                    <span className="text-blue-500 text-[9px] font-bold uppercase tracking-widest block mb-2">Build Speed</span>
                    <span className="text-xl font-black italic">4-6 Weeks</span>
                  </div>
                  <div>
                    <span className="text-blue-500 text-[9px] font-bold uppercase tracking-widest block mb-2">Native Stacks</span>
                    <span className="text-xl font-black italic">Rust / Next.js</span>
                  </div>
               </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
               {[
                 { t: "Strategic Architecture", d: "Scalable backend systems for 99.9% uptime." },
                 { t: "Native AI Integration", d: "Proprietary neural models for existing workflows." },
                 { t: "Spatial Experience", d: "Next-gen immersive UI for industrial tools." }
               ].map((box, i) => (
                 <div key={i} className="p-8 border border-white/5 bg-black hover:border-blue-500/30 transition-all rounded-2xl">
                    <h4 className="text-blue-500 font-bold uppercase text-[10px] mb-2 tracking-widest">{box.t}</h4>
                    <p className="text-gray-500 text-xs font-light italic leading-relaxed">{box.d}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT FOOTER */}
      <footer id="contact" className="relative py-32 px-6 bg-[#02040a] z-10">
        <div className="max-w-7xl mx-auto border-t border-white/5 pt-24">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16">
            <div className="space-y-6">
                <h4 className="text-xs font-black uppercase tracking-[0.5em] text-blue-600">Hyma Technologies</h4>
                <div className="space-y-1">
                    <p className="text-gray-400 text-sm italic font-light">Vijayawada, Andhra Pradesh</p>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest">India // Distributed Hub</p>
                </div>
            </div>
            <div className="space-y-10">
                <div className="space-y-2">
                    <span className="text-[9px] text-gray-600 font-bold uppercase tracking-widest block">Neural Inquiry</span>
                    <p className="text-2xl font-light italic text-white">hymatechnologies@gmail.com</p>
                </div>
                <div className="space-y-2">
                    <span className="text-[9px] text-gray-600 font-bold uppercase tracking-widest block">Secure Contact</span>
                    <p className="text-2xl font-light italic text-white">+91 77220 09934</p>
                </div>
            </div>
            <div className="flex flex-col items-end gap-6 self-end md:self-auto">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="px-10 py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all rounded-lg"
                >
                    Initiate Project Brief
                </button>
                <p className="text-[8px] text-gray-800 font-mono tracking-[0.2em]">© 2026 HYMA SYSTEMS INC.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}