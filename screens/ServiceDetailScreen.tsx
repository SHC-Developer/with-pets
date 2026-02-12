import React, { useState } from 'react';
import { ChevronLeft, Share2, MapPin, Phone, MessageCircle, Star, Calendar, Clock, AlertCircle, CheckCircle } from 'lucide-react';

interface ServiceDetailScreenProps {
  onBack: () => void;
  onReserve?: () => void;
}

const ServiceDetailScreen: React.FC<ServiceDetailScreenProps> = ({ onBack, onReserve }) => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('24');
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const services = [
    { id: 1, name: '소형견 목욕+위생', price: 35000, time: '60분' },
    { id: 2, name: '소형견 전체미용', price: 70000, time: '120분' },
    { id: 3, name: '중형견 목욕+위생', price: 45000, time: '80분' },
    { id: 4, name: '스파 케어 추가', price: 15000, time: '+20분' },
  ];

  const timeSlots = ['10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* 1. Header (Sticky) */}
      <div className="absolute top-0 w-full h-14 z-20 flex items-center justify-between px-2 bg-gradient-to-b from-black/20 to-transparent">
        <button onClick={onBack} className="p-2 text-white drop-shadow-md">
          <ChevronLeft size={28} />
        </button>
        <button className="p-2 text-white drop-shadow-md">
          <Share2 size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-[90px] scrollbar-hide">
        {/* 2. Hero Image */}
        <div className="relative w-full h-64 bg-gray-200">
           <img 
             src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
             alt="Shop" 
             className="w-full h-full object-cover"
           />
           <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/60 to-transparent" />
           <div className="absolute bottom-5 left-5 text-white">
              <span className="text-xs bg-black/40 px-2 py-1 rounded backdrop-blur-sm mb-2 inline-block">미용/목욕</span>
              <h1 className="text-2xl font-bold leading-tight">몽몽 살롱 동탄점</h1>
              <div className="flex items-center gap-1 text-sm mt-1">
                 <Star size={14} className="fill-yellow-400 text-yellow-400" />
                 <span className="font-bold">4.8</span>
                 <span className="opacity-80">(324개 리뷰)</span>
              </div>
           </div>
        </div>

        {/* 3. Basic Info */}
        <div className="px-5 py-6 border-b border-gray-100">
           <div className="flex items-start gap-3 mb-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                 {/* Map Placeholder */}
                 <div className="w-full h-full bg-blue-50 flex items-center justify-center">
                    <MapPin size={20} className="text-blue-300" />
                 </div>
              </div>
              <div className="flex-1">
                 <p className="text-sm font-medium text-gray-900 leading-snug">경기 화성시 동탄대로 123 (반도 4차) 1층 102호</p>
                 <p className="text-xs text-gray-400 mt-1">동탄역에서 500m • 주차 가능</p>
              </div>
           </div>
           
           <div className="flex gap-2">
              <button className="flex-1 h-10 border border-gray-200 rounded-lg flex items-center justify-center gap-1.5 text-sm font-bold text-gray-700">
                 <Phone size={16} /> 전화하기
              </button>
              <button className="flex-1 h-10 border border-gray-200 rounded-lg flex items-center justify-center gap-1.5 text-sm font-bold text-gray-700">
                 <MessageCircle size={16} /> 문의하기
              </button>
           </div>
        </div>

        {/* 4. Service Selection */}
        <div className="px-5 py-6 border-b border-gray-800/5">
           <h2 className="text-lg font-bold text-gray-900 mb-4">서비스 선택</h2>
           <div className="space-y-3">
              {services.map((svc) => (
                 <div 
                   key={svc.id}
                   onClick={() => setSelectedService(svc.id)}
                   className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                      selectedService === svc.id 
                      ? 'border-rose-500 bg-rose-50 ring-1 ring-rose-500' 
                      : 'border-gray-100 bg-white hover:border-gray-200'
                   }`}
                 >
                    <div>
                       <div className="font-bold text-gray-900">{svc.name}</div>
                       <div className="text-xs text-gray-500 mt-1">{svc.time} 소요</div>
                    </div>
                    <div className="flex items-center gap-3">
                       <span className="font-bold text-gray-900">{svc.price.toLocaleString()}원</span>
                       <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          selectedService === svc.id ? 'bg-rose-500 border-rose-500' : 'border-gray-300'
                       }`}>
                          {selectedService === svc.id && <CheckCircle size={14} className="text-white" />}
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        {/* 5. Reservation (Date & Time) */}
        <div className="px-5 py-6 border-b border-gray-800/5">
           <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-900">날짜/시간 선택</h2>
              <span className="text-sm font-bold text-gray-800">2023.10</span>
           </div>
           
           {/* Date Scroller */}
           <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6 pb-2">
              {['24', '25', '26', '27', '28', '29', '30'].map((date, idx) => {
                 const day = ['화', '수', '목', '금', '토', '일', '월'][idx];
                 const isSelected = selectedDate === date;
                 return (
                    <button 
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`flex-shrink-0 w-14 h-20 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all ${
                         isSelected 
                         ? 'bg-gray-900 text-white shadow-md' 
                         : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                      }`}
                    >
                       <span className="text-xs font-medium">{day}</span>
                       <span className="text-xl font-bold">{date}</span>
                    </button>
                 );
              })}
           </div>

           {/* Time Grid */}
           <div className="grid grid-cols-4 gap-2">
              {timeSlots.map((time) => (
                 <button
                   key={time}
                   onClick={() => setSelectedTime(time)}
                   disabled={time === '13:00'} // Mock disabled
                   className={`py-3 rounded-lg text-sm font-bold transition-all ${
                      time === '13:00'
                      ? 'bg-gray-50 text-gray-300 cursor-not-allowed decoration-slice line-through'
                      : selectedTime === time 
                         ? 'bg-rose-500 text-white shadow-md'
                         : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-400'
                   }`}
                 >
                    {time}
                 </button>
              ))}
           </div>
        </div>

        {/* 6. Precautions */}
        <div className="px-5 py-6 bg-gray-50">
           <div className="flex items-start gap-2 text-orange-600 mb-2">
              <AlertCircle size={18} className="mt-0.5" />
              <h3 className="text-sm font-bold">예약 전 필수 확인</h3>
           </div>
           <ul className="list-disc pl-6 space-y-1 text-xs text-gray-600">
              <li>미용 전 광견병 접종 증명서 확인이 필요합니다.</li>
              <li>입질이나 공격성이 심한 경우 미용이 중단될 수 있습니다.</li>
              <li>노령견(10세 이상)의 경우 동의서 작성이 필요합니다.</li>
           </ul>
        </div>
      </div>

      {/* 7. Bottom CTA */}
      <div className="absolute bottom-0 w-full bg-white border-t border-gray-100 px-5 py-3 pb-[env(safe-area-inset-bottom)] z-30 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
         <button 
           onClick={onReserve}
           disabled={!selectedService || !selectedTime}
           className={`w-full h-12 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.98] ${
              selectedService && selectedTime 
              ? 'bg-rose-500 text-white shadow-rose-200' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
           }`}
         >
            {selectedService && selectedTime 
              ? `${(services.find(s => s.id === selectedService)?.price || 0).toLocaleString()}원 예약하기` 
              : '서비스와 시간을 선택해주세요'}
         </button>
      </div>
    </div>
  );
};

export default ServiceDetailScreen;