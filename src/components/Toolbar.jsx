import React from 'react';
import { ChevronLeft, ChevronRight, RotateCw, Home } from 'lucide-react';

export default function Toolbar() {
  return (
    <div className="flex items-center gap-2 ml-2">
      {[
        { icon: ChevronLeft, disabled: true },
        { icon: ChevronRight, disabled: true },
        { icon: RotateCw, disabled: false },
        { icon: Home, disabled: false }
      ].map(({ icon: Icon, disabled }, idx) => (
        <button
          key={idx}
          disabled={disabled}
          className={`p-1.5 rounded hover:bg-[#e0e3e7] transition-colors ${disabled ? 'opacity-40 cursor-not-allowed' : ''}`}
        >
          <Icon size={16} className="text-[#5f6368]" />
        </button>
      ))}
    </div>
  );
}
