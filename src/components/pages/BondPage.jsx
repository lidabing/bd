import React from 'react';
import { TrendingUp, TrendingDown, Activity, AlertCircle, Percent, DollarSign } from 'lucide-react';

export default function BondPage() {
  return (
    <div className="max-w-7xl mx-auto pt-6 px-6 animate-fade-in-up pb-20">
      <div className="grid grid-cols-12 gap-6">
        {/* Main Chart Area */}
        <div className="col-span-8 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-[600px] flex flex-col">
          <div className="flex justify-between items-start mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-4xl font-bold text-gray-900 leading-none">113052</h2>
                <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-xs font-bold">上交所</span>
              </div>
              <span className="text-sm text-gray-500 font-medium">兴业转债 (Industrial Bank Convertible Bond)</span>
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold text-gray-900 tracking-tight">105.88</div>
              <div className="text-lg font-medium text-emerald-600 flex items-center justify-end gap-1 mt-2">
                +0.45 (0.43%) <TrendingUp size={20} />
              </div>
            </div>
          </div>
          
          {/* Simulated Chart */}
          <div className="flex-1 bg-white relative w-full flex items-end justify-between gap-1 border-b border-gray-200 pb-6 overflow-hidden">
            {[102, 103, 102.5, 104, 103.8, 104.2, 105, 104.8, 105.2, 105.5, 106, 105.8, 106.2, 106.5, 107, 106.8, 106.5, 106.2, 105.5, 105.88].map((h, i) => (
              <div 
                key={i} 
                className="flex-1 bg-blue-500 hover:bg-blue-400 transition-colors rounded-t-sm relative group" 
                style={{height: `${(h - 100) * 10}%`}} // Simple scaling for demo
              >
                 <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  {h}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>09:30</span>
            <span>11:30/13:00</span>
            <span>15:00</span>
          </div>
        </div>

        {/* Side Info Panel */}
        <div className="col-span-4 space-y-6">
          {/* Key Metrics */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity size={16} className="text-blue-500"/> 核心指标
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-gray-50 rounded-xl">
                <div className="text-xs text-gray-500 mb-1">转股溢价率</div>
                <div className="text-lg font-bold text-gray-900 flex items-center gap-1">
                  25.32% <span className="text-xs font-normal text-gray-400">偏高</span>
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl">
                <div className="text-xs text-gray-500 mb-1">到期收益率 (YTM)</div>
                <div className="text-lg font-bold text-emerald-600">2.15%</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl">
                <div className="text-xs text-gray-500 mb-1">正股价格</div>
                <div className="text-lg font-bold text-gray-900">16.88</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl">
                <div className="text-xs text-gray-500 mb-1">剩余年限</div>
                <div className="text-lg font-bold text-gray-900">3.5年</div>
              </div>
            </div>
          </div>

          {/* Analysis/Rating */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <AlertCircle size={16} className="text-purple-500"/> 投资评级
            </h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full border-[4px] border-blue-500 flex items-center justify-center text-blue-600 font-bold text-xl">
                AA+
              </div>
              <div>
                <div className="text-base font-bold text-gray-900">信用评级优秀</div>
                <div className="text-xs text-gray-500">违约风险极低，适合稳健型投资者</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">进攻性</span>
                <div className="flex gap-1">
                  {[1,2,3].map(i => <div key={i} className="w-8 h-2 bg-blue-500 rounded-full"></div>)}
                  {[1,2].map(i => <div key={i} className="w-8 h-2 bg-gray-200 rounded-full"></div>)}
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">防御性</span>
                <div className="flex gap-1">
                  {[1,2,3,4].map(i => <div key={i} className="w-8 h-2 bg-emerald-500 rounded-full"></div>)}
                  {[1].map(i => <div key={i} className="w-8 h-2 bg-gray-200 rounded-full"></div>)}
                </div>
              </div>
            </div>
          </div>
          
          {/* Terms */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
             <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <FileText size={16} className="text-amber-500"/> 条款触发进度
            </h3>
            <div className="space-y-3">
               <div>
                 <div className="flex justify-between text-xs mb-1">
                   <span className="text-gray-600">强赎 (130%)</span>
                   <span className="text-gray-400">当前: 105%</span>
                 </div>
                 <div className="w-full bg-gray-100 rounded-full h-1.5">
                   <div className="bg-rose-500 h-1.5 rounded-full" style={{width: '60%'}}></div>
                 </div>
               </div>
               <div>
                 <div className="flex justify-between text-xs mb-1">
                   <span className="text-gray-600">下修 (85%)</span>
                   <span className="text-gray-400">当前: 92%</span>
                 </div>
                 <div className="w-full bg-gray-100 rounded-full h-1.5">
                   <div className="bg-blue-500 h-1.5 rounded-full" style={{width: '20%'}}></div>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function FileText({size, className}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
    )
}
