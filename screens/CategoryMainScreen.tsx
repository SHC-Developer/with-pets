import React from 'react';
import { Search, Bone, ShoppingBag, Scissors, Sun, Tv, HeartHandshake, Clock } from 'lucide-react';

interface CategoryMainScreenProps {
  onCategorySelect: (id: string) => void;
}

const categories = [
  { id: 'pet-food', label: '펫푸드', desc: '사료·간식·영양제', icon: Bone, color: 'text-orange-500', bg: 'bg-orange-50' },
  { id: 'pet-item', label: '펫용품', desc: '장난감·의류·리빙', icon: ShoppingBag, color: 'text-yellow-500', bg: 'bg-yellow-50' },
  { id: 'pet-service', label: '펫 서비스', desc: '미용·병원·호텔', icon: Scissors, color: 'text-blue-500', bg: 'bg-blue-50' },
  { id: 'lifestyle', label: '라이프스타일', desc: '여행·스냅·동반', icon: Sun, color: 'text-green-500', bg: 'bg-green-50' },
  { id: 'enter', label: '엔터', desc: '펫TV·음악', icon: Tv, color: 'text-purple-500', bg: 'bg-purple-50' },
  { id: 'funeral', label: '장례', desc: '마지막 동행', icon: HeartHandshake, color: 'text-gray-500', bg: 'bg-gray-100' },
];

const recentItems = [
  { id: 1, title: '오리젠 캣 앤 키튼', img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=150&q=80' },
  { id: 2, title: '강아지 마약 방석', img: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=150&q=80' },
  { id: 3, title: '로얄캐닌 인도어', img: 'https://images.unsplash.com/photo-1585846416120-3a7354ed7d65?auto=format&fit=crop&w=150&q=80' },
];

const CategoryMainScreen: React.FC<CategoryMainScreenProps> = ({ onCategorySelect }) => {
  return (
    <div className="flex flex-col h-full bg-white pb-20">
      {/* Header */}
      <div className="px-5 h-14 flex items-center justify-between sticky top-0 bg-white z-10">
        <h1 className="text-xl font-bold text-gray-900">카테고리</h1>
        <button className="p-2 text-gray-800 hover:bg-gray-100 rounded-full">
          <Search size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {/* Title */}
        <div className="px-5 mt-2 mb-6">
          <p className="text-2xl font-bold text-gray-900 leading-tight">
            무엇을<br />찾고 계신가요?
          </p>
        </div>

        {/* Category Grid */}
        <div className="px-5 grid grid-cols-2 gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => onCategorySelect(cat.id)}
                className="flex flex-col p-4 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 active:scale-95 transition-all text-left group"
              >
                <div className={`w-10 h-10 ${cat.bg} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className={cat.color} size={20} />
                </div>
                <span className="text-base font-bold text-gray-900">{cat.label}</span>
                <span className="text-xs text-gray-500 mt-1">{cat.desc}</span>
              </button>
            );
          })}
        </div>

        {/* Recently Viewed */}
        <div className="border-t border-gray-100 pt-8 pb-8">
          <div className="px-5 flex items-center gap-1 mb-4 text-gray-900">
            <Clock size={16} className="text-gray-400" />
            <h3 className="text-sm font-bold">최근 본 상품</h3>
          </div>
          
          <div className="flex overflow-x-auto px-5 gap-3 scrollbar-hide">
            {recentItems.map((item) => (
              <div key={item.id} className="w-24 flex-shrink-0">
                <div className="w-24 h-24 rounded-xl bg-gray-100 mb-2 overflow-hidden border border-gray-100">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <p className="text-xs text-gray-600 truncate px-1">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryMainScreen;