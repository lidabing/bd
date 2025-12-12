import React from 'react';
import { ArrowRight } from 'lucide-react';
import MessageItem from './MessageItem';

export default function ChatView({ history, onNewMessage }) {
  return (
    <div className="flex flex-col h-full animate-fade-in-up">
      <div className="flex-1 space-y-4 pb-4">
        {history.map(msg => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : ''}`}>
            <MessageItem msg={msg} />
          </div>
        ))}
      </div>
      <div className="relative mt-auto">
        <input 
          className="w-full bg-white border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all placeholder:text-gray-400 shadow-sm"
          placeholder="输入问题..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (onNewMessage) onNewMessage(e.target.value);
              e.target.value = '';
            }
          }}
        />
        <button className="absolute right-2 top-1.5 p-1 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors">
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
