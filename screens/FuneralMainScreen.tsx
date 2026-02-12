import React from 'react';
import { ChevronLeft, MapPin, Heart, Package, BookOpen, ChevronRight, PhoneCall } from 'lucide-react';

interface FuneralMainScreenProps {
  onBack: () => void;
  onNavigate: (route: string) => void;
}

const FuneralMainScreen: React.FC<FuneralMainScreenProps> = ({ onBack, onNavigate }) => {
  return (
    <div className="flex flex-col h-full bg-[#FAFAF8] relative">
      {/* 1. Header with subtle transparency */}
      <div className="px-4 h-14 flex items-center justify-between sticky top-0 bg-[#FAFAF8]/90 backdrop-blur-sm z-20">
        <button onClick={onBack} className="p-2 text-stone-600">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-serif font-bold text-stone-800">마지막 배웅</h1>
        <div className="w-10" />
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide pb-10">
        {/* 2. Hero Section - Emotional */}
        <div className="px-6 py-6">
          <h2 className="text-2xl font-serif font-bold text-stone-800 leading-tight mb-2">
            어려운 시간,<br/>
            같이 준비하겠습니다
          </h2>
          <p className="text-sm text-stone-500 leading-relaxed mb-6">
            갑작스러운 이별 앞에서도 당황하지 않도록<br/>
            애들이랑이 곁에서 도와드릴게요.
          </p>
          
          <div className="w-full h-48 rounded-3xl overflow-hidden relative shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1518176258769-f227c798150e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Comfort" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent flex items-end p-5">
              <p className="text-white text-sm font-medium">
                "무지개 다리 너머에서도<br/>행복할 수 있도록"
              </p>
            </div>
          </div>
        </div>

        {/* 3. Main Menu Grid */}
        <div className="px-5 mb-8">
           <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => onNavigate('funeral-service-list')}
                className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-start gap-3 hover:bg-stone-50 transition-colors"
              >
                 <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">
                    <MapPin size={20} />
                 </div>
                 <div className="text-left">
                    <span className="block font-bold text-stone-800">배웅 서비스</span>
                    <span className="text-xs text-stone-500">장례식장 찾기 · 예약</span>
                 </div>
              </button>

              <button 
                onClick={() => onNavigate('memorial-product-detail')} // In real app, this would go to a list
                className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-start gap-3 hover:bg-stone-50 transition-colors"
              >
                 <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">
                    <Package size={20} />
                 </div>
                 <div className="text-left">
                    <span className="block font-bold text-stone-800">추모 제품</span>
                    <span className="text-xs text-stone-500">유골함 · 스톤 · 굿즈</span>
                 </div>
              </button>

              <button className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-start gap-3 hover:bg-stone-50 transition-colors">
                 <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">
                    <Heart size={20} />
                 </div>
                 <div className="text-left">
                    <span className="block font-bold text-stone-800">마음 돌봄</span>
                    <span className="text-xs text-stone-500">펫로스 증후군 상담</span>
                 </div>
              </button>

              <button 
                onClick={() => onNavigate('memorial-record')}
                className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-start gap-3 hover:bg-stone-50 transition-colors"
              >
                 <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">
                    <BookOpen size={20} />
                 </div>
                 <div className="text-left">
                    <span className="block font-bold text-stone-800">메모리얼 기록</span>
                    <span className="text-xs text-stone-500">온라인 추모관</span>
                 </div>
              </button>
           </div>
        </div>

        {/* 4. Guide Section */}
        <div className="px-5">
           <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-stone-800">미리 알아두면 좋아요</h3>
           </div>
           <div className="space-y-3">
              <div className="bg-white p-4 rounded-xl border border-stone-100 flex justify-between items-center">
                 <div>
                    <span className="text-xs text-amber-600 font-bold mb-1 block">장례 절차</span>
                    <p className="text-sm font-medium text-stone-700">갑작스러운 이별, 무엇부터 해야할까요?</p>
                 </div>
                 <ChevronRight size={16} className="text-stone-400" />
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-100 flex justify-between items-center">
                 <div>
                    <span className="text-xs text-amber-600 font-bold mb-1 block">법적 절차</span>
                    <p className="text-sm font-medium text-stone-700">동물등록 말소 신고 방법 안내</p>
                 </div>
                 <ChevronRight size={16} className="text-stone-400" />
              </div>
           </div>
        </div>
      </div>

      {/* Emergency Floating Action */}
      <div className="absolute bottom-5 right-5 z-30">
        <button className="flex items-center gap-2 bg-stone-800 text-white px-5 py-3 rounded-full shadow-lg hover:bg-stone-700 transition-colors">
           <PhoneCall size={18} />
           <span className="font-bold text-sm">긴급 장례 상담</span>
        </button>
      </div>
    </div>
  );
};

export default FuneralMainScreen;