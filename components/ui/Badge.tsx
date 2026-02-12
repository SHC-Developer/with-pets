import React from 'react';

/**
 * 애들이랑 - Badge Component
 * 
 * 알림, 카운트, 상태 표시에 사용
 * Primary: #F26B1D (중요 알림)
 * Secondary: #FF8C00 (할인/세일)
 */

type BadgeVariant = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  count?: number;
  maxCount?: number;
  dot?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: 'bg-[#F26B1D] text-white',
  secondary: 'bg-[#FF8C00] text-white',
  accent: 'bg-[#FFA042] text-white',
  success: 'bg-green-500 text-white',
  warning: 'bg-yellow-500 text-white',
  error: 'bg-red-500 text-white',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'min-w-4 h-4 text-[10px] px-1',
  md: 'min-w-5 h-5 text-xs px-1.5',
  lg: 'min-w-6 h-6 text-sm px-2',
};

const dotSizeStyles: Record<BadgeSize, string> = {
  sm: 'w-2 h-2',
  md: 'w-2.5 h-2.5',
  lg: 'w-3 h-3',
};

const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  size = 'md',
  count,
  maxCount = 99,
  dot = false,
  children,
  className = '',
}) => {
  // Dot badge
  if (dot) {
    return (
      <span
        className={`
          inline-block rounded-full
          ${variantStyles[variant]}
          ${dotSizeStyles[size]}
          ${className}
        `.trim().replace(/\s+/g, ' ')}
      />
    );
  }

  // Count badge
  if (count !== undefined) {
    const displayCount = count > maxCount ? `${maxCount}+` : count;
    
    return (
      <span
        className={`
          inline-flex items-center justify-center rounded-full font-bold
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `.trim().replace(/\s+/g, ' ')}
      >
        {displayCount}
      </span>
    );
  }

  // Text badge
  return (
    <span
      className={`
        inline-flex items-center justify-center rounded-full font-bold
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </span>
  );
};

// Badge with positioning for icons/buttons
interface BadgeWrapperProps {
  badge: React.ReactNode;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  children: React.ReactNode;
  className?: string;
}

const positionStyles: Record<string, string> = {
  'top-right': '-top-1 -right-1',
  'top-left': '-top-1 -left-1',
  'bottom-right': '-bottom-1 -right-1',
  'bottom-left': '-bottom-1 -left-1',
};

const BadgeWrapper: React.FC<BadgeWrapperProps> = ({
  badge,
  position = 'top-right',
  children,
  className = '',
}) => (
  <div className={`relative inline-flex ${className}`}>
    {children}
    <span className={`absolute ${positionStyles[position]}`}>
      {badge}
    </span>
  </div>
);

export { Badge, BadgeWrapper };
export default Badge;

// Usage Examples:
/*
// Dot badge (알림 있음 표시)
<BadgeWrapper badge={<Badge variant="primary" dot />}>
  <Bell size={24} />
</BadgeWrapper>

// Count badge (카운트 표시)
<BadgeWrapper badge={<Badge variant="primary" count={5} />}>
  <ShoppingCart size={24} />
</BadgeWrapper>

// Text badge (레이블)
<Badge variant="secondary" size="sm">NEW</Badge>
<Badge variant="accent">인기</Badge>
*/
