import React, { useState } from 'react';
import { Sparkles, X } from 'lucide-react';
import ChatView from './ChatView';
import ToolsView from './ToolsView';

export default function SidePanel({ open, onClose, chatHistory, onNewMessage, activeTab }) {
  const [activePanel, setActivePanel] = useState('chat');
  
  if (!activeTab) return null;

  return (
    <div 
      className={`
        absolute top-4 bottom-4 right-4 w-[380px] 
        bg-white/95 backdrop-blur-xl rounded-xl
        shadow-[0_8px_30px_rgba(0,0,0,0.12)] 
        border border-gray-200 z-40 flex flex-col overflow-hidden
        transition-all duration-300 origin-top-right
        ${open ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 pointer-events-none translate-x-4'}
      `}
    >
      <div className="h-14 flex items-center justify-between px-4 border-b border-gray-100">
        <div className="flex items-center gap-2 text-gray-700">
          <Sparkles size={16} className="text-blue-600" />
          <span className="font-medium text-sm">AI 助手</span>
        </div>
        <div className="flex bg-gray-100 p-0.5 rounded-lg">
          {['chat', 'tools'].map(tab => (
            <button
              key={tab}
              onClick={() => setActivePanel(tab)}
              className={`px-3 py-1 rounded-md text-xs font-medium capitalize transition-all ${activePanel === tab ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              {tab === 'chat' ? '对话' : '工具'}
            </button>
          ))}
        </div>
        <button onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded-full text-gray-400 transition-colors">
          <X size={14} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 bg-gray-50/50">
        {activePanel === 'tools' && <ToolsView />}
        {activePanel === 'chat' && <ChatView history={chatHistory} onNewMessage={onNewMessage} />}
      </div>
    </div>
  );
}
