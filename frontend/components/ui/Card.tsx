/**
 * Premium Card Component
 *
 * World-class card component with refined elevation and hover states.
 * Features smooth transitions and beautiful shadows for premium feel.
 */

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'ghost';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  interactive?: boolean;
  glow?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = 'default',
      padding = 'md',
      hover = false,
      interactive = false,
      glow = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = [
      'bg-white dark:bg-neutral-900 rounded-xl',
      'transition-all duration-200 ease-out',
      'transform-gpu',
    ];

    const variants = {
      default: [
        'border border-neutral-200/80 dark:border-neutral-800',
        'shadow-[0_1px_2px_0_rgba(0,0,0,0.03)] dark:shadow-none',
      ],
      elevated: [
        'border border-neutral-100 dark:border-neutral-800',
        'shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-2px_rgba(0,0,0,0.03)] dark:shadow-none',
      ],
      outlined: [
        'border border-neutral-200 dark:border-neutral-700',
        'shadow-none',
      ],
      ghost: [
        'border border-transparent',
        'shadow-none',
        'bg-transparent',
      ],
    };

    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10',
    };

    const hoverStyles = hover || interactive
      ? [
          'hover:border-neutral-300 dark:hover:border-neutral-600',
          variant === 'elevated' && 'hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.08),0_4px_8px_-2px_rgba(0,0,0,0.03)] dark:hover:shadow-none',
          variant === 'default' && 'hover:shadow-[0_4px_8px_-2px_rgba(0,0,0,0.06),0_2px_4px_-2px_rgba(0,0,0,0.03)] dark:hover:shadow-none',
          'hover:-translate-y-0.5',
        ]
      : [];

    const interactiveStyles = interactive
      ? [
          'cursor-pointer',
          'active:translate-y-0',
          'active:shadow-[0_1px_2px_0_rgba(0,0,0,0.03)]',
        ]
      : [];

    const glowStyles = glow
      ? [
          'hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.08),0_0_20px_rgba(97,114,243,0.1)]',
        ]
      : [];

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          paddings[padding],
          hoverStyles,
          interactiveStyles,
          glowStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Card Header
export const CardHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { noBorder?: boolean }
>(({ className, noBorder = true, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-col space-y-1.5',
      !noBorder && 'pb-4 border-b border-neutral-100 dark:border-neutral-800',
      className
    )}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

// Card Title
export const CardTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement> & { as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' }
>(({ className, as: Component = 'h3', ...props }, ref) => (
  <Component
    ref={ref}
    className={cn(
      'text-lg font-semibold text-neutral-900 dark:text-white tracking-tight',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

// Card Description
export const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-neutral-500 dark:text-neutral-400', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

// Card Content
export const CardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('', className)} {...props} />
));
CardContent.displayName = 'CardContent';

// Card Footer
export const CardFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { noBorder?: boolean }
>(({ className, noBorder = true, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex items-center gap-3',
      !noBorder && 'pt-4 mt-4 border-t border-neutral-100 dark:border-neutral-800',
      className
    )}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export default Card;

// Stat Card - A specialized card for displaying statistics
export interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
}

export const StatCard = forwardRef<HTMLDivElement, StatCardProps>(
  ({ label, value, icon, trend, variant = 'default', className, ...props }, ref) => {
    const variantStyles = {
      default: {
        bg: 'bg-neutral-50 dark:bg-neutral-800/50',
        border: 'border-neutral-200 dark:border-neutral-700',
        icon: 'text-neutral-400',
        value: 'text-neutral-900 dark:text-white',
      },
      primary: {
        bg: 'bg-primary-50 dark:bg-primary-950/30',
        border: 'border-primary-100 dark:border-primary-900/50',
        icon: 'text-primary-500 dark:text-primary-400',
        value: 'text-primary-900 dark:text-primary-100',
      },
      success: {
        bg: 'bg-success-50 dark:bg-success-950/30',
        border: 'border-success-100 dark:border-success-900/50',
        icon: 'text-success-500 dark:text-success-400',
        value: 'text-success-900 dark:text-success-100',
      },
      warning: {
        bg: 'bg-warning-50 dark:bg-warning-950/30',
        border: 'border-warning-100 dark:border-warning-900/50',
        icon: 'text-warning-500 dark:text-warning-400',
        value: 'text-warning-900 dark:text-warning-100',
      },
      danger: {
        bg: 'bg-danger-50 dark:bg-danger-950/30',
        border: 'border-danger-100 dark:border-danger-900/50',
        icon: 'text-danger-500 dark:text-danger-400',
        value: 'text-danger-900 dark:text-danger-100',
      },
    };

    const styles = variantStyles[variant];

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl p-4 border transition-all duration-200',
          styles.bg,
          styles.border,
          'hover:shadow-sm dark:hover:shadow-none',
          className
        )}
        {...props}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-1">
              {label}
            </p>
            <p className={cn('text-2xl font-bold tracking-tight', styles.value)}>
              {value}
            </p>
            {trend && (
              <div className="flex items-center gap-1 mt-1">
                <span
                  className={cn(
                    'text-xs font-medium',
                    trend.isPositive ? 'text-success-600 dark:text-success-400' : 'text-danger-600 dark:text-danger-400'
                  )}
                >
                  {trend.isPositive ? '+' : ''}{trend.value}%
                </span>
                <svg
                  className={cn(
                    'w-3 h-3',
                    trend.isPositive ? 'text-success-600 dark:text-success-400' : 'text-danger-600 dark:text-danger-400 rotate-180'
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </div>
            )}
          </div>
          {icon && (
            <div className={cn('p-2 rounded-lg', styles.bg, styles.icon)}>
              {icon}
            </div>
          )}
        </div>
      </div>
    );
  }
);
StatCard.displayName = 'StatCard';
