"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IdeaProps {
  user: string;
  title: string;
  description: string;
  tags: string[];
}

export default function IdeaCard({ user, title, description, tags }: IdeaProps) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLikes(Math.floor(Math.random() * 50) + 10);
    setMounted(true);
  }, []);

  if (!mounted) return <div className="p-6 rounded-2xl bg-white/5 border border-white/10 h-[280px] animate-pulse" />;

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/50 transition-all backdrop-blur-md flex flex-col group overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-[50px] pointer-events-none" />

      <div className="flex items-center gap-3 mb-4 z-10">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-[10px] font-bold shadow-lg shadow-blue-500/20">
          {user[0].toUpperCase()}
        </div>
        <span className="text-[10px] text-gray-500 font-mono tracking-widest group-hover:text-blue-400 transition-colors">@{user.toLowerCase()}</span>
      </div>

      <h4 className="text-xl font-bold mb-2 italic tracking-tight z-10 group-hover:text-blue-500 transition-colors">{title}</h4>
      <p className="text-gray-400 text-xs mb-6 line-clamp-3 italic leading-relaxed z-10">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-8 z-10">
        {tags.map(tag => (
          <span key={tag} className="text-[8px] px-2 py-1 bg-blue-500/5 text-blue-400 rounded-sm border border-blue-500/20 uppercase font-black tracking-tighter">
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-white/5 mt-auto z-10">
        <button 
          onClick={() => setShowComments(!showComments)}
          className="text-[9px] uppercase tracking-widest text-gray-600 hover:text-white transition-colors font-bold flex items-center gap-2"
        >
          <div className={`w-1 h-1 rounded-full ${showComments ? 'bg-blue-500 shadow-[0_0_8px_#2563eb]' : 'bg-gray-800'}`} />
          Discussions
        </button>
        
        <button 
          onClick={() => {
            setLikes(prev => isLiked ? prev - 1 : prev + 1);
            setIsLiked(!isLiked);
          }}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
            isLiked 
            ? "bg-blue-600 border-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]" 
            : "border-white/5 text-gray-500 hover:border-blue-500/50 hover:text-white"
          }`}
        >
          <span className="text-[10px] font-mono font-bold">{likes}</span>
          <span className="text-[9px] uppercase font-black tracking-tighter">Support</span>
        </button>
      </div>

      <AnimatePresence>
        {showComments && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mt-4"
          >
            <div className="p-4 bg-black/40 rounded-xl border border-white/5">
              <p className="text-[9px] text-blue-400 font-mono mb-2 uppercase tracking-widest">System_Log:</p>
              <p className="text-[10px] text-gray-400 italic mb-4 leading-relaxed">"Initial architecture viable. Awaiting engineering uplink."</p>
              <input 
                type="text" 
                placeholder="Add technical logic..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-[10px] outline-none focus:border-blue-500 transition-all placeholder:text-gray-800"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}