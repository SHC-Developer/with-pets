import React from 'react';

interface HeroCardProps {
  tag: string;
  title: string;
  description: string;
  imageUrl: string;
  tagColor: string;
}

const cards: HeroCardProps[] = [
  {
    tag: '펫푸드',
    title: '노령견 맞춤\n사료 추천 3가지',
    description: '소화는 편하게, 영양은 가득',
    imageUrl: 'https://images.unsplash.com/photo-1589924691195-41432c84c161?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tagColor: 'bg-orange-100 text-orange-600'
  },
  {
    tag: '서비스',
    title: '우리 동네\n인기 미용실 TOP 5',
    description: '스트레스 없는 가위컷 전문',
    imageUrl: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tagColor: 'bg-blue-100 text-blue-600'
  },
  {
    tag: '라이프',
    title: '반려견과 함께하는\n제주도 여행 코스',
    description: '비행기 탑승부터 숙소까지',
    imageUrl: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tagColor: 'bg-green-100 text-green-600'
  },
  {
    tag: '엔터',
    title: '집에서 즐기는\n펫 피트니스 영상',
    description: '하루 10분, 건강한 습관',
    imageUrl: 'https://images.unsplash.com/photo-1571152599228-56455255475a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tagColor: 'bg-purple-100 text-purple-600'
  },
  {
    tag: '장례',
    title: '이별을 준비하는\n아름다운 방법',
    description: '미리 알아보는 장례 절차',
    imageUrl: 'https://images.unsplash.com/photo-1518176258769-f227c798150e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tagColor: 'bg-gray-100 text-gray-600'
  }
];

// Duplicate cards to simulate infinite scroll feel
const infiniteCards = [...cards, ...cards, ...cards, ...cards];

const HeroSection: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center px-5 mb-4">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">오늘의 추천</h2>
        <button className="text-xs font-medium text-gray-400 hover:text-gray-600 transition-colors">전체보기</button>
      </div>
      
      <div className="flex overflow-x-auto gap-4 px-5 pb-4 scrollbar-hide snap-x snap-mandatory">
        {infiniteCards.map((card, index) => (
          <div 
            key={index} 
            className="min-w-[85%] bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden relative snap-center border border-gray-100 group active:scale-[0.98] transition-transform duration-200"
          >
            {/* Image Area */}
            <div className="h-44 w-full relative overflow-hidden">
              <img src={card.imageUrl} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className={`text-[11px] font-bold px-2.5 py-1.5 rounded-lg shadow-sm backdrop-blur-md bg-white/90 ${card.tagColor.replace('bg-', 'text-').replace('text-', 'text-')}`}>
                  {card.tag}
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-5 relative bg-white">
              <h3 className="text-lg font-bold text-gray-900 leading-snug whitespace-pre-line mb-1.5">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 font-medium">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;