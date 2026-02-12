import React, { useState } from 'react';
import { ChevronLeft, Search, Filter, SlidersHorizontal, ChevronDown, Star, RefreshCw, ShoppingCart, X } from 'lucide-react';

interface ProductListScreenProps {
  onBack: () => void;
  onProductClick?: () => void;
}

const filterChips = ['노령견', '저알러지', '다이어트', '그레인프리', '가수분해', '유기농'];

const products = [
  { id: 1, brand: '오리젠', name: '오리젠 오리지널 캣 1.8kg (전연령용)', desc: '신선한 닭고기와 자연산 생선', price: '32,000', rating: 4.9, reviews: 120, tags: ['전연령', '고단백'], sub: true, img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=200&q=80' },
  { id: 2, brand: '로얄캐닌', name: '로얄캐닌 인도어 어덜트 3kg', desc: '실내 생활 반려묘를 위한 맞춤 영양', price: '45,000', rating: 4.8, reviews: 850, tags: ['실내견', '변냄새감소'], sub: true, img: 'https://images.unsplash.com/photo-1585846416120-3a7354ed7d65?auto=format&fit=crop&w=200&q=80' },
  { id: 3, brand: '나우', name: '나우 프레쉬 그레인프리 스몰브리드', desc: '100% 신선한 칠면조와 연어', price: '28,900', rating: 4.7, reviews: 54, tags: ['그레인프리', '소형견'], sub: false, img: 'https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?auto=format&fit=crop&w=200&q=80' },
  { id: 4, brand: '하림펫푸드', name: '더리얼 크런치 닭고기 어덜트', desc: '사람이 먹을 수 있는 식재료', price: '19,800', rating: 4.6, reviews: 112, tags: ['휴먼그레이드', '국내생산'], sub: true, img: 'https://images.unsplash.com/photo-1589924691195-41432c84c161?auto=format&fit=crop&w=200&q=80' },
  { id: 5, brand: '지위픽', name: '지위픽 에어드라이 소고기 1kg', desc: '자연 그대로의 영양을 담은', price: '85,000', rating: 5.0, reviews: 320, tags: ['에어드라이', '프리미엄'], sub: false, img: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=200&q=80' },
];

const ProductListScreen: React.FC<ProductListScreenProps> = ({ onBack, onProductClick }) => {
  const [activeTab, setActiveTab] = useState('전체');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="flex flex-col h-full bg-white pb-20 relative">
      {/* Header */}
      <div className="px-2 h-14 flex items-center justify-between border-b border-gray-100 bg-white z-20">
        <div className="flex items-center">
          <button onClick={onBack} className="p-2 text-gray-800 hover:bg-gray-50 rounded-full mr-1">
            <ChevronLeft size={24} />
          </button>
          <div className="flex flex-col justify-center">
            <span className="text-[10px] text-gray-500 font-medium">펫푸드 &gt; 주식 사료</span>
            <span className="text-base font-bold text-gray-900 -mt-0.5">건식 사료</span>
          </div>
        </div>
        <div className="flex gap-1">
          <button className="p-2 text-gray-800 hover:bg-gray-50 rounded-full">
            <Search size={22} />
          </button>
          <button className="p-2 text-gray-800 hover:bg-gray-50 rounded-full">
            <ShoppingCart size={22} />
          </button>
        </div>
      </div>

      {/* Sticky Filter Area */}
      <div className="sticky top-0 bg-white z-10 shadow-sm">
        {/* Tabs - Orange Accent for Active */}
        <div className="flex px-5 gap-6 border-b border-gray-100">
          {['전체', '건식', '습식', '기능성·처방'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 text-sm font-bold border-b-2 transition-colors ${
                activeTab === tab 
                ? 'border-[#F26B1D] text-[#F26B1D]' // Primary Orange for Active
                : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 px-5 py-3">
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 flex-shrink-0 hover:border-[#FFA042] hover:text-[#F26B1D] transition-colors"
          >
            <SlidersHorizontal size={16} />
          </button>
          
          <div className="h-6 w-[1px] bg-gray-200 mx-1 flex-shrink-0" />

          {/* Quick Sort Dropdown */}
          <button className="flex items-center gap-1 text-xs font-bold text-gray-700 bg-white border border-gray-200 px-3 py-2 rounded-lg flex-shrink-0 hover:border-[#FFA042] transition-colors">
            추천순 <ChevronDown size={12} />
          </button>

          {/* Horizontal Chips - White BG + Orange Hover Border */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {filterChips.map((chip) => (
              <button key={chip} className="flex-shrink-0 px-3 py-2 bg-white border border-gray-200 rounded-2xl text-xs text-gray-600 font-medium hover:border-[#F26B1D] hover:text-[#F26B1D] hover:bg-[#FFF3E0]/30 transition-colors">
                {chip}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
        {products.map((product) => (
          <div 
            key={product.id} 
            onClick={onProductClick}
            className="flex gap-4 group cursor-pointer p-2 -mx-2 rounded-2xl hover:bg-gray-50 transition-colors"
          >
            {/* Image */}
            <div className="relative w-28 h-28 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100 group-hover:border-[#FFA042]/50 transition-colors">
              <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
              {product.sub && (
                <div className="absolute top-0 left-0 bg-[#F26B1D] px-2 py-1 rounded-br-lg flex items-center gap-1">
                  <RefreshCw size={10} className="text-white" />
                  <span className="text-[9px] text-white font-bold">정기배송</span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 flex flex-col justify-between py-0.5">
              <div>
                <span className="text-xs text-gray-400 font-bold mb-0.5 block">{product.brand}</span>
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2 leading-snug mb-1 group-hover:text-[#F26B1D] transition-colors">{product.name}</h3>
                
                <div className="flex flex-wrap gap-1 mb-2">
                  {product.tags.map(tag => (
                    <span key={tag} className="text-[10px] text-gray-500 border border-gray-100 px-1.5 py-0.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-end justify-between">
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                  <span className="text-xs font-medium text-gray-500">원</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  {/* Star Icon: Dark Orange #FF8C00 */}
                  <Star size={10} className="fill-[#FF8C00] text-[#FF8C00]" />
                  <span className="font-bold text-gray-600">{product.rating}</span>
                  <span>({product.reviews})</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Bottom Sheet (Mock) */}
      {isFilterOpen && (
        <div className="absolute inset-0 z-50">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsFilterOpen(false)} />
          <div className="absolute bottom-0 w-full bg-white rounded-t-3xl p-6 animate-[slideUp_0.3s_ease-out] max-h-[85%] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-gray-900">상세 필터</h2>
              <button onClick={() => setIsFilterOpen(false)}>
                <X size={24} className="text-gray-400" />
              </button>
            </div>
            
            <div className="space-y-8">
               <section>
                 <h3 className="text-sm font-bold text-gray-800 mb-3">기능성 (중복선택)</h3>
                 <div className="flex flex-wrap gap-2">
                   {['관절/뼈', '피부/털', '다이어트', '위장', '신장', '면역력'].map(item => (
                     <button key={item} className="px-3 py-2 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-[#FFF3E0] hover:border-[#F26B1D] hover:text-[#F26B1D] transition-colors">
                       {item}
                     </button>
                   ))}
                 </div>
               </section>

               <section>
                 <h3 className="text-sm font-bold text-gray-800 mb-3">브랜드</h3>
                 <div className="space-y-3">
                   {['오리젠', '로얄캐닌', '나우', '아카나', '하림펫푸드'].map(brand => (
                     <label key={brand} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer group">
                       <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#F26B1D] focus:ring-[#F26B1D]" />
                       <span className="group-hover:text-[#F26B1D] transition-colors">{brand}</span>
                     </label>
                   ))}
                 </div>
               </section>
            </div>

            <div className="mt-8 flex gap-3 sticky bottom-0 bg-white pt-4">
              <button className="flex-1 py-4 bg-gray-100 rounded-xl font-bold text-gray-600 hover:bg-gray-200 transition-colors">초기화</button>
              <button 
                onClick={() => setIsFilterOpen(false)}
                className="flex-[2] py-4 bg-[#F26B1D] rounded-xl font-bold text-white shadow-lg shadow-orange-200 hover:bg-[#FF8C00] transition-colors"
              >
                32개 상품 보기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductListScreen;