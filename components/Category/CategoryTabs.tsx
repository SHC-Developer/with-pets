import React from 'react';
import type { MainCategory } from '../../data/categoryData';

interface CategoryTabsProps {
  categories: MainCategory[];
  activeId: string;
  onTabChange: (id: string) => void;
}

/**
 * 상단 대분류 탭
 * - 모바일: 가로 스크롤
 * - 선택: Primary 배경 + 흰 텍스트
 * - 비선택: 흰 배경 + 테두리/텍스트 컬러
 */
const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  activeId,
  onTabChange,
}) => {
  return (
    <div className="flex overflow-x-auto scrollbar-hide gap-2 px-1 pb-1 -mx-1">
      {categories.map((cat) => {
        const isActive = activeId === cat.id;

        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onTabChange(cat.id)}
            className={`
              flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-bold
              transition-all duration-200 whitespace-nowrap
              ${
                isActive
                  ? 'bg-[#F26B1D] text-white shadow-md'
                  : 'bg-white text-[#666666] border border-gray-200 hover:border-[#FFA042] hover:text-[#F26B1D]'
              }
            `}
          >
            {cat.tabLabel}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryTabs;
