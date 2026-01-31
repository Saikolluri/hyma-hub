"use client";
import React from 'react';

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactPanel({ isOpen, onClose }: ContactProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-xl">
      <div className="w-full max-w-2xl p-12 border border-white/10 relative bg-[#02040a]">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:text-white uppercase font-mono text-xs">
          Close [X]
        </button>
        <h2 className="text-4xl font-black italic uppercase mb-8">Initiate <span className="text-blue-600">Brief.</span></h2>
        <p className="text-gray-400 font-mono text-xs uppercase tracking-widest">System Ready for Input...</p>
      </div>
    </div>
  );
}
