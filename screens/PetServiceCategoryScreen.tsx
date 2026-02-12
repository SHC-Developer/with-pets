import React, { useState } from 'react';
import { ChevronLeft, Search, MapPin, Star, Calendar, Stethoscope, Scissors, Home, Truck, HeartHandshake, CheckCircle } from 'lucide-react';

interface PetServiceCategoryScreenProps {
  onBack: () => void;
  onServiceClick: () => void;
}

const subCategories = [
  { id: 'health', label: '헬스·메디컬', desc: '병원/약국', icon: Stethoscope },
  { id: 'beauty', label: '미용·목욕', desc: '살롱/스파', icon: Scissors },
  { id: 'care', label: '돌봄·위탁', desc: '호텔/시터', icon: Home },
  { id: 'taxi', label: '이동지원', desc: '펫택시', icon: Truck },
  { id: 'behavior', label: '행동·심리', desc: '훈련/상담', icon: HeartHandshake },
];

const services = [
  { id: 1, name: '동탄 24시 동물병원', type: '병원', dist: '1.2km', rating: 4.9, review: 324, bookable: true, img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd63d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
  { id: 2, name: '몽몽 살롱 동탄점', type: '미용', dist: '2.5km', rating: 4.8, review: 128, bookable: true, img: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
  { id: 3, name: '행복한 강아지 유치원', type: '돌봄', dist: '3.0km', rating: 4.7, review: 56, bookable: false, img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
  { id: 4, name: '바른 행동 교정 센터', type: '훈련', dist: '5.1km', rating: 5.0, review: 42, bookable: true, img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
];

const PetServiceCategoryScreen: React.FC<PetServiceCategoryScreenProps> = ({ onBack, onServiceClick }) => {
  const [activeSub, setActiveSub] = useState('health');

  return (
    <div className="flex flex-col h-full bg-white pb-20">
      {/* Header */}
      <div className="px-2 h-14 flex items-center justify-between border-b border-gray-100 bg-white sticky top-0 z-20">
        <div className="flex items-center">
          <button onClick={onBack} className="p-2 text-gray-800 hover:bg-gray-100 rounded-full mr-1">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-lg font-bold text-gray-900">펫 서비스</h1>
        </div>
        <button className="p-2 text-gray-800 hover:bg-gray-100 rounded-full">
          <Search size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide bg-gray-50">
        
        {/* Sub Categories Grid */}
        <div className="bg-white px-5 py-6 mb-2 rounded-b-3xl shadow-sm">
          <div className="grid grid-cols-5 gap-2">
            {subCategories.map((sub) => {
              const Icon = sub.icon;
              const isActive = activeSub === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => setActiveSub(sub.id)}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                    isActive ? 'bg-blue-500 text-white shadow-lg shadow-blue-200' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'
                  }`}>
                    <Icon size={20} />
                  </div>
                  <div className="text-center">
                    <span className={`block text-[11px] font-bold ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>{sub.label.split('·')[0]}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Bar */}
        <div className="sticky top-0 z-10 bg-gray-50 px-5 py-3 flex gap-2 overflow-x-auto scrollbar-hide backdrop-blur-sm bg-opacity-90">
          <button className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-700 shadow-sm">
            <MapPin size={12} className="text-blue-500" /> 내 주변 5km
          </button>
          <button className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-700 shadow-sm">
            <Calendar size={12} className="text-blue-500" /> 오늘/내일
          </button>
          <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-gray-500">
            평점순
          </button>
          <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-gray-500">
            주차 가능
          </button>
        </div>

        {/* Service List */}
        <div className="px-5 pb-6 space-y-4">
          {services.map((svc) => (
            <div 
              key={svc.id} 
              onClick={onServiceClick}
              className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm active:scale-[0.99] transition-transform flex gap-4 cursor-pointer"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden relative">
                <img src={svc.img} alt={svc.name} className="w-full h-full object-cover" />
                {svc.bookable && (
                  <div className="absolute bottom-0 w-full bg-blue-500/90 text-white text-[9px] font-bold text-center py-0.5 backdrop-blur-sm">
                    오늘예약가능
                  </div>
                )}
              </div>
              
              <div className="flex-1 flex flex-col justify-between py-0.5">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[10px] font-bold text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded">{svc.type}</span>
                    <span className="text-xs text-gray-400">{svc.dist}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 leading-tight mb-1">{svc.name}</h3>
                  <div className="flex items-center gap-1 text-xs">
                    <Star size={12} className="fill-amber-400 text-amber-400" />
                    <span className="font-bold text-gray-800">{svc.rating}</span>
                    <span className="text-gray-400">({svc.review})</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mt-2">
                  {svc.bookable ? (
                     <span className="text-xs text-gray-500 flex items-center gap-1">
                        <CheckCircle size={12} className="text-green-500" /> 바로 확정
                     </span>
                  ) : (
                     <span className="text-xs text-gray-400">예약 문의 필요</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetServiceCategoryScreen;