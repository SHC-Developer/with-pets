import React from 'react';
import { Star } from 'lucide-react';

const products = [
  { id: 1, title: "오리젠 오리지널 캣 1.8kg (전연령용)", price: "32,000", rating: 4.9, reviewCount: 120, category: "푸드", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { id: 2, title: "강아지 노즈워크 담요 대형 스트레스 해소", price: "18,900", rating: 4.7, reviewCount: 85, category: "용품", img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { id: 3, title: "스마트 자동 급수기 퓨어 화이트", price: "45,000", rating: 4.8, reviewCount: 230, category: "용품", img: "https://images.unsplash.com/photo-1585846416120-3a7354ed7d65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { id: 4, title: "동탄 24시 동물병원 건강검진권", price: "55,000", rating: 5.0, reviewCount: 42, category: "병원", img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { id: 5, title: "튼튼한 3단 원목 캣타워 스크래처", price: "89,000", rating: 4.9, reviewCount: 56, category: "용품", img: "https://images.unsplash.com/photo-1545249390-6bdfa2a27c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
];

// Duplicate for infinite scroll feel
const infiniteProducts = [...products, ...products, ...products, ...products];

const PopularSection: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-end px-5 mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">이번 주 인기 <span className="text-[#F26B1D]">HOT</span></h2>
          <p className="text-xs text-gray-400 mt-1 font-medium">집사님들이 가장 많이 찾았어요</p>
        </div>
        <button className="text-xs font-medium text-gray-400 hover:text-gray-600 transition-colors">더보기</button>
      </div>

      <div className="flex overflow-x-auto gap-4 px-5 pb-4 scrollbar-hide">
        {infiniteProducts.map((item, index) => (
          <div key={`${item.id}-${index}`} className="min-w-[150px] max-w-[150px] flex flex-col group cursor-pointer">
            <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-3 shadow-[0_4px_10px_rgba(0,0,0,0.05)] bg-gray-100">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute top-0 left-0 bg-black/40 backdrop-blur-[2px] px-2 py-1 rounded-br-lg text-[10px] text-white font-bold">
                {item.category}
              </div>
            </div>
            
            <h3 className="text-[15px] font-medium text-gray-800 line-clamp-2 leading-snug min-h-[42px]">
              {item.title}
            </h3>
            
            <div className="mt-1.5 flex items-center gap-1">
              <Star size={12} className="text-[#FF8C00] fill-[#FF8C00]" />
              <span className="text-xs font-bold text-gray-900">{item.rating}</span>
              <span className="text-xs text-gray-400">({item.reviewCount})</span>
            </div>
            
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-lg font-bold text-gray-900">{item.price}</span>
              <span className="text-xs font-medium text-gray-800">원</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSection;