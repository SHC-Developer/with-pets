import React, { useEffect, useState } from 'react';
import { Check, Home, ChevronRight, Calendar, Package } from 'lucide-react';

interface OrderCompleteScreenProps {
  type: 'product' | 'service';
  onHome: () => void;
  onDetail: () => void;
}

const OrderCompleteScreen: React.FC<OrderCompleteScreenProps> = ({ type, onHome, onDetail }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  const isService = type === 'service';

  return (
    <div className="flex flex-col h-full bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[40%] bg-gray-50 rounded-b-[40px] z-0" />
      
      <div className="flex-1 flex flex-col items-center pt-24 z-10 px-6">
        {/* Animated Icon */}
        <div className={`w-24 h-24 rounded-full bg-rose-500 flex items-center justify-center shadow-lg shadow-rose-200 mb-8 transition-all duration-700 ${animate ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
           <Check size={48} className="text-white" strokeWidth={3} />
        </div>

        {/* Text */}
        <h1 className={`text-2xl font-bold text-gray-900 mb-2 text-center transition-all duration-700 delay-200 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
           {isService ? '예약이 확정되었습니다' : '주문이 완료되었습니다'}
        </h1>
        <p className={`text-gray-500 text-center mb-10 transition-all duration-700 delay-300 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
           {isService 
             ? '예약 시간에 맞춰 방문해주세요.' 
             : '빠르고 안전하게 배송해 드릴게요.'}
        </p>

        {/* Info Card */}
        <div className={`w-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-6 transition-all duration-700 delay-500 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
           <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-50">
              <span className="text-gray-500 text-sm">
                 {isService ? '예약번호' : '주문번호'}
              </span>
              <span className="font-bold text-gray-900 font-mono">231024-12345</span>
           </div>
           
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 flex-shrink-0">
                 {isService ? <Calendar size={24} /> : <Package size={24} />}
              </div>
              <div>
                 <p className="text-xs text-gray-500 mb-1">
                    {isService ? '방문 예정일' : '도착 예정일'}
                 </p>
                 <p className="font-bold text-gray-900 text-lg">
                    {isService ? '10월 24일 (화) 14:00' : '10월 26일 (목)'}
                 </p>
              </div>
           </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-5 pb-[env(safe-area-inset-bottom)] bg-white space-y-3">
         <button 
           onClick={onDetail}
           className="w-full h-14 bg-gray-100 rounded-2xl text-gray-700 font-bold flex items-center justify-center gap-1 hover:bg-gray-200 transition-colors"
         >
            {isService ? '예약 상세 보기' : '주문 상세 보기'} <ChevronRight size={18} />
         </button>
         <button 
           onClick={onHome}
           className="w-full h-14 bg-rose-500 rounded-2xl text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-rose-200 active:scale-[0.98] transition-transform"
         >
            <Home size={20} /> 홈으로 돌아가기
         </button>
      </div>
    </div>
  );
};

export default OrderCompleteScreen;