import React from 'react';
import { Bone, ShoppingBag, Scissors, Sun, Tv, HeartHandshake } from 'lucide-react';

const categories = [
  { icon: Bone, label: '펫푸드', desc: '사료·간식·영양제', color: 'text-orange-500', bg: 'bg-orange-50' },
  { icon: ShoppingBag, label: '펫용품', desc: '장난감·의류·리빙', color: 'text-yellow-500', bg: 'bg-yellow-50' },
  { icon: Scissors, label: '펫서비스', desc: '미용·병원·호텔', color: 'text-blue-500', bg: 'bg-blue-50' },
  { icon: Sun, label: '라이프스타일', desc: '여행·동반·스냅', color: 'text-green-500', bg: 'bg-green-50' },
  { icon: Tv, label: '엔터', desc: '펫TV·음악', color: 'text-purple-500', bg: 'bg-purple-50' },
  { icon: HeartHandshake, label: '장례', desc: '마지막 동행', color: 'text-gray-500', bg: 'bg-gray-100' },
];

const GridMenu: React.FC = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-3">
        {categories.map((item, index) => {
          const Icon = item.icon;
          return (
            <button 
              key={index} 
              className="flex flex-col items-center justify-center bg-white py-4 px-2 rounded-2xl border border-gray-50 shadow-sm hover:shadow-md active:scale-95 transition-all duration-200"
            >
              <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110`}>
                <Icon size={26} className={item.color} />
              </div>
              <span className="text-[15px] font-bold text-gray-900 leading-tight">{item.label}</span>
              <span className="text-[10px] text-gray-400 mt-1 font-medium tracking-tight">{item.desc}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default GridMenu;