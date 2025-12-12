import React from 'react';
import { ChevronRight } from 'lucide-react';
import { BOOKMARKS } from '../constants/tabs';

export default function Bookmarks() {
  return (
    <div className="bg-white px-3 pb-1.5 flex items-center gap-1 border-b border-gray-200 text-[11px] text-[#3c4043]">
      {BOOKMARKS.map((bm, i) => (
        <button 
          key={i} 
          className="flex items-center gap-1.5 px-2 py-1 rounded-full hover:bg-[#f1f3f4] transition-colors max-w-[120px] truncate"
        >
          {bm.icon ? (
            <bm.icon size={12} className="text-[#5f6368]" />
          ) : (
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          )}
          <span className="truncate">{bm.title}</span>
        </button>
      ))}
      <div className="flex-1"></div>
      <button className="p-1 rounded-full hover:bg-[#f1f3f4]">
        <ChevronRight size={12} className="text-[#5f6368]"/>
      </button>
    </div>
  );
}
