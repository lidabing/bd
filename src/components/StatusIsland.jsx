import React, { useState, useRef, useEffect } from 'react';
import { Bot, Pin, PinOff, ChevronDown, Sparkles } from 'lucide-react';

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
  
  // 核心原则：仅展示前2个最重要的建议
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

  // 状态判断
  const isProcessing = state === 'analyzing' || state === 'thinking';
  const showActions = (state === 'hover' || isPinned) && visibleActions.length > 0;

  return (
    <div 
      className="relative my-auto flex items-center justify-end transition-all duration-500 z-50"
    >
      {/* 状态岛主容器 - 简约胶囊形态 */}
      <div 
        className="flex items-center rounded-full transition-all duration-500 ease-out relative h-7 bg-white shadow-sm border border-gray-200/60 px-1"
      >
        {/* 展开内容区 - 始终显示 */}
        <div className="flex items-center transition-all duration-400 ease-out max-w-[600px] opacity-100">
          
          {/* 理解状态 - 可视化 AI 思考过程 */}
          {state === 'analyzing' && (
            <div className="flex items-center gap-2 px-1.5 animate-fade-in-up">
              <span className="text-[11px] font-medium text-blue-600 whitespace-nowrap">正在理解</span>
              <div className="flex gap-0.5">
                <span className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          
          {state === 'thinking' && (
            <div className="flex items-center gap-2 px-1.5 animate-fade-in-up">
              <span className="text-[11px] font-medium text-blue-600 whitespace-nowrap">思考中</span>
              <div className="flex gap-0.5">
                <span className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}

          {/* 核心操作建议 - 仅展示最重要的 1-2 个 */}
          {showActions && (
            <div className="flex items-center gap-1 pl-0.5 animate-slide-in-right">
              {visibleActions.map((action, idx) => (
                <button
                  key={action.id}
                  onClick={(e) => { e.stopPropagation(); onAction(action); }}
                  className="
                    flex items-center gap-1 px-2 py-1 rounded-full 
                    text-[11px] font-medium whitespace-nowrap
                    bg-gray-50 hover:bg-gray-100 
                    text-gray-600 hover:text-gray-900 
                    border border-gray-100 hover:border-gray-200
                    transition-all duration-200
                  "
                >
                  <action.icon size={12} className={action.color} />
                  <span>{action.label}</span>
                </button>
              ))}
              
              {/* 更多建议 - 收纳于下拉菜单，保持简约 */}
              {moreActions.length > 0 && (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      setDropdownOpen(!dropdownOpen); 
                    }}
                    className={`
                      flex items-center justify-center w-6 h-6 rounded-full 
                      transition-all duration-200
                      ${dropdownOpen 
                        ? 'bg-gray-100 text-gray-800' 
                        : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                      }
                    `}
                  >
                    <ChevronDown 
                      size={12} 
                      className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  {/* 下拉菜单 */}
                  {dropdownOpen && (
                    <div className="
                      absolute top-full right-0 mt-2 
                      bg-white/95 backdrop-blur-lg 
                      border border-gray-100 rounded-xl 
                      shadow-[0_8px_30px_rgba(0,0,0,0.12)] 
                      py-1.5 min-w-[180px] z-[200] 
                      animate-fade-in-up origin-top-right
                    ">
                      <div className="px-3 py-1.5 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                        更多操作
                      </div>
                      {moreActions.map((action) => (
                        <button
                          key={action.id}
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            onAction(action); 
                            setDropdownOpen(false); 
                          }}
                          className="
                            w-full flex items-center gap-2.5 px-3 py-2 
                            text-[11px] font-medium text-gray-600 
                            hover:bg-blue-50 hover:text-blue-600 
                            transition-all duration-150 text-left group
                          "
                        >
                          <div className="w-6 h-6 rounded-md bg-gray-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                            <action.icon size={12} className={`${action.color} group-hover:text-blue-600 transition-colors`} />
                          </div>
                          <span>{action.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* 分隔线 */}
        <div className="w-px h-3 bg-gray-200/80 mx-1" />

        {/* AI 核心图标 - 移至最右侧，替换 Pin */}
        <div 
          className={`
            relative flex-shrink-0 flex items-center justify-center cursor-pointer
            transition-all duration-300 rounded-full w-6 h-6
            ${isProcessing ? 'text-blue-600' : 'text-blue-600'}
          `}
          onClick={onToggleSidebar}
          title="打开 AI 助手"
        >
          {/* 理解过程的动态光环 */}
          {isProcessing && (
            <>
              <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-ping" />
              <div className="absolute inset-0 rounded-full border-2 border-blue-200 border-t-blue-500 animate-spin" style={{ animationDuration: '1s' }} />
            </>
          )}
          
          {/* AI 图标 - 始终可见，强调载体身份 */}
          <div className={`relative z-10 flex items-center justify-center w-5 h-5 rounded-full transition-all duration-300 ${isProcessing ? 'bg-blue-50 scale-95' : 'bg-blue-50'}`}>
            <Bot 
              size={14} 
              strokeWidth={2.5}
              className="transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
