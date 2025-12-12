import React from 'react';
import { TrendingUp, Activity } from 'lucide-react';

export default function FinancePage() {
  return (
    <div className="max-w-7xl mx-auto pt-6 px-6 animate-fade-in-up pb-20">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-[600px] flex flex-col">
          <div className="flex justify-between items-start mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-4xl font-bold text-gray-900 leading-none">NVDA</h2>
                <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs font-bold">纳斯达克</span>
              </div>
              <span className="text-sm text-gray-500 font-medium">英伟达 (NVIDIA Corporation)</span>
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold text-gray-900 tracking-tight">924.00</div>
              <div className="text-lg font-medium text-emerald-600 flex items-center justify-end gap-1 mt-2">
                +24.50 (2.72%) <TrendingUp size={20} />
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white relative w-full flex items-end justify-between gap-1 border-b border-gray-200 pb-6 overflow-hidden">
            {[40, 45, 42, 55, 60, 58, 65, 70, 75, 72, 80, 85, 82, 90, 95, 88, 92, 98, 94, 100].map((h, i) => (
              <div 
                key={i} 
                className="flex-1 bg-emerald-500 hover:bg-emerald-400 transition-colors rounded-t-sm relative group" 
                style={{height: `${h}%`}}
              ></div>
            ))}
          </div>
        </div>
        <div className="col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity size={16} className="text-blue-500"/> 市场情绪
            </h3>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full border-[6px] border-emerald-500 flex items-center justify-center text-emerald-600 font-bold text-2xl relative">
                92
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">极度贪婪</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
