import React from 'react';
import { Sparkles, RotateCw, Pin, PinOff } from 'lucide-react';

export default function StatusIsland({ 
  state, 
  isPinned, 
  isExpanded, 
  actions, 
  onToggleSidebar, 
  onTogglePin, 
  onAction, 
  onHover, 
  onLeave 
}) {
  return (
    <div 
      className="relative my-auto flex items-center justify-end transition-all duration-500 cubic-bezier(0.19, 1, 0.22, 1) mr-1"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className={`flex items-center h-[26px] rounded-full transition-all duration-300 ${isExpanded ? 'bg-white border border-gray-200 px-1 ml-2 shadow-sm' : 'bg-transparent'}`}>
        <div 
          className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center transition-all cursor-pointer ${isExpanded ? 'text-blue-600' : 'text-[#5f6368] hover:bg-[#e0e3e7]'} ${state === 'analyzing' ? 'animate-pulse text-blue-600' : ''}`}
          onClick={onToggleSidebar}
        >
          {state === 'analyzing' || state === 'thinking' ? (
            <RotateCw size={14} className="animate-spin text-blue-500" />
          ) : (
            <Sparkles size={14} fill={isExpanded ? "currentColor" : "none"} />
          )}
        </div>

        <div className={`flex items-center overflow-hidden transition-all duration-300 ${isExpanded ? 'w-auto opacity-100 pl-1' : 'w-0 opacity-0'}`}>
          {state === 'analyzing' && (
            <span className="text-[11px] font-medium text-blue-600 px-2 whitespace-nowrap animate-pulse">正在理解页面...</span>
          )}
          {state === 'thinking' && (
            <div className="flex items-center gap-2 px-2 whitespace-nowrap">
              <span className="text-[11px] font-medium text-blue-600 animate-pulse">正在生成...</span>
            </div>
          )}
          {(state === 'hover' || isPinned || state === 'suggestion') && (
            <div className="flex items-center gap-1.5 animate-slide-in-right">
              {state === 'suggestion' && !isPinned && (
                <span className="text-[11px] font-medium text-blue-600 px-1 whitespace-nowrap animate-pulse">已生成 3 个建议</span>
              )}
              {(state === 'hover' || isPinned) && actions.map((action, idx) => (
                <button
                  key={action.id}
                  onClick={(e) => { e.stopPropagation(); onAction(action); }}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-transparent hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-all duration-200 whitespace-nowrap"
                  style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'both' }}
                >
                  <action.icon size={13} className={action.color} />
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          )}
          {(state === 'hover' || isPinned) && (
            <>
              <div className="w-px h-3 bg-gray-200 mx-1"></div>
              <button 
                onClick={(e) => { e.stopPropagation(); onTogglePin(); }} 
                className={`p-1 rounded-full hover:bg-gray-100 transition-colors ${isPinned ? 'text-blue-600' : 'text-gray-400'}`}
              >
                {isPinned ? <Pin size={10} fill="currentColor"/> : <PinOff size={10} />}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
