"use client";
import React from "react";
import { motion } from "framer-motion";

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#02040a]">
      {/* Moving Scanner Effect */}
      <motion.div 
        initial={{ y: "-100%" }}
        animate={{ y: "100%" }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 h-[30vh] bg-gradient-to-b from-transparent via-blue-500/[0.03] to-transparent w-full z-10"
      />
      
      {/* Static Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Bottom Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent" />
    </div>
  );
}
