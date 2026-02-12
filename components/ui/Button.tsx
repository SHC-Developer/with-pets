import React from 'react';

/**
 * 애들이랑 - Button Component
 * 
 * Brand Colors:
 * - Primary: #F26B1D (메인 CTA)
 * - Secondary: #FF8C00 (서브 CTA)
 * - Accent: #FFA042 (보조)
 */

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  pill?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[#F26B1D] hover:bg-[#D45A14] text-white shadow-md hover:shadow-lg',
  secondary: 'bg-[#FF8C00] hover:bg-[#E67D00] text-white shadow-md hover:shadow-lg',
  accent: 'bg-[#FFA042] hover:bg-[#E88A30] text-white shadow-md hover:shadow-lg',
  outline: 'bg-transparent border-2 border-[#F26B1D] text-[#F26B1D] hover:bg-[#FFF3E0]',
  ghost: 'bg-transparent text-[#F26B1D] hover:bg-[#FFF3E0]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm gap-1.5',
  md: 'h-10 px-4 text-base gap-2',
  lg: 'h-12 px-6 text-lg gap-2',
  xl: 'h-14 px-8 text-lg gap-2.5',
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  pill = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  loading = false,
  disabled,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100';
  const radiusStyle = pill ? 'rounded-full' : 'rounded-xl';
  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${radiusStyle}
        ${widthStyle}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4" 
            fill="none"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        <>
          {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;

// Usage Examples:
// <Button variant="primary" size="lg">구매하기</Button>
// <Button variant="outline" leftIcon={<Heart />}>찜하기</Button>
// <Button variant="secondary" pill>예약하기</Button>
// <Button variant="ghost" size="sm">더보기</Button>
