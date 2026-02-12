import React, { useState } from 'react';
import { ChevronLeft, MapPin, Star, Clock, Filter, Phone, MessageCircle } from 'lucide-react';

interface FuneralServiceListScreenProps {
  onBack: () => void;
  onDetail: () => void;
}

const FuneralServiceListScreen: React.FC<FuneralServiceListScreenProps> = ({ onBack, onDetail }) => {
  const [activeFilter, setActiveFilter] = useState('전체');
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  const services = [
    { id: 1, name: '엔젤스톤 용인 본점', loc: '경기 용인시 처인구', dist: '12km', rating: 4.9, price: '250,000', badges: ['24시간', '픽업가능'] },
    { id: 2, name: '펫헤븐 메모리얼 파크', loc: '경기 화성시', dist: '5km', rating: 4.8, price: '200,000', badges: ['24시간', '봉안당'] },
    { id: 3, name: '레인보우 쉼터', loc: '경기 수원시 영통구', dist: '8km', rating: 4.7, price: '180,000', badges: ['단독추모'] },
  ];

  return (
    <div className="flex flex-col h-full bg-[#FAFAF8] relative">
      {/* Header */}
      <div className="px-2 h-14 flex items-center justify-between border-b border-stone-200 bg-[#FAFAF8] z-10">
        <button onClick={onBack} className="p-2 text-stone-600">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-bold text-stone-800">배웅 서비스</h1>
        <button className="p-2 text-stone-600">
          <Filter size={20} />
        </button>
      </div>

      {/* Filter Chips */}
      <div className="px-5 py-3 flex gap-2 overflow-x-auto scrollbar-hide bg-[#FAFAF8] sticky top-0 z-10">
        {['전체', '서울', '경기/인천', '24시간', '픽업가능'].map(tag => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border whitespace-nowrap transition-colors ${
              activeFilter === tag 
                ? 'bg-stone-800 text-white border-stone-800' 
                : 'bg-white text-stone-500 border-stone-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto px-5 pb-24 scrollbar-hide">
        <p className="text-sm text-stone-500 mb-4 mt-2">
           근처에 <span className="font-bold text-stone-800">12곳</span>의 장례식장이 있어요.
        </p>

        <div className="space-y-4">
           {services.map((item) => (
             <div 
               key={item.id} 
               onClick={onDetail}
               className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 active:bg-stone-50 transition-colors"
             >
                <div className="flex justify-between items-start mb-2">
                   <div>
                      <h3 className="text-lg font-bold text-stone-800 mb-1">{item.name}</h3>
                      <div className="flex items-center gap-1 text-xs text-stone-500">
                         <MapPin size={12} /> {item.loc} <span className="text-stone-300">|</span> {item.dist}
                      </div>
                   </div>
                   <div className="flex items-center gap-1 bg-stone-50 px-2 py-1 rounded-lg">
                      <Star size={12} className="text-amber-400 fill-amber-400" />
                      <span className="text-xs font-bold text-stone-700">{item.rating}</span>
                   </div>
                </div>

                <div className="flex gap-1 mb-4">
                   {item.badges.map(b => (
                      <span key={b} className="text-[10px] bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded font-medium">
                         {b}
                      </span>
                   ))}
                </div>

                <div className="pt-4 border-t border-stone-100 flex justify-between items-center">
                   <span className="text-xs text-stone-500">기본 장례 패키지</span>
                   <span className="text-base font-bold text-stone-800">{item.price}원~</span>
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="absolute bottom-6 right-5 z-20">
         <button 
           onClick={() => setIsConsultOpen(true)}
           className="flex items-center gap-2 bg-rose-900 text-white px-5 py-3.5 rounded-full shadow-xl shadow-rose-900/20 hover:bg-rose-800 transition-colors"
         >
            <Phone size={20} className="animate-pulse" />
            <span className="font-bold">24시 긴급 상담</span>
         </button>
      </div>

      {/* Consult Bottom Sheet Mock */}
      {isConsultOpen && (
        <div className="absolute inset-0 z-50">
           <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsConsultOpen(false)} />
           <div className="absolute bottom-0 w-full bg-white rounded-t-3xl p-6 animate-[slideUp_0.3s_ease-out]">
              <h2 className="text-xl font-bold text-stone-800 mb-2">무엇을 도와드릴까요?</h2>
              <p className="text-sm text-stone-500 mb-6">365일 24시간, 장례 지도사가 대기 중입니다.</p>
              
              <div className="space-y-3">
                 <button className="w-full flex items-center gap-4 p-4 bg-stone-50 rounded-2xl hover:bg-stone-100 transition-colors">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-rose-700 shadow-sm">
                       <Phone size={20} />
                    </div>
                    <div className="text-left">
                       <span className="block font-bold text-stone-800">전화 연결</span>
                       <span className="text-xs text-stone-500">가장 빠르게 안내받을 수 있어요</span>
                    </div>
                 </button>
                 <button className="w-full flex items-center gap-4 p-4 bg-stone-50 rounded-2xl hover:bg-stone-100 transition-colors">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-stone-700 shadow-sm">
                       <MessageCircle size={20} />
                    </div>
                    <div className="text-left">
                       <span className="block font-bold text-stone-800">채팅 상담</span>
                       <span className="text-xs text-stone-500">사진 전송 등 자세한 상담이 필요할 때</span>
                    </div>
                 </button>
              </div>
              <button 
                onClick={() => setIsConsultOpen(false)}
                className="w-full py-4 mt-4 text-stone-400 font-medium"
              >
                 닫기
              </button>
           </div>
        </div>
      )}
    </div>
  );
};

export default FuneralServiceListScreen;