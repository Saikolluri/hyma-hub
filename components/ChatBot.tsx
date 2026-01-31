"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hey! I'm your Hyma Architect. Think of me as your co-founder in the cloud. What's the vision today?" }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => { scrollRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const getAIResponse = (query: string) => {
    const q = query.toLowerCase();
    if (q.includes("help") || q.includes("work")) return "We operate on a 3-tier system: Discovery, Engineering, and Provisioning. I can guide you through the ROC registration or help you architect your React backend. Where should we start?";
    if (q.includes("money") || q.includes("cost")) return "Packages are venture-specific. However, we focus on 'Lean Engineering'—getting you to MVP without the typical 15-lakh burn rate. Want a rough estimate for your tech stack?";
    if (q.includes("legal") || q.includes("roc")) return "ROC compliance is our bread and butter. We handle the MoA, AoA, and DIN filings so you can focus on the product. It usually takes us 7-10 days.";
    return "That's a bold move. Integrating that into the current market requires a solid data layer. Have you thought about the scalability of that specific feature?";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setInput("");

    setTimeout(() => {
      setMessages(prev => [...prev, { role: "ai", text: getAIResponse(userMsg) }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[2000]">
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-[#03050a]/90 border border-blue-500/20 w-[380px] h-[600px] rounded-3xl shadow-[0_0_50px_rgba(37,99,235,0.1)] flex flex-col overflow-hidden backdrop-blur-2xl">
            <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-tighter text-white">Hyma Intelligence Core</span>
            </div>
            <div className="flex-1 p-6 overflow-y-auto space-y-6 scrollbar-hide">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed ${m.role === 'user' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white/5 text-gray-300 border border-white/5'}`}>
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={scrollRef} />
            </div>
            <div className="p-4 bg-white/5 flex gap-2">
              <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me about venture building..." className="flex-1 bg-transparent border-none text-xs focus:ring-0 text-white" />
              <button onClick={handleSend} className="text-blue-500 font-bold text-xs px-2">SEND</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={() => setIsOpen(!isOpen)} className="group relative w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl transition-all active:scale-95">
        <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20 group-hover:hidden" />
        <span className="text-2xl">{isOpen ? "×" : "✦"}</span>
      </button>
    </div>
  );
}