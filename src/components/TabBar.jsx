import React from 'react';
import { Plus, X } from 'lucide-react';

export default function TabBar({ tabs, activeTabId, onTabChange, onNewTab, onCloseTab }) {
  return (
    <div className="flex items-end gap-1 px-1 select-none overflow-hidden h-[34px]">
      {/* macOS Traffic Lights */}
      <div className="flex gap-2 px-3 items-center h-full pb-1 mr-2">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]"></div>
        <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#D89E24]"></div>
        <div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1AAB29]"></div>
      </div>

      {tabs.map((tab, idx) => {
        const isActive = tab.id === activeTabId;
        return (
          <div key={tab.id} className="relative flex-1 max-w-[240px] min-w-[120px] h-full group">
            {/* Separator Line */}
            {!isActive && idx > 0 && tabs[idx-1].id !== activeTabId && (
              <div className="absolute left-0 top-1.5 bottom-1.5 w-[1px] bg-[#80868b] opacity-40"></div>
            )}
            
            {/* Tab Content */}
            <div 
              onClick={() => onTabChange(tab.id)}
              className={`
                absolute inset-0 rounded-t-lg transition-all duration-100 flex items-center px-3 cursor-default
                ${isActive ? 'bg-white shadow-[0_0_4px_rgba(0,0,0,0.1)] z-10' : 'hover:bg-[#e7eaed]'}
              `}
            >
              <div className="flex items-center gap-2 w-full">
                <tab.icon size={14} className={isActive ? 'text-blue-600' : 'text-[#5f6368]'} />
                <span className={`text-xs truncate flex-1 ${isActive ? 'text-[#3c4043] font-medium' : 'text-[#5f6368]'}`}>
                  {tab.title}
                </span>
                <button 
                  onClick={(e) => { e.stopPropagation(); onCloseTab(tab.id); }}
                  className={`p-0.5 rounded-full hover:bg-[#e8eaed] ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                >
                  <X size={10} />
                </button>
              </div>
            </div>
            
            {/* SVG Rounded Corners for Active Tab */}
            {isActive && (
              <>
                <div className="absolute bottom-0 -left-2 w-2 h-2">
                  <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none">
                    <path d="M8 8H0C4.41828 8 8 4.41828 8 0V8Z" fill="white"/>
                  </svg>
                </div>
                <div className="absolute bottom-0 -right-2 w-2 h-2">
                  <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none">
                    <path d="M0 8H8C3.58172 8 0 4.41828 0 0V8Z" fill="white"/>
                  </svg>
                </div>
              </>
            )}
          </div>
        )
      })}
      
      <button 
        onClick={onNewTab}
        className="p-1.5 ml-1 rounded-full hover:bg-[#cfd2d6] text-[#3c4043] transition-colors"
      >
        <Plus size={18} />
      </button>
    </div>
  );
}
