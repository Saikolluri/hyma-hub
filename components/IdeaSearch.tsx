"use client";
import React from "react";

interface SearchProps {
  onSearch: (query: string) => void;
  onPost: (title: string) => void;
}

const IdeaSearch: React.FC<SearchProps> = ({ onSearch, onPost }) => {
  const [input, setInput] = React.useState("");

  return (
    <div className="w-full max-w-2xl space-y-4">
      <div className="relative group">
        <input 
          type="text" 
          placeholder="Filter the neural feed..." 
          onChange={(e) => onSearch(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm italic focus:border-blue-600 outline-none transition-all"
        />
        <div className="absolute right-6 top-4 text-[8px] font-mono text-blue-900 uppercase tracking-widest">Search_Active</div>
      </div>
      
      <div className="flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Transmit new concept..." 
          className="flex-1 bg-blue-600/5 border border-blue-600/10 rounded-2xl px-6 py-4 text-sm italic focus:border-blue-600 outline-none transition-all"
        />
        <button 
          onClick={() => { onPost(input); setInput(""); }}
          className="bg-blue-600 px-8 rounded-2xl font-black uppercase text-[10px] tracking-widest active:scale-95 transition-all"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default IdeaSearch;