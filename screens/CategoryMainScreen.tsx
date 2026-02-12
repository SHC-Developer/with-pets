import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { categoryData } from '../data/categoryData';
import { CategoryTabs, CategorySection } from '../components/Category';
import type { CategoryItem } from '../data/categoryData';

interface CategoryMainScreenProps {
  onCategorySelect: (categoryId: string, item?: CategoryItem) => void;
}

/**
 * 카테고리 아이콘 그리드 화면
 * - 상단: 6개 대분류 탭
 * - 본문: 섹션별 아이콘 카드 그리드
 */
const CategoryMainScreen: React.FC<CategoryMainScreenProps> = ({ onCategorySelect }) => {
  const [activeTabId, setActiveTabId] = useState(categoryData[0].id);

  const activeCategory = categoryData.find((c) => c.id === activeTabId) ?? categoryData[0];

  const handleItemClick = (item: CategoryItem) => {
    onCategorySelect(activeTabId, item);
  };

  return (
    <div className="flex flex-col h-full bg-white pb-20">
      {/* Header */}
      <div className="px-5 h-14 flex items-center justify-between sticky top-0 bg-white z-20 border-b border-gray-50">
        <h1 className="text-xl font-bold text-[#212121]">카테고리</h1>
        <button
          type="button"
          className="p-2 text-[#666666] hover:text-[#F26B1D] hover:bg-[#FFF3E0]/50 rounded-full transition-colors"
          aria-label="검색"
        >
          <Search size={24} />
        </button>
      </div>

      {/* 탭 */}
      <div className="sticky top-14 z-10 bg-white pt-4 pb-3 px-4 border-b border-gray-50">
        <CategoryTabs
          categories={categoryData}
          activeId={activeTabId}
          onTabChange={setActiveTabId}
        />
      </div>

      {/* 섹션 & 아이콘 그리드 */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="p-4 md:p-6">
          {activeCategory.sections.map((section) => (
            <CategorySection
              key={section.id}
              section={section}
              onItemClick={handleItemClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryMainScreen;
