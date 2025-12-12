import React from 'react';
import { Sparkles, Layers, Zap, Cpu, RotateCw, Bot, ChevronDown } from 'lucide-react';
import { CONTENT_COLORS } from '../../constants/styles';

export default function DesignPage() {
  return (
    <div className="max-w-5xl mx-auto pt-16 px-12 animate-fade-in-up pb-24">
      <div className="text-center mb-20 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 rounded-full text-xs font-bold text-gray-600 uppercase border border-gray-200">
          <Sparkles size={12} className="text-blue-600" /> The Manifesto
        </div>
        <h1 className="text-6xl font-black text-gray-900 tracking-tight leading-none">
          流体智能<br/>
          <span className="text-gray-400">Liquid Intelligence</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-normal leading-relaxed">
          界面应如水般随形。最好的交互不是点击，而是意图的自然流露。
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {[
          { icon: Layers, title: "无形之形", desc: "界面仅在需要时显现，如呼吸般自然。", theme: "indigo" },
          { icon: Zap, title: "意图优先", desc: "从寻找变为达成，结果主动流向用户。", theme: "purple" },
          { icon: Cpu, title: "情境感知", desc: "像副驾驶一样，理解你正在看什么。", theme: "emerald" }
        ].map((card, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${CONTENT_COLORS[card.theme]}`}>
              <card.icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="border-t border-gray-100 pt-20 mt-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">状态岛设计哲学</h2>
          <p className="text-gray-500">The Status Island Philosophy</p>
        </div>
        <div className="space-y-12">
          {/* 阶段 1 */}
          <div className="flex items-center gap-12">
            <div className="w-1/3 text-right space-y-2">
              <h3 className="text-lg font-bold text-gray-900">01. 载体与入口</h3>
              <p className="text-sm text-gray-500">状态岛不仅是状态指示器，更是 AI 的具象化载体。它常驻于此，作为用户与 AI 交互的统一入口，随时待命。</p>
            </div>
            <div className="flex-1 bg-gray-50 rounded-2xl p-8 border border-gray-100 flex items-center justify-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-1.5 py-1.5 flex items-center gap-3 shadow-sm border border-gray-200/60">
                <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Bot size={16} strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>

          {/* 阶段 2 */}
          <div className="flex items-center gap-12 flex-row-reverse">
            <div className="w-1/3 text-left space-y-2">
              <h3 className="text-lg font-bold text-gray-900">02. 理解的过程</h3>
              <p className="text-sm text-gray-500">在页面加载过程中，通过动态的光环与呼吸效果，可视化 AI "正在阅读"与"理解"页面的思维过程，建立用户信任。</p>
            </div>
            <div className="flex-1 bg-gray-50 rounded-2xl p-8 border border-gray-100 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-1.5 py-1.5 flex items-center gap-2 shadow-sm border border-gray-200/60">
                <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 relative">
                  <div className="absolute inset-0 rounded-full border-2 border-blue-100 border-t-blue-500 animate-spin" />
                  <Bot size={16} strokeWidth={2.5} className="scale-90" />
                </div>
                <span className="text-xs font-medium text-blue-600 pr-3 flex items-center gap-1">
                  正在理解页面
                  <span className="flex gap-0.5 pt-1">
                    <span className="w-1 h-1 bg-blue-600 rounded-full animate-bounce"></span>
                    <span className="w-1 h-1 bg-blue-600 rounded-full animate-bounce delay-75"></span>
                    <span className="w-1 h-1 bg-blue-600 rounded-full animate-bounce delay-150"></span>
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* 阶段 3 */}
          <div className="flex items-center gap-12">
            <div className="w-1/3 text-right space-y-2">
              <h3 className="text-lg font-bold text-gray-900">03. 关键行动建议</h3>
              <p className="text-sm text-gray-500">理解完成后，仅展示 1-2 个最核心的建议操作，避免信息过载。更多能力收纳于下拉菜单，保持界面简约不打扰。</p>
            </div>
            <div className="flex-1 bg-gray-50 rounded-2xl p-8 border border-gray-100 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-1.5 py-1.5 flex items-center gap-2 shadow-sm border border-gray-200/60">
                <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Bot size={16} strokeWidth={2.5} />
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-xs font-medium text-gray-600">全网比价</div>
                  <div className="px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-xs font-medium text-gray-600">评论摘要</div>
                  <div className="w-px h-3 bg-gray-200 mx-1"></div>
                  <div className="px-2 py-1 rounded-full hover:bg-gray-100 text-gray-400">
                    <ChevronDown size={14} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
