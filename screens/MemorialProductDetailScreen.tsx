import React, { useState } from 'react';
import { ChevronLeft, Share2, ShoppingCart, Star, ChevronDown } from 'lucide-react';

interface MemorialProductDetailScreenProps {
  onBack: () => void;
  onBuy: () => void;
}

const MemorialProductDetailScreen: React.FC<MemorialProductDetailScreenProps> = ({ onBack, onBuy }) => {
  const [engravingText, setEngravingText] = useState('');

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Header */}
      <div className="px-2 h-14 flex items-center justify-between border-b border-stone-100 sticky top-0 bg-white z-20">
        <button onClick={onBack} className="p-2 text-stone-600">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-base font-bold text-stone-800">추모 제품</h1>
        <div className="flex gap-2">
           <button className="p-2 text-stone-600"><Share2 size={24} /></button>
           <button className="p-2 text-stone-600"><ShoppingCart size={24} /></button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-24 scrollbar-hide">
         {/* Image */}
         <div className="w-full aspect-square bg-stone-100">
            <img 
               src="https://images.unsplash.com/photo-1616400619175-5beda3a17896?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
               alt="Urn" 
               className="w-full h-full object-cover"
            />
         </div>

         <div className="p-6">
            <div className="flex justify-between items-start mb-2">
               <span className="text-sm font-serif text-stone-500">마음을 담은 유골함</span>
               <div className="flex items-center gap-1">
                  <Star size={14} className="text-amber-400 fill-amber-400" />
                  <span className="text-sm font-bold text-stone-800">4.9</span>
               </div>
            </div>
            <h1 className="text-2xl font-serif font-bold text-stone-800 mb-6 leading-tight">
               화이트마블 순수 봉안함<br/>
               (각인 서비스 포함)
            </h1>

            <div className="flex justify-between items-end pb-6 border-b border-stone-100">
               <div className="space-y-1">
                  <span className="text-xs text-stone-400 line-through">120,000원</span>
                  <div className="flex items-baseline gap-1">
                     <span className="text-2xl font-bold text-stone-900">89,000</span>
                     <span className="text-sm text-stone-800">원</span>
                  </div>
               </div>
            </div>

            {/* Description - Emotional Copy */}
            <div className="py-8 space-y-4">
               <p className="text-stone-600 font-serif leading-relaxed text-sm">
                  "순수했던 아이의 영혼처럼,<br/>
                  깨끗하고 변치 않는 안식처를 선물하세요."
               </p>
               <p className="text-stone-500 text-sm leading-relaxed">
                  습기와 온도 변화에 강한 천연 대리석 소재로 제작되어 
                  오랫동안 아이를 안전하게 지켜줍니다. 
                  뚜껑 안쪽에는 실리콘 패킹 처리가 되어 있어 밀폐력이 우수합니다.
               </p>
            </div>

            {/* Engraving Option */}
            <div className="bg-stone-50 p-5 rounded-2xl mb-4">
               <h3 className="font-bold text-stone-800 mb-3 text-sm">각인 문구 입력 (선택)</h3>
               <textarea 
                  value={engravingText}
                  onChange={(e) => setEngravingText(e.target.value)}
                  placeholder="아이에게 전하고 싶은 짧은 메시지나 이름을 남겨주세요. (예: 사랑하는 뽀삐, 영원히 기억할게)"
                  className="w-full bg-white border border-stone-200 rounded-xl p-3 text-sm focus:outline-none focus:border-stone-400 h-24 resize-none"
               />
               <p className="text-right text-xs text-stone-400 mt-1">{engravingText.length}/30자</p>
            </div>

            <button className="w-full flex justify-between items-center p-4 bg-white border border-stone-200 rounded-xl">
               <span className="text-sm font-bold text-stone-700">추가 옵션 선택 (보자기 등)</span>
               <ChevronDown size={16} className="text-stone-400" />
            </button>
         </div>
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-0 w-full bg-white border-t border-stone-100 px-5 py-3 pb-[env(safe-area-inset-bottom)] z-30">
         <button 
           onClick={onBuy}
           className="w-full h-12 rounded-xl bg-stone-800 text-white font-bold text-lg flex items-center justify-center shadow-lg hover:bg-stone-700 transition-colors"
         >
            구매하기
         </button>
      </div>
    </div>
  );
};

export default MemorialProductDetailScreen;