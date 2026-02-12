import React from 'react';

/**
 * 애들이랑 - Tag/Chip Component
 * 
 * Brand Colors:
 * - Primary: #F26B1D
 * - Secondary: #FF8C00 (할인/세일)
 * - Accent: #FFA042
 */

type TagVariant = 'primary' | 'secondary' | 'accent' | 'outline' | 'sale' | 'muted';
type TagSize = 'sm' | 'md' | 'lg';

interface TagProps {
  variant?: TagVariant;
  size?: TagSize;
  icon?: React.ReactNode;
  removable?: boolean;
  onRemove?: () => void;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<TagVariant, string> = {
  primary: 'bg-[#F26B1D] text-white',
  secondary: 'bg-[#FF8C00] text-white',
  accent: 'bg-[#FFF3E0] text-[#F26B1D] border border-[#FFA042]',
  outline: 'bg-white text-[#666666] border border-gray-200 hover:border-[#FFA042] hover:text-[#F26B1D] hover:bg-[#FFF3E0]/40',
  sale: 'bg-[#FF8C00] text-white font-bold',
  muted: 'bg-gray-100 text-[#666666]',
};

const sizeStyles: Record<TagSize, string> = {
  sm: 'px-2 py-0.5 text-xs gap-1',
  md: 'px-3 py-1 text-sm gap-1.5',
  lg: 'px-4 py-1.5 text-base gap-2',
};

const Tag: React.FC<TagProps> = ({
  variant = 'outline',
  size = 'md',
  icon,
  removable = false,
  onRemove,
  onClick,
  children,
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center rounded-full font-medium transition-all duration-150';
  const interactiveStyles = onClick ? 'cursor-pointer active:scale-95' : '';

  return (
    <span
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${interactiveStyles}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {removable && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
          className="ml-1 -mr-1 p-0.5 rounded-full hover:bg-black/10 transition-colors"
          aria-label="태그 삭제"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M9.5 3.5L8.5 2.5L6 5L3.5 2.5L2.5 3.5L5 6L2.5 8.5L3.5 9.5L6 7L8.5 9.5L9.5 8.5L7 6L9.5 3.5Z"/>
          </svg>
        </button>
      )}
    </span>
  );
};

export default Tag;

// Usage Examples:
// <Tag variant="primary">인기</Tag>
// <Tag variant="sale">20% 할인</Tag>
// <Tag variant="accent" icon={<Star />}>추천</Tag>
// <Tag variant="outline" onClick={() => {}}>#{keyword}</Tag>
// <Tag variant="muted" removable onRemove={() => {}}>필터</Tag>
