import React, { useState } from 'react';
import { ChevronLeft, Search, Calendar, MapPin, Ticket, ChevronDown } from 'lucide-react';

interface PetEnterCategoryScreenProps {
  onBack: () => void;
}

const subCategories = [
  { id: 'exhibit', label: '전시·컬처', desc: '함께 관람' },
  { id: 'festival', label: '페스티벌', desc: '축제/행사' },
  { id: 'class', label: '클래스', desc: '창작/체험' },
  { id: 'memory', label: '추억보관', desc: '굿즈제작' },
];

const PetEnterCategoryScreen: React.FC<PetEnterCategoryScreenProps> = ({ onBack }) => {
  const [activeFilter, setActiveFilter] = useState('전체');

  return (
    <div className="flex flex-col h-full bg-white pb-20">
      {/* Header */}
      <div className="px-2 h-14 flex items-center justify-between border-b border-gray-100 bg-white sticky top-0 z-20">
        <div className="flex items-center">
          <button onClick={onBack} className="p-2 text-gray-800 hover:bg-gray-100 rounded-full mr-1">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-lg font-bold text-gray-900">펫 엔터</h1>
        </div>
        <button className="p-2 text-gray-800 hover:bg-gray-100 rounded-full">
          <Search size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide bg-gray-50 pb-[var(--bottom-nav-total)]">
        {/* Sub Category Grid */}
        <div className="px-5 py-6 bg-white mb-2 shadow-sm rounded-b-3xl">
          <div className="grid grid-cols-4 gap-2">
            {subCategories.map((sub) => (
              <button key={sub.id} className="bg-gray-50 rounded-2xl p-3 flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform hover:bg-purple-50 group">
                <span className="text-sm font-bold text-gray-800 group-hover:text-purple-600">{sub.label}</span>
                <span className="text-[10px] text-gray-400 group-hover:text-purple-400">{sub.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Filter */}
        <div className="px-5 py-3 flex justify-between items-center">
           <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-gray-800 text-white rounded-full text-xs font-bold">전체</button>
              <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-gray-600 font-medium">이번 달</button>
           </div>
           <button className="text-xs font-bold text-gray-500 flex items-center gap-1">
              지역 전체 <ChevronDown size={12} />
           </button>
        </div>

        {/* Event List */}
        <div className="px-5 pb-6 space-y-5">
           {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm group cursor-pointer active:scale-[0.99] transition-transform">
                 <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <img src={`https://source.unsplash.com/random/400x300?art,dog&sig=${i}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Event" />
                    <div className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded-lg text-[10px] font-bold shadow-md">
                       전시/팝업
                    </div>
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 pt-10">
                       <p className="text-white text-xs font-medium mb-0.5">D-5 마감임박</p>
                    </div>
                 </div>
                 
                 <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight mb-3">
                       2023 댕댕이 아트 페어:<br/>나의 가장 친한 친구
                    </h3>
                    
                    <div className="space-y-1.5 mb-4">
                       <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Calendar size={14} className="text-purple-400" /> 10.20(금) ~ 11.05(일)
                       </div>
                       <div className="flex items-center gap-2 text-xs text-gray-500">
                          <MapPin size={14} className="text-purple-400" /> 서울 성수동 에스팩토리
                       </div>
                    </div>

                    <div className="flex justify-between items-center border-t border-gray-50 pt-3">
                       <div className="flex items-baseline gap-1">
                          <span className="text-sm font-bold text-gray-400 line-through">15,000</span>
                          <span className="text-lg font-bold text-purple-600">12,000원</span>
                       </div>
                       <button className="bg-gray-900 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1">
                          <Ticket size={12} /> 예매하기
                       </button>
                    </div>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default PetEnterCategoryScreen;