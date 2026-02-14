import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface AdCardProps {
  tag: string;
  title: string;
  description: string;
  imageUrl: string;
  cta?: string;
}

const adCards: AdCardProps[] = [
  {
    tag: '쿠폰 할인',
    title: '더헬씨 & 츄래프트',
    description: '건강해서 좋고, 잘 먹어서 더 좋다!',
    imageUrl: 'https://images.unsplash.com/photo-1589924691195-41432c84c161?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    cta: '지금 할인받기',
  },
  {
    tag: '인기 서비스',
    title: '우리 동네 인기 미용실 TOP 5',
    description: '스트레스 없는 가위컷·위생 관리',
    imageUrl: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    cta: '예약하기',
  },
  {
    tag: '펫푸드',
    title: '노령견 맞춤 사료 추천',
    description: '소화는 편하게, 영양은 가득',
    imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    cta: '자세히 보기',
  },
  {
    tag: '라이프',
    title: '반려견과 함께하는 제주도',
    description: '비행기 탑승부터 숙소까지 완벽 가이드',
    imageUrl: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    cta: '여행 준비하기',
  },
  {
    tag: '이벤트',
    title: '신규 가입 시 첫 구매 20% 할인',
    description: '전 상품 적용, 오늘만 특가',
    imageUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    cta: '쿠폰 받기',
  },
];

const AUTO_INTERVAL_MS = 3000;

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = adCards.length;

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const timer = setInterval(goNext, AUTO_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <div className="w-full px-4 pb-4">
      <div className="relative rounded-2xl overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
        {/* 단일 슬라이드 영역 */}
        <div className="relative aspect-[16/10] min-h-[180px] w-full overflow-hidden">
          {adCards.map((card, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-500 ease-out"
              style={{
                opacity: index === currentIndex ? 1 : 0,
                pointerEvents: index === currentIndex ? 'auto' : 'none',
              }}
            >
              <img
                src={card.imageUrl}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-[#F26B1D] text-white shadow-sm">
                  {card.tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-bold leading-tight mb-0.5">{card.title}</h3>
                <p className="text-sm text-white/90 font-medium">{card.description}</p>
                {card.cta && (
                  <span className="inline-block mt-2 text-xs font-bold text-[#FFA042]">
                    {card.cta} →
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 좌우 화살표 */}
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/55 flex items-center justify-center text-white transition-colors z-10"
          aria-label="이전"
        >
          <ChevronLeft size={20} strokeWidth={2.5} />
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/55 flex items-center justify-center text-white transition-colors z-10"
          aria-label="다음"
        >
          <ChevronRight size={20} strokeWidth={2.5} />
        </button>

        {/* 인디케이터 */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-white text-[11px] font-medium">
          <span>{currentIndex + 1}</span>
          <span>/</span>
          <span>{total}</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
