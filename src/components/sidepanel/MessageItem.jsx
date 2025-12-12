import React from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

export default function MessageItem({ msg }) {
  if (msg.type === 'result' && msg.action) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm animate-in fade-in zoom-in-95 duration-200">
        <div className="px-3 py-2 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2">
          <div className={`p-1 rounded ${msg.action.color ? msg.action.color.replace('text-', 'bg-').replace('600', '100') : 'bg-gray-100'}`}>
            {msg.action.icon && React.createElement(msg.action.icon, { size: 12, className: msg.action.color })}
          </div>
          <span className="text-xs font-semibold text-gray-700">{msg.action.label}</span>
        </div>
        <div className="p-3">
          <p className="text-xs text-gray-600 mb-3">{msg.content}</p>
          {msg.action.id === 'price_check' && (
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 rounded bg-green-50 border border-green-100">
                <span className="text-xs font-medium text-green-800">京东自营 (当前)</span>
                <span className="text-xs font-bold text-green-700">¥ 2,499</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded bg-gray-50 border border-gray-100">
                <span className="text-xs text-gray-600">天猫旗舰店</span>
                <span className="text-xs text-gray-500">¥ 2,549</span>
              </div>
            </div>
          )}
          {msg.action.id === 'review_summary' && (
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <ThumbsUp size={12} className="text-green-500 mt-1 shrink-0"/>
                <span className="text-xs text-gray-600">音质通透，降噪效果明显优于上一代。</span>
              </div>
              <div className="flex items-start gap-2">
                <ThumbsDown size={12} className="text-rose-500 mt-1 shrink-0"/>
                <span className="text-xs text-gray-600">耳罩材质较热,夏天佩戴不适。</span>
              </div>
            </div>
          )}
          {(msg.action.id === 'explain' || msg.action.id === 'code') && (
            <div className="bg-[#1e1e1e] p-2 rounded-lg font-mono text-[10px] text-gray-300 overflow-x-auto">
              <span className="text-purple-400">if</span> (tx.amount &lt;= 0) <span className="text-yellow-300">throw</span> Error;
            </div>
          )}
        </div>
        <div className="flex border-t border-gray-100">
          <button className="flex-1 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors">复制</button>
          <div className="w-px bg-gray-100"></div>
          <button className="flex-1 py-2 text-xs text-gray-500 hover:bg-gray-50 transition-colors">深入分析</button>
        </div>
      </div>
    );
  }
  
  return (
    <div className={`max-w-[95%] p-0 rounded-2xl text-xs leading-relaxed shadow-sm ${msg.role === 'user' ? 'bg-[#0b57d0] text-white p-3 rounded-br-none' : 'bg-transparent shadow-none'}`}>
      {msg.role === 'ai' ? (
        <div className="bg-white p-3 rounded-xl rounded-tl-none border border-gray-200 shadow-sm text-gray-700">
          {typeof msg.content === 'string' ? msg.content : ''}
        </div>
      ) : (
        typeof msg.content === 'string' ? msg.content : ''
      )}
    </div>
  );
}
