import React from 'react';
import { Play, Settings, Subtitles, Maximize } from 'lucide-react';

export default function VideoPage() {
  return (
    <div className="max-w-7xl mx-auto pt-6 px-6 animate-fade-in-up pb-20">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 space-y-4">
          <div className="aspect-video bg-black rounded-xl relative group overflow-hidden shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform">
                <Play size={32} fill="white" className="text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="w-full h-1 bg-gray-600 rounded-full mb-2">
                <div className="w-1/3 h-full bg-red-600 rounded-full relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
                </div>
              </div>
              <div className="flex justify-between text-white text-xs font-medium">
                <span>04:20 / 12:45</span>
                <div className="flex gap-3">
                  <Subtitles size={16} />
                  <Settings size={16} />
                  <Maximize size={16} />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h1 className="text-xl font-bold text-gray-900">AI 浏览器的未来：流体智能与意图交互</h1>
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">D</div>
                <div>
                  <div className="text-sm font-bold text-gray-900">DesignDaily</div>
                  <div className="text-xs text-gray-500">45万 订阅者</div>
                </div>
                <button className="ml-4 px-4 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800">订阅</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex gap-2 cursor-pointer group">
              <div className="w-32 h-20 bg-gray-200 rounded-lg flex-shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-tight group-hover:text-blue-600">生成式 UI 的设计模式</h3>
                <div className="text-xs text-gray-500 mt-1">TechInsider</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
