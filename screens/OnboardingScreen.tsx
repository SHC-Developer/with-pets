import React, { useState } from 'react';

interface OnboardingScreenProps {
  onFinish: () => void;
}

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80',
    title: '반려가족의 모든 일상,\n애들이랑 하나로 끝',
    desc: '펫푸드부터 병원 예약, 장례까지\n필요한 모든 서비스를 한곳에서 만나보세요.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    title: '우리 아이에게 딱 맞는\nAI 맞춤 추천',
    desc: '나이, 견종, 건강 상태를 분석해\n가장 알맞은 사료와 용품을 추천해 드려요.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599149026363-2395d8276db4?auto=format&fit=crop&w=800&q=80',
    title: '평생을 함께하는\n생애주기 파트너',
    desc: '아기 때부터 노년기까지,\n변화하는 시기에 맞춰 든든하게 챙겨드릴게요.'
  }
];

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onFinish }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(curr => curr + 1);
    } else {
      onFinish();
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Top Header */}
      <div className="flex justify-between items-center px-5 py-4 h-14">
        <span className="font-bold text-rose-500 text-lg tracking-tight">애들이랑</span>
        <button onClick={onFinish} className="text-sm text-gray-400 font-medium">건너뛰기</button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Image Area */}
        <div className="relative w-full h-[55%] bg-gray-50 overflow-hidden">
           <img 
            key={currentSlide}
            src={slides[currentSlide].image} 
            alt="Onboarding" 
            className="w-full h-full object-cover animate-[fadeIn_0.5s_ease-out]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-100" />
        </div>

        {/* Text Area */}
        <div className="flex-1 px-6 pt-4 flex flex-col justify-start">
          <div className="space-y-3 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 whitespace-pre-line leading-tight">
              {slides[currentSlide].title}
            </h2>
            <p className="text-gray-500 text-sm whitespace-pre-line leading-relaxed">
              {slides[currentSlide].desc}
            </p>
          </div>

          {/* Indicators */}
          <div className="flex gap-2 mb-auto">
            {slides.map((_, idx) => (
              <div 
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'w-6 bg-rose-500' : 'w-2 bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="px-5 pb-8 space-y-3">
        <button 
          onClick={handleNext}
          className="w-full h-14 bg-rose-500 text-white rounded-2xl text-lg font-bold shadow-lg shadow-rose-200 active:scale-[0.98] transition-transform"
        >
          {currentSlide === slides.length - 1 ? '시작하기' : '다음'}
        </button>
        <div className="text-center">
          <button onClick={onFinish} className="text-sm text-gray-400 underline decoration-gray-300 underline-offset-4">
            이미 계정이 있나요? 로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen;