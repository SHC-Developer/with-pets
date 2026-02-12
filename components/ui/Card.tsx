import React from 'react';

/**
 * 애들이랑 - Card Component
 * 
 * 카드 호버 시 Accent 컬러(#FFA042) 테두리/섀도우 적용
 */

type CardVariant = 'default' | 'bordered' | 'elevated';
type CardPadding = 'none' | 'sm' | 'md' | 'lg';

interface CardProps {
  variant?: CardVariant;
  padding?: CardPadding;
  hoverable?: boolean;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)]',
  bordered: 'bg-white border border-gray-100',
  elevated: 'bg-white shadow-lg',
};

const hoverStyles: Record<CardVariant, string> = {
  default: 'hover:shadow-[0_8px_24px_rgba(242,107,29,0.12)]',
  bordered: 'hover:border-[#FFA042] hover:shadow-[0_8px_24px_rgba(242,107,29,0.08)]',
  elevated: 'hover:shadow-xl',
};

const paddingStyles: Record<CardPadding, string> = {
  none: 'p-0',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'md',
  hoverable = false,
  onClick,
  className = '',
  children,
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-200 overflow-hidden';
  const interactiveStyles = onClick ? 'cursor-pointer active:scale-[0.99]' : '';

  return (
    <div
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${paddingStyles[padding]}
        ${hoverable ? hoverStyles[variant] : ''}
        ${interactiveStyles}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
};

// Card Header Sub-component
interface CardHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ title, subtitle, action, className = '' }) => (
  <div className={`flex items-start justify-between gap-4 ${className}`}>
    <div>
      <h3 className="text-lg font-bold text-[#212121]">{title}</h3>
      {subtitle && <p className="text-sm text-[#666666] mt-0.5">{subtitle}</p>}
    </div>
    {action && <div className="flex-shrink-0">{action}</div>}
  </div>
);

// Card Image Sub-component
interface CardImageProps {
  src: string;
  alt: string;
  aspectRatio?: 'square' | 'video' | 'wide';
  overlay?: React.ReactNode;
  className?: string;
}

const aspectRatioStyles: Record<string, string> = {
  square: 'aspect-square',
  video: 'aspect-video',
  wide: 'aspect-[16/9]',
};

const CardImage: React.FC<CardImageProps> = ({ 
  src, 
  alt, 
  aspectRatio = 'square',
  overlay,
  className = '' 
}) => (
  <div className={`relative overflow-hidden ${aspectRatioStyles[aspectRatio]} ${className}`}>
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover"
    />
    {overlay && (
      <div className="absolute inset-0 flex items-end">
        {overlay}
      </div>
    )}
  </div>
);

// Card Footer Sub-component
interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => (
  <div className={`flex items-center gap-3 pt-3 border-t border-gray-50 ${className}`}>
    {children}
  </div>
);

// Export all
export { Card, CardHeader, CardImage, CardFooter };
export default Card;

// Usage Examples:
/*
<Card variant="bordered" hoverable onClick={() => {}}>
  <CardImage src="/product.jpg" alt="상품" aspectRatio="square" />
  <div className="p-4">
    <Tag variant="sale" size="sm">20% 할인</Tag>
    <CardHeader title="프리미엄 사료" subtitle="2kg" />
    <p className="text-lg font-bold text-[#F26B1D] mt-2">32,000원</p>
  </div>
</Card>

<Card variant="default" padding="lg">
  <CardHeader 
    title="오늘의 추천 서비스" 
    subtitle="내 주변 인기 서비스"
    action={<Button variant="ghost" size="sm">더보기</Button>}
  />
  <div className="mt-4">
    ...content...
  </div>
</Card>
*/
