import React, { useState } from 'react';
import { ChevronLeft, Share2, MapPin, Clock, Phone, CheckCircle, ChevronDown, Heart } from 'lucide-react';

interface FuneralServiceDetailScreenProps {
  onBack: () => void;
  onReserve: () => void;
}

const FuneralServiceDetailScreen: React.FC<FuneralServiceDetailScreenProps> = ({ onBack, onReserve }) => {
  const [activeTab, setActiveTab] = useState('info');

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Header */}
      <div className="absolute top-0 w-full h-14 z-20 flex items-center justify-between px-2 bg-gradient-to-b from-black/30 to-transparent">
        <button onClick={onBack} className="p-2 text-white drop-shadow-md">
          <ChevronLeft size={28} />
        </button>
        <button className="p-2 text-white drop-shadow-md">
          <Share2 size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-24 scrollbar-hide">
        {/* Hero Image */}
        <div className="relative w-full h-64 bg-stone-200">
           <img 
             src="https://images.unsplash.com/photo-1518176258769-f227c798150e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
             className="w-full h-full object-cover grayscale-[20%]"
             alt="Memorial Hall"
           />
           <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/70 to-transparent" />
           <div className="absolute bottom-6 left-5 text-white">
              <span className="bg-white/20 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold mb-2 inline-block">24시간 운영</span>
              <h1 className="text-2xl font-serif font-bold mb-1">엔젤스톤 용인 본점</h1>
              <div className="flex items-center gap-1 text-sm opacity-90">
                 <MapPin size={14} /> 경기 용인시 처인구 
              </div>
           </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-stone-100 sticky top-0 bg-white z-10">
           {['기본 정보', '장례 절차', '패키지/비용', '후기'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3.5 text-sm font-bold border-b-2 transition-colors ${
                   activeTab === tab ? 'border-stone-800 text-stone-800' : 'border-transparent text-stone-400'
                }`}
              >
                 {tab}
              </button>
           ))}
        </div>

        <div className="p-5">
           {/* Summary Info */}
           <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="bg-stone-50 p-3 rounded-xl flex flex-col items-center justify-center gap-1">
                 <Clock size={20} className="text-stone-400" />
                 <span className="text-xs text-stone-500">운영시간</span>
                 <span className="text-sm font-bold text-stone-800">연중무휴 24시</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl flex flex-col items-center justify-center gap-1">
                 <Phone size={20} className="text-stone-400" />
                 <span className="text-xs text-stone-500">문의전화</span>
                 <span className="text-sm font-bold text-stone-800">0507-1234</span>
              </div>
           </div>

           {/* Process Timeline */}
           <div className="mb-8">
              <h3 className="text-lg font-bold text-stone-800 mb-4">장례 진행 절차</h3>
              <div className="relative border-l-2 border-stone-100 ml-3 space-y-8">
                 {[
                    { title: '운구 및 픽업', desc: '전문 의전팀이 자택으로 방문합니다.' },
                    { title: '추모 예식', desc: '독립된 추모실에서 마지막 인사를 나눕니다.' },
                    { title: '화장 진행', desc: '참관 가능한 투명한 시설에서 진행됩니다.' },
                    { title: '유골 수습 및 봉안', desc: '유골함에 담아 인계해 드립니다.' }
                 ].map((step, idx) => (
                    <div key={idx} className="relative pl-6">
                       <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-stone-200 border-2 border-white" />
                       <h4 className="font-bold text-stone-800 text-sm mb-1">{step.title}</h4>
                       <p className="text-xs text-stone-500">{step.desc}</p>
                    </div>
                 ))}
              </div>
           </div>

           {/* Package Options */}
           <div>
              <h3 className="text-lg font-bold text-stone-800 mb-4">패키지 안내</h3>
              <div className="space-y-3">
                 <div className="border border-stone-200 rounded-2xl p-5 hover:border-amber-400 hover:bg-amber-50/30 transition-colors cursor-pointer relative overflow-hidden">
                    <div className="flex justify-between items-start mb-3">
                       <div>
                          <span className="text-xs font-bold text-amber-600 mb-1 block">BEST</span>
                          <h4 className="font-bold text-stone-800 text-lg">기본 장례 패키지</h4>
                       </div>
                       <span className="font-bold text-stone-800">250,000원</span>
                    </div>
                    <ul className="text-xs text-stone-600 space-y-1.5 mb-2">
                       <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-stone-400" /> 염습 및 수의 제공</li>
                       <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-stone-400" /> 단독 추모실 (1시간)</li>
                       <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-stone-400" /> 기본 유골함</li>
                    </ul>
                 </div>
                 
                 <div className="border border-stone-200 rounded-2xl p-5 cursor-pointer">
                    <div className="flex justify-between items-start mb-3">
                       <h4 className="font-bold text-stone-800 text-lg">프리미엄 패키지</h4>
                       <span className="font-bold text-stone-800">450,000원</span>
                    </div>
                    <ul className="text-xs text-stone-600 space-y-1.5">
                       <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-stone-400" /> 최고급 수의 및 관</li>
                       <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-stone-400" /> 꽃장식 추모실</li>
                       <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-stone-400" /> 기능성 유골함 + 스톤 제작 할인</li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-0 w-full bg-white border-t border-stone-100 px-5 py-3 pb-[env(safe-area-inset-bottom)] flex items-center gap-3 z-30">
         <button className="flex flex-col items-center justify-center min-w-[48px] text-stone-400 hover:text-rose-500 transition-colors">
            <Heart size={24} />
            <span className="text-[10px] mt-0.5">찜</span>
         </button>
         <button 
           onClick={onReserve}
           className="flex-1 h-12 rounded-xl bg-stone-800 text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg hover:bg-stone-700 transition-colors"
         >
            상담 및 예약하기
         </button>
      </div>
    </div>
  );
};

export default FuneralServiceDetailScreen;