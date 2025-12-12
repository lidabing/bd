import { Code, X } from 'lucide-react';

import React from 'react';
export default function CodePage() {
  return (
    <div className="max-w-7xl mx-auto pt-6 px-6 animate-fade-in-up pb-20 h-full">
      <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-black/5 font-mono text-sm h-[600px] flex flex-col">
        <div className="bg-[#252526] flex items-center text-gray-400 select-none">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1e1e1e] border-t-2 border-blue-500 text-gray-100">
            <Code size={14} className="text-blue-400"/>
            <span>payment_logic.ts</span>
            <X size={12} className="ml-2 hover:bg-white/10 rounded p-0.5"/>
          </div>
        </div>
        <div className="flex-1 flex overflow-hidden">
          <div className="w-12 bg-[#1e1e1e] text-gray-600 text-right pr-3 pt-4 select-none leading-relaxed border-r border-white/5">
            {Array.from({length: 20}).map((_, i) => <div key={i}>{i+1}</div>)}
          </div>
          <div className="flex-1 p-4 overflow-auto bg-[#1e1e1e] text-gray-300">
            <pre className="leading-relaxed font-mono">
              <span className="text-purple-400">export const</span> <span className="text-yellow-200">processTx</span> = <span className="text-purple-400">async</span> (tx: Transaction) <span className="text-purple-400">{`=>`}</span> {'{'}<br/>
              &nbsp;&nbsp;<span className="text-blue-400">console</span>.log(<span className="text-orange-300">`正在处理交易...`</span>);<br/>
              {'}'}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
