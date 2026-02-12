import React from 'react';
import { getIconEmoji } from './iconMap';
import type { CategoryItem } from '../../data/categoryData';

/**
 * 아이콘 카드 컴포넌트
 * - 상단: 원형 배경 + 이모지/아이콘
 * - 하단: 라벨 텍스트
 */

interface CategoryIconCardProps {
  item: CategoryItem;
  onClick?: (item: CategoryItem) => void;
  className?: string;
}

const CategoryIconCard: React.FC<CategoryIconCardProps> = ({ item, onClick, className = '' }) => {
  const emoji = getIconEmoji(item.iconKey);

  return (
    <button
      type="button"
      onClick={() => onClick?.(item)}
      className={`
        flex flex-col items-center justify-start p-4
        bg-white rounded-2xl
        border border-gray-100
        hover:border-[#FFA042] hover:shadow-[0_4px_12px_rgba(242,107,29,0.08)]
        active:scale-[0.97]
        transition-all duration-200
        min-w-0 text-center group
        ${className}
      `}
    >
      {/* 아이콘 영역 - 원형 배경 + 이모지 */}
      <div className="w-14 h-14 min-w-[3.5rem] rounded-full bg-[#FFF3E0] flex items-center justify-center mb-2 group-hover:bg-[#FFE4CC] transition-colors">
        <span className="text-2xl leading-none">{emoji}</span>
      </div>

      {/* 라벨 텍스트 */}
      <span className="text-[13px] font-semibold text-[#212121] leading-tight line-clamp-2">
        {item.label}
      </span>
    </button>
  );
};

export default CategoryIconCard;
