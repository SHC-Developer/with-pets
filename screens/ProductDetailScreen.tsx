import React, { useState } from 'react';
import { ChevronLeft, Share2, ShoppingCart, Star, Heart, Check, ChevronDown, RefreshCw } from 'lucide-react';

interface ProductDetailScreenProps {
  onBack: () => void;
  onCart?: () => void;
  onBuy?: () => void;
}

const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({ onBack, onCart, onBuy }) => {
  const [activeTab, setActiveTab] = useState('info');
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* 1. Header (Sticky) */}
      <div className="absolute top-0 w-full h-14 z-20 flex items-center justify-between px-2 bg-gradient-to-b from-black/20 to-transparent">
        <button onClick={onBack} className="p-2 text-white drop-shadow-md">
          <ChevronLeft size={28} />
        </button>
        <div className="flex gap-2">
          <button className="p-2 text-white drop-shadow-md">
            <Share2 size={24} />
          </button>
          <button onClick={onCart} className="p-2 text-white drop-shadow-md relative">
            <ShoppingCart size={24} />
            <span className="absolute top-2 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white"></span>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-[90px] scrollbar-hide">
        {/* 2. Image Slider */}
        <div className="relative w-full aspect-square bg-gray-100">
          <img 
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Product" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4 bg-black/40 text-white text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm">
            1 / 5
          </div>
        </div>

        {/* 3. Product Summary */}
        <div className="px-5 pt-6 pb-2">
          <div className="flex justify-between items-start mb-1">
             <span className="text-sm font-bold text-gray-400">오리젠</span>
             <div className="flex items-center gap-1 text-sm font-bold text-gray-800">
               <Star size={14} className="fill-rose-500 text-rose-500" />
               4.9 <span className="text-gray-400 font-normal">(120)</span>
             </div>
          </div>
          <h1 className="text-xl font-bold text-gray-900 leading-snug mb-3">
            오리젠 오리지널 캣 1.8kg (전연령용)
          </h1>
          
          <div className="flex items-end gap-2 mb-6">
            <span className="text-2xl font-bold text-rose-500">10%</span>
            <span className="text-2xl font-bold text-gray-900">32,000<span className="text-base font-normal ml-0.5">원</span></span>
            <span className="text-sm text-gray-400 line-through mb-1">36,000원</span>
          </div>

          {/* Options */}
          <div className="space-y-3">
             <button className="w-full flex justify-between items-center p-4 bg-gray-50 rounded-xl text-sm font-medium border border-gray-100">
                <span className="text-gray-900">옵션: 1.8kg (기본)</span>
                <ChevronDown size={16} className="text-gray-400" />
             </button>

             {/* Subscription Toggle Box */}
             <div className={`border rounded-xl p-4 transition-colors ${isSubscribed ? 'border-rose-200 bg-rose-50' : 'border-gray-200 bg-white'}`}>
                <div className="flex justify-between items-center">
                   <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-lg ${isSubscribed ? 'bg-rose-100' : 'bg-gray-100'}`}>
                         <RefreshCw size={18} className={isSubscribed ? 'text-rose-500' : 'text-gray-400'} />
                      </div>
                      <div>
                         <p className={`font-bold text-sm ${isSubscribed ? 'text-gray-900' : 'text-gray-500'}`}>정기구독 신청</p>
                         <p className="text-xs text-rose-500 font-medium">추가 5% 할인 + 무료배송</p>
                      </div>
                   </div>
                   <button 
                     onClick={() => setIsSubscribed(!isSubscribed)}
                     className={`w-12 h-7 rounded-full p-1 transition-colors duration-200 relative ${isSubscribed ? 'bg-rose-500' : 'bg-gray-200'}`}
                   >
                      <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${isSubscribed ? 'translate-x-5' : 'translate-x-0'}`} />
                   </button>
                </div>
                
                {isSubscribed && (
                   <div className="mt-4 pt-4 border-t border-rose-100 animate-[fadeIn_0.3s]">
                      <div className="flex justify-between items-center bg-white border border-rose-200 rounded-lg p-3">
                         <span className="text-sm font-bold text-gray-700">배송 주기</span>
                         <div className="flex items-center gap-1 text-sm text-gray-900 font-bold">
                            4주 간격 <ChevronDown size={14} className="text-gray-400" />
                         </div>
                      </div>
                   </div>
                )}
             </div>
          </div>
        </div>

        {/* 4. Pet Compatibility Card (Personalization) */}
        <div className="px-5 py-4">
           <div className="bg-[#F0F8FF] rounded-2xl p-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-full -mr-6 -mt-6 opacity-50 blur-xl" />
              <div className="flex items-start gap-3 relative z-10">
                 <div className="w-10 h-10 bg-white rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Pet" className="w-full h-full object-cover" />
                 </div>
                 <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">
                       <span className="text-blue-600">보리</span>에게 딱 맞아요!
                    </h3>
                    <ul className="text-xs text-gray-600 space-y-1">
                       <li className="flex items-center gap-1.5">
                          <Check size={12} className="text-blue-500" /> 12살 노령견 영양 설계
                       </li>
                       <li className="flex items-center gap-1.5">
                          <Check size={12} className="text-blue-500" /> 관절 건강 도움 성분
                       </li>
                    </ul>
                 </div>
              </div>
              <button className="absolute top-4 right-4 text-[10px] text-blue-400 underline decoration-blue-200">
                 프로필 수정
              </button>
           </div>
        </div>

        {/* 5. Sticky Tabs */}
        <div className="sticky top-0 bg-white z-10 border-b border-gray-100 mt-2">
           <div className="flex">
              {['상품정보', '성분·영양', '후기(120)', 'Q&A'].map(tab => (
                 <button 
                   key={tab}
                   onClick={() => setActiveTab(tab.split('(')[0])}
                   className={`flex-1 py-3.5 text-sm font-bold text-center border-b-2 transition-colors ${
                      activeTab === tab.split('(')[0] 
                      ? 'border-gray-900 text-gray-900' 
                      : 'border-transparent text-gray-400'
                   }`}
                 >
                    {tab}
                 </button>
              ))}
           </div>
        </div>

        {/* 6. Content Area */}
        <div className="min-h-[500px] bg-gray-50">
           {/* Info Image Mock */}
           <img 
             src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80" 
             className="w-full h-auto opacity-90"
             alt="Detail Info"
           />
           
           {/* Review Section Preview */}
           <div className="bg-white mt-4 p-5">
              <div className="flex justify-between items-center mb-4">
                 <h3 className="font-bold text-lg text-gray-900">구매 후기</h3>
                 <button className="text-xs text-gray-400 flex items-center gap-1">
                    최신순 <ChevronDown size={12} />
                 </button>
              </div>
              
              {/* Filter Tag */}
              <div className="flex gap-2 mb-6">
                 <button className="px-3 py-1.5 bg-rose-50 text-rose-600 border border-rose-100 rounded-full text-xs font-bold">
                    나와 비슷한 펫 리뷰만 보기
                 </button>
              </div>

              {/* Review Items */}
              {[1, 2].map((i) => (
                 <div key={i} className="border-b border-gray-100 pb-5 mb-5 last:border-0 last:mb-0 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                       <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-gray-900">집사{i}</span>
                          <span className="text-xs text-gray-400">2023.10.20</span>
                       </div>
                       <div className="flex">
                          {[1,2,3,4,5].map(s => <Star key={s} size={12} className="fill-rose-500 text-rose-500" />)}
                       </div>
                    </div>
                    <div className="flex gap-1.5 mb-3">
                       <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">코숏</span>
                       <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">6kg</span>
                       <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">중성화 완료</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                       기호성 정말 좋네요. 알갱이가 작아서 노령묘도 잘 먹습니다. 배송도 빨랐어요!
                    </p>
                 </div>
              ))}
           </div>
        </div>
      </div>

      {/* 7. Bottom CTA */}
      <div className="absolute bottom-0 w-full bg-white border-t border-gray-100 px-5 py-3 pb-[env(safe-area-inset-bottom)] flex items-center gap-3 z-30 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
         <button className="flex flex-col items-center justify-center min-w-[48px] text-gray-400 hover:text-rose-500 transition-colors">
            <Heart size={24} />
            <span className="text-[10px] mt-0.5">찜</span>
         </button>
         <div className="h-8 w-[1px] bg-gray-200 mx-1" />
         <button 
           onClick={onBuy}
           className={`flex-1 h-12 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.98] ${
              isSubscribed ? 'bg-black shadow-gray-300' : 'bg-rose-500 shadow-rose-200'
           }`}
         >
            {isSubscribed ? '정기구독 시작하기' : '바로 구매하기'}
         </button>
      </div>
    </div>
  );
};

export default ProductDetailScreen;