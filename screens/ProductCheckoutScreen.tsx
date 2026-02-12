import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, CreditCard, ChevronDown, MapPin } from 'lucide-react';

interface ProductCheckoutScreenProps {
  onBack: () => void;
  onPaymentComplete: () => void;
}

const ProductCheckoutScreen: React.FC<ProductCheckoutScreenProps> = ({ onBack, onPaymentComplete }) => {
  const [payMethod, setPayMethod] = useState<'card' | 'kakao' | 'naver'>('card');
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="px-2 h-14 flex items-center justify-between border-b border-gray-100 sticky top-0 bg-white z-10">
        <button onClick={onBack} className="p-2 text-gray-800">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-bold">주문/결제</h1>
        <div className="w-10" />
      </div>

      <div className="flex-1 overflow-y-auto pb-24 scrollbar-hide bg-gray-50">
        
        {/* 1. Address */}
        <div className="bg-white p-5 mb-2">
           <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-bold text-gray-900">배송지</h2>
              <button className="text-xs font-bold text-gray-500 border border-gray-200 px-2 py-1 rounded">변경</button>
           </div>
           <div className="flex items-start gap-2">
              <MapPin size={18} className="text-gray-900 mt-0.5" />
              <div>
                 <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">김집사</span>
                    <span className="text-xs bg-gray-100 text-gray-500 px-1 py-0.5 rounded">기본배송지</span>
                 </div>
                 <p className="text-sm text-gray-600 leading-snug">경기 화성시 동탄대로 123 (반도유보라 4차) 101동 1202호</p>
                 <p className="text-sm text-gray-400 mt-1">010-1234-5678</p>
              </div>
           </div>
           
           <div className="mt-4 relative">
              <select className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-rose-300">
                 <option>문 앞에 놓아주세요</option>
                 <option>배송 전 연락주세요</option>
                 <option>경비실에 맡겨주세요</option>
                 <option>직접 입력</option>
              </select>
              <ChevronDown size={16} className="absolute right-4 top-3.5 text-gray-400 pointer-events-none" />
           </div>
        </div>

        {/* 2. Order Items */}
        <div className="bg-white p-5 mb-2 border-t-8 border-gray-100">
           <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-bold text-gray-900">주문 상품</h2>
              <button className="text-gray-400">
                 <ChevronDown size={20} />
              </button>
           </div>
           <div className="border border-gray-100 rounded-xl p-3 flex gap-3">
              <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="w-14 h-14 rounded-lg object-cover bg-gray-100" />
              <div>
                 <p className="text-sm font-medium text-gray-900 line-clamp-1">오리젠 오리지널 캣 1.8kg 외 1건</p>
                 <p className="text-xs text-gray-500 mt-1">무료배송 | 10/24(목) 도착 예정</p>
              </div>
           </div>
        </div>

        {/* 3. Payment Method */}
        <div className="bg-white p-5 mb-2 border-t-8 border-gray-100">
           <h2 className="text-lg font-bold text-gray-900 mb-4">결제 수단</h2>
           <div className="space-y-3">
              {/* Card */}
              <label 
                 onClick={() => setPayMethod('card')}
                 className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-all ${
                    payMethod === 'card' ? 'border-rose-500 bg-rose-50' : 'border-gray-200'
                 }`}
              >
                 <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${payMethod === 'card' ? 'bg-rose-500 border-rose-500' : 'border-gray-300'}`}>
                    <div className="w-2 h-2 bg-white rounded-full" />
                 </div>
                 <div className="flex items-center gap-2">
                    <CreditCard size={20} className="text-gray-600" />
                    <span className="font-bold text-gray-900">신용/체크카드</span>
                 </div>
              </label>

              {/* Simple Pay */}
              <div className="grid grid-cols-2 gap-3">
                 <label 
                   onClick={() => setPayMethod('kakao')}
                   className={`flex items-center justify-center gap-2 p-3 border rounded-xl cursor-pointer ${payMethod === 'kakao' ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200'}`}
                 >
                    <span className="text-sm font-bold">카카오페이</span>
                 </label>
                 <label 
                   onClick={() => setPayMethod('naver')}
                   className={`flex items-center justify-center gap-2 p-3 border rounded-xl cursor-pointer ${payMethod === 'naver' ? 'border-green-400 bg-green-50' : 'border-gray-200'}`}
                 >
                    <span className="text-sm font-bold">네이버페이</span>
                 </label>
              </div>
           </div>
        </div>

        {/* 4. Amount & Terms */}
        <div className="bg-white p-5 border-t-8 border-gray-100">
           <h2 className="text-lg font-bold text-gray-900 mb-4">결제 상세</h2>
           <div className="space-y-2 mb-6 text-sm">
              <div className="flex justify-between">
                 <span className="text-gray-500">주문금액</span>
                 <span className="text-gray-900">36,500원</span>
              </div>
              <div className="flex justify-between">
                 <span className="text-gray-500">배송비</span>
                 <span className="text-gray-900">0원</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-gray-100">
                 <span className="font-bold text-gray-900">최종 결제금액</span>
                 <span className="text-xl font-bold text-rose-500">36,500원</span>
              </div>
           </div>

           <div onClick={() => setAgreed(!agreed)} className="flex items-center gap-2 cursor-pointer py-2">
              <CheckCircle size={20} className={agreed ? "text-rose-500" : "text-gray-300"} />
              <span className="text-sm text-gray-600">위 주문 내용을 확인하였으며, 결제에 동의합니다.</span>
           </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="absolute bottom-0 w-full bg-white border-t border-gray-100 px-5 py-3 pb-[env(safe-area-inset-bottom)] z-20">
         <button 
           onClick={onPaymentComplete}
           disabled={!agreed}
           className={`w-full h-12 rounded-xl text-lg font-bold flex items-center justify-center transition-all ${
              agreed
              ? 'bg-rose-500 text-white shadow-lg shadow-rose-200 active:scale-[0.98]'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
           }`}
         >
            36,500원 결제하기
         </button>
      </div>
    </div>
  );
};

export default ProductCheckoutScreen;