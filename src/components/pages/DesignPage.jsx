import React from 'react';
import { Sparkles, Layers, Zap, Cpu, RotateCw } from 'lucide-react';
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">状态岛设计系统</h2>
          <p className="text-gray-500">The Status Island System</p>
        </div>
        <div className="space-y-12">
          <div className="flex items-center gap-12">
            <div className="w-1/3 text-right space-y-2">
              <h3 className="text-lg font-bold text-gray-900">01. 感知与理解</h3>
              <p className="text-sm text-gray-500">当页面加载时，状态岛自动展开，通过蓝色旋转光效示意 AI 正在阅读并提取关键信息。</p>
            </div>
            <div className="flex-1 bg-gray-50 rounded-2xl p-8 border border-gray-100 flex items-center justify-center">
              <div className="bg-white rounded-full px-4 py-2 flex items-center gap-3 shadow-sm border border-blue-100">
                <RotateCw size={16} className="text-blue-600 animate-spin" />
                <span className="text-xs font-medium text-gray-600">正在分析页面...</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-12 flex-row-reverse">
            <div className="w-1/3 text-left space-y-2">
              <h3 className="text-lg font-bold text-gray-900">02. 建议就绪</h3>
              <p className="text-sm text-gray-500">分析完成后，收缩为静默图标。当用户鼠标悬停时，流畅滑出基于当前场景的核心操作建议。</p>
            </div>
            <div className="flex-1 bg-gray-50 rounded-2xl p-8 border border-gray-100 flex items-center justify-center relative">
              <div className="bg-white rounded-full pl-1 pr-1 py-1 flex items-center gap-2 shadow-lg border border-gray-100">
                <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Sparkles size={14} fill="currentColor" />
                </div>
                <div className="flex gap-1 pr-1">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">设计哲学</span>
                  <span className="px-3 py-1 bg-white hover:bg-gray-50 rounded-full text-xs font-medium text-gray-600 border border-gray-100">分享卡片</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
