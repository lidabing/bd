import React from 'react';
import { FileText, Wand2 } from 'lucide-react';

export default function ToolsView() {
  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="space-y-3">
        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">页面操作</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="flex flex-col items-center justify-center p-3 bg-white rounded-xl border border-gray-100 hover:border-gray-300 transition-all shadow-sm hover:shadow-md group">
            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500 mb-2 group-hover:scale-110 transition-transform">
              <FileText size={16} />
            </div>
            <span className="text-xs font-medium text-gray-700">生成摘要</span>
          </button>
          <button className="flex flex-col items-center justify-center p-3 bg-white rounded-xl border border-gray-100 hover:border-gray-300 transition-all shadow-sm hover:shadow-md group">
            <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center text-purple-500 mb-2 group-hover:scale-110 transition-transform">
              <Wand2 size={16} />
            </div>
            <span className="text-xs font-medium text-gray-700">智能润色</span>
          </button>
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">洞察</h3>
        <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-gray-600">可信度评分</span>
            <span className="text-green-600 font-bold text-xs">98/100</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 w-[98%] h-full rounded-full"></div>
          </div>
          <div className="pt-1 flex gap-1.5 flex-wrap">
            {['#设计', '#UI/UX', '#趋势'].map(tag => (
              <span key={tag} className="px-2 py-0.5 bg-gray-50 text-gray-500 text-[10px] font-medium rounded border border-gray-100">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
