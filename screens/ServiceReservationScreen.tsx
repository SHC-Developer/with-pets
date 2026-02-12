import React, { useState } from 'react';
import { ChevronLeft, Calendar, Clock, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

interface ServiceReservationScreenProps {
  onBack: () => void;
  onReserveComplete: () => void;
}

const ServiceReservationScreen: React.FC<ServiceReservationScreenProps> = ({ onBack, onReserveComplete }) => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="px-2 h-14 flex items-center justify-between border-b border-gray-100 sticky top-0 bg-white z-10">
        <button onClick={onBack} className="p-2 text-gray-800">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-bold">예약 확인</h1>
        <div className="w-10" />
      </div>

      <div className="flex-1 overflow-y-auto pb-24 scrollbar-hide bg-gray-50">
        
        {/* 1. Reservation Summary */}
        <div className="bg-white p-5 mb-2">
           <h2 className="text-xl font-bold text-gray-900 mb-4">몽몽 살롱 동탄점</h2>
           <div className="space-y-3">
              <div className="flex items-center gap-3">
                 <Calendar className="text-rose-500" size={20} />
                 <div>
                    <span className="text-sm text-gray-500">날짜</span>
                    <p className="font-bold text-gray-900">2023.10.24 (화)</p>
                 </div>
              </div>
              <div className="flex items-center gap-3">
                 <Clock className="text-rose-500" size={20} />
                 <div>
                    <span className="text-sm text-gray-500">시간</span>
                    <p className="font-bold text-gray-900">14:00</p>
                 </div>
              </div>
              <div className="flex items-center gap-3">
                 <CheckCircle className="text-rose-500" size={20} />
                 <div>
                    <span className="text-sm text-gray-500">선택 서비스</span>
                    <p className="font-bold text-gray-900">소형견 전체미용</p>
                 </div>
              </div>
           </div>
           <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
              <span className="font-bold text-gray-900">예상 금액</span>
              <span className="text-xl font-bold text-rose-500">70,000원</span>
           </div>
        </div>

        {/* 2. User Info */}
        <div className="bg-white p-5 mb-2 border-t-8 border-gray-100">
           <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-900">예약자 정보</h2>
              <button className="text-xs font-bold text-gray-500 border border-gray-200 px-2 py-1 rounded">수정</button>
           </div>
           <div className="space-y-3">
              <div className="flex justify-between">
                 <span className="text-gray-500 text-sm">이름</span>
                 <span className="text-gray-900 font-medium text-sm">김집사</span>
              </div>
              <div className="flex justify-between">
                 <span className="text-gray-500 text-sm">연락처</span>
                 <span className="text-gray-900 font-medium text-sm">010-1234-5678</span>
              </div>
              <div className="flex justify-between">
                 <span className="text-gray-500 text-sm">반려동물</span>
                 <span className="text-gray-900 font-medium text-sm">보리 (강아지)</span>
              </div>
           </div>
        </div>

        {/* 3. Cancellation Policy */}
        <div className="bg-white p-5 mb-2 border-t-8 border-gray-100">
           <h2 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-1">
              <AlertCircle size={16} className="text-orange-500" />
              취소 및 환불 규정
           </h2>
           <div className="bg-gray-50 rounded-xl p-3 text-xs text-gray-600 space-y-1">
              <p>• 예약 1일 전까지: 100% 환불</p>
              <p>• 당일 취소 및 노쇼: 환불 불가</p>
              <p>• 10분 이상 지각 시 예약이 자동 취소될 수 있습니다.</p>
           </div>
        </div>

        {/* 4. Payment Option */}
        <div className="bg-white p-5 border-t-8 border-gray-100">
           <h2 className="text-lg font-bold text-gray-900 mb-4">결제 방식</h2>
           <div className="flex gap-3">
              <button className="flex-1 py-3 border-2 border-rose-500 bg-rose-50 text-rose-600 font-bold rounded-xl text-sm">
                 매장 결제
              </button>
              <button className="flex-1 py-3 border border-gray-200 text-gray-400 font-medium rounded-xl text-sm bg-gray-50 cursor-not-allowed">
                 앱 결제 (준비중)
              </button>
           </div>
           
           <div className="mt-6">
              <div onClick={() => setAgreed(!agreed)} className="flex items-center gap-2 cursor-pointer py-2">
                 <CheckCircle size={20} className={agreed ? "text-rose-500" : "text-gray-300"} />
                 <span className="text-sm text-gray-600">위 내용을 확인하였으며, 예약에 동의합니다.</span>
              </div>
           </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="absolute bottom-0 w-full bg-white border-t border-gray-100 px-5 py-3 pb-[env(safe-area-inset-bottom)] z-20">
         <button 
           onClick={onReserveComplete}
           disabled={!agreed}
           className={`w-full h-12 rounded-xl text-lg font-bold flex items-center justify-center transition-all ${
              agreed
              ? 'bg-rose-500 text-white shadow-lg shadow-rose-200 active:scale-[0.98]'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
           }`}
         >
            예약 확정하기
         </button>
      </div>
    </div>
  );
};

export default ServiceReservationScreen;