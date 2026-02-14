import React from 'react';
import { Search, ChevronDown, User, ShoppingCart } from 'lucide-react';

interface TopBarProps {
  onProfileClick?: () => void;
  /** 선택된 반려동물 (강아지/고양이) */
  petType?: 'cat' | 'dog' | null;
  /** 배송지 입력 클릭 */
  onDeliveryAddressClick?: () => void;
  /** 배송지 미입력 시 표시 텍스트 */
  deliveryPlaceholder?: string;
}

const TopBar: React.FC<TopBarProps> = ({
  onProfileClick,
  petType = 'dog',
  onDeliveryAddressClick,
  deliveryPlaceholder = '배송지 입력',
}) => {
  const hasProfileImage = true;
  const petLabel = petType === 'cat' ? '고양이' : '강아지';

  return (
    <header className="bg-white sticky top-0 z-40 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
      {/* Row 1: 반려동물 선택 + 배송지 입력 + 액션 아이콘 */}
      <div className="flex items-center justify-between gap-2 px-4 pt-4 pb-3">
        {/* Left: 반려동물 pill + 배송지 입력 pill */}
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <button
            type="button"
            className="flex items-center gap-1 px-3 py-2 rounded-full bg-[#FFF3E0] text-gray-900 text-sm font-semibold border border-[#FFE0B2] hover:bg-[#FFECCC] active:scale-[0.98] transition-all shrink-0"
            aria-label="반려동물 선택"
          >
            <span>{petLabel}</span>
            <ChevronDown size={16} className="text-[#F26B1D]" strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={onDeliveryAddressClick}
            className="flex items-center gap-1 px-3 py-2 rounded-full bg-[#FFF3E0] text-gray-800 text-sm font-medium border border-[#FFE0B2] hover:bg-[#FFECCC] active:scale-[0.98] transition-all min-w-0 flex-1 justify-between max-w-[180px]"
            aria-label="배송지 입력"
          >
            <span className="truncate">{deliveryPlaceholder}</span>
            <ChevronDown size={16} className="text-[#F26B1D] shrink-0" strokeWidth={2.5} />
          </button>
        </div>

        {/* Right: 검색, 장바구니, 프로필 */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            className="p-2.5 text-gray-600 hover:bg-gray-50 rounded-full transition-colors active:scale-95"
            aria-label="검색"
          >
            <Search size={22} className="text-[#374151]" />
          </button>
          <button
            type="button"
            className="p-2.5 text-gray-600 hover:bg-gray-50 rounded-full transition-colors active:scale-95"
            aria-label="장바구니"
          >
            <ShoppingCart size={22} className="text-[#374151]" />
          </button>
          <button
            type="button"
            onClick={onProfileClick}
            className="w-9 h-9 rounded-full overflow-hidden border border-gray-100 shadow-sm active:scale-95 transition-transform flex items-center justify-center"
            aria-label="MY 메뉴로 이동"
          >
            {hasProfileImage ? (
              <img
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#FFF3E0] flex items-center justify-center">
                <User size={18} className="text-[#F26B1D]" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Row 2: 검색 바 */}
      <div className="px-4 pb-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search size={20} className="text-[#F26B1D]" />
          </div>
          <input
            type="text"
            placeholder="사료, 병원, 카페를 검색해 보세요"
            className="w-full bg-gray-50 text-gray-800 text-sm font-medium py-3.5 pl-11 pr-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FFA042]/40 focus:bg-white transition-all placeholder-gray-400"
          />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
