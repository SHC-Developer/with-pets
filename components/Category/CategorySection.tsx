import React from 'react';
import CategoryIconCard from './CategoryIconCard';
import type { CategorySection as SectionType, CategoryItem } from '../../data/categoryData';

interface CategorySectionProps {
  section: SectionType;
  onItemClick?: (item: CategoryItem) => void;
}

/**
 * 섹션 컴포넌트
 * - h3 제목 + 얇은 구분선
 * - 아이콘 카드 그리드 (반응형)
 */
const CategorySection: React.FC<CategorySectionProps> = ({ section, onItemClick }) => {
  return (
    <section className="mb-8 last:mb-0">
      {/* 섹션 제목 */}
      <h3 className="text-sm font-bold text-[#666666] mb-3 pb-2 border-b border-gray-100">
        {section.title}
      </h3>

      {/* 아이콘 카드 그리드 */}
      <div
        className="grid gap-3"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
        }}
      >
        {section.items.map((item) => (
          <CategoryIconCard
            key={item.id}
            item={item}
            onClick={onItemClick}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
