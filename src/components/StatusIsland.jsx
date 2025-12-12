import React, { useState, useRef, useEffect } from 'react';
import { Bot, RotateCw, Pin, PinOff, ChevronDown } from 'lucide-react';

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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // 显示前2个，其余放入下拉菜单
  const visibleActions = actions.slice(0, 2);
  const moreActions = actions.slice(2);
  
  // 点击外部关闭菜单
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);
  
  const handleMouseLeave = () => {
    onLeave();
  };

  return (
    <div 
      className="relative my-auto flex items-center justify-end transition-all duration-500 cubic-bezier(0.19, 1, 0.22, 1) mr-2 z-50"
      onMouseEnter={onHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`flex items-center h-[32px] rounded-full transition-all duration-300 relative ${isExpanded ? 'bg-white/95 backdrop-blur-sm border border-gray-200/80 px-1.5 ml-2 shadow-[0_2px_10px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]' : 'bg-transparent'}`}>
        <div 
          className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-all cursor-pointer ${isExpanded ? 'text-blue-600 bg-blue-50/50' : 'text-[#5f6368] hover:bg-[#e0e3e7]'} ${state === 'analyzing' ? 'animate-pulse text-blue-600' : ''}`}
          onClick={onToggleSidebar}
        >
          {state === 'analyzing' || state === 'thinking' ? (
            <RotateCw size={15} className="animate-spin text-blue-500" />
          ) : (
            <Bot size={16} strokeWidth={2.5} />
          )}
        </div>

        <div className={`flex items-center transition-all duration-300 ${isExpanded ? 'w-auto opacity-100 pl-1.5' : 'w-0 opacity-0 overflow-hidden'}`}>
          {state === 'analyzing' && (
            <span className="text-[12px] font-medium text-blue-600 px-2 whitespace-nowrap animate-pulse">正在理解页面...</span>
          )}
          {state === 'thinking' && (
            <div className="flex items-center gap-2 px-2 whitespace-nowrap">
              <span className="text-[12px] font-medium text-blue-600 animate-pulse">正在生成...</span>
            </div>
          )}
          {(state === 'hover' || isPinned || state === 'suggestion') && (
            <div className="flex items-center gap-2 animate-slide-in-right">
              {state === 'suggestion' && !isPinned && (
                <span className="text-[12px] font-medium text-blue-600 px-1 whitespace-nowrap animate-pulse">已生成 {actions.length} 个建议</span>
              )}
              {/* 显示前2个建议按钮 */}
              {(state === 'hover' || isPinned) && visibleActions.map((action, idx) => (
                <button
                  key={action.id}
                  onClick={(e) => { e.stopPropagation(); onAction(action); }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-all duration-200 whitespace-nowrap border border-transparent hover:border-gray-200/60"
                  style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'both' }}
                >
                  <action.icon size={14} className={action.color} />
                  <span>{action.label}</span>
                </button>
              ))}
              
              {/* 更多建议下拉菜单 */}
              {(state === 'hover' || isPinned) && moreActions.length > 0 && (
                <div 
                  className="relative"
                  ref={dropdownRef}
                >
                  <button
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      setDropdownOpen(!dropdownOpen); 
                    }}
                    className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200 whitespace-nowrap ${dropdownOpen ? 'bg-gray-100 text-gray-900' : 'bg-transparent hover:bg-gray-100 text-gray-500 hover:text-gray-700'}`}
                  >
                    <span>更多</span>
                    <ChevronDown size={13} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* 下拉菜单 */}
                  {dropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 bg-white/95 backdrop-blur-md border border-gray-100 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] py-1.5 min-w-[180px] z-[200] overflow-hidden animate-fade-in-up origin-top-right">
                      {moreActions.map((action) => (
                        <button
                          key={action.id}
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            onAction(action); 
                            setDropdownOpen(false); 
                          }}
                          className="w-full flex items-center gap-3 px-4 py-2.5 text-[12px] font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors text-left group"
                        >
                          <action.icon size={14} className={`${action.color} group-hover:scale-110 transition-transform`} />
                          <span>{action.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
          {(state === 'hover' || isPinned) && (
            <>
              <div className="w-px h-3.5 bg-gray-200 mx-2"></div>
              <button 
                onClick={(e) => { e.stopPropagation(); onTogglePin(); }} 
                className={`p-1.5 rounded-full hover:bg-gray-100 transition-colors ${isPinned ? 'text-blue-600 bg-blue-50' : 'text-gray-400 hover:text-gray-600'}`}
                title={isPinned ? "取消固定" : "固定状态栏"}
              >
                {isPinned ? <Pin size={12} fill="currentColor"/> : <PinOff size={12} />}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
