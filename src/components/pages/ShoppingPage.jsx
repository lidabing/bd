import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

export default function ShoppingPage() {
  return (
    <div className="max-w-6xl mx-auto pt-6 px-6 animate-fade-in-up pb-20">
      <div className="grid grid-cols-12 gap-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 min-h-[600px]">
        <div className="col-span-5 space-y-4">
          <div className="aspect-square bg-[#F8F8F8] rounded-xl flex items-center justify-center relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop" 
              alt="Headphones" 
              className="relative z-10 w-3/4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
        <div className="col-span-7 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">Sony WH-1000XM5 无线降噪耳机 (黑色)</h1>
            <div className="flex gap-1 text-yellow-400 text-sm items-center mt-2">
              <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-300">★</span>
              <span className="text-gray-500 ml-1 text-xs">(4,281 条评价)</span>
            </div>
          </div>
          <div className="border-t border-b border-gray-100 py-6">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-rose-600">¥ 2,499</span>
              <span className="text-lg text-gray-400 line-through">¥ 2,899</span>
            </div>
          </div>
          <div className="pt-4 flex gap-4">
            <button className="flex-1 bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
              加入购物车 <ShoppingCart size={18}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
