/**
 * Premium Button Component
 *
 * World-class button with refined micro-interactions and premium styling.
 * Supports light and dark modes with consistent design.
 */

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success' | 'outline';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = [
      // Layout
      'inline-flex items-center justify-center gap-2',
      'font-medium',
      'rounded-lg',
      'select-none',
      'whitespace-nowrap',
      // Transitions
      'transition-all duration-150 ease-out',
      // Focus
      'focus:outline-none focus-visible:outline-none',
      'focus-visible:ring-2 focus-visible:ring-offset-2',
      'focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900',
      // Disabled
      'disabled:pointer-events-none disabled:opacity-50',
      // GPU acceleration for smooth animations
      'transform-gpu',
    ];

    const variants = {
      primary: [
        'bg-primary-600 text-white',
        'hover:bg-primary-700',
        'active:bg-primary-800',
        'focus-visible:ring-primary-500/40',
        // Premium shadow with glow
        'shadow-[0_1px_2px_0_rgba(0,0,0,0.05),inset_0_1px_0_0_rgba(255,255,255,0.1)]',
        'hover:shadow-[0_4px_12px_-2px_rgba(97,114,243,0.4),inset_0_1px_0_0_rgba(255,255,255,0.1)]',
        'active:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.1)]',
        // Subtle lift on hover
        'hover:-translate-y-px',
        'active:translate-y-0',
      ],
      secondary: [
        'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200',
        'border border-neutral-200 dark:border-neutral-700',
        'hover:bg-neutral-50 dark:hover:bg-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600',
        'hover:text-neutral-900 dark:hover:text-white',
        'active:bg-neutral-100 dark:active:bg-neutral-600',
        'focus-visible:ring-neutral-500/20',
        'shadow-xs dark:shadow-none',
        'hover:shadow-sm',
      ],
      outline: [
        'bg-transparent text-primary-600 dark:text-primary-400',
        'border border-primary-200 dark:border-primary-700',
        'hover:bg-primary-50 dark:hover:bg-primary-950/30 hover:border-primary-300 dark:hover:border-primary-600',
        'active:bg-primary-100 dark:active:bg-primary-950/50',
        'focus-visible:ring-primary-500/30',
      ],
      ghost: [
        'bg-transparent text-neutral-600 dark:text-neutral-400',
        'hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100',
        'active:bg-neutral-200 dark:active:bg-neutral-700',
        'focus-visible:ring-neutral-500/20',
      ],
      danger: [
        'bg-danger-600 text-white',
        'hover:bg-danger-700',
        'active:bg-danger-800',
        'focus-visible:ring-danger-500/40',
        'shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]',
        'hover:shadow-[0_4px_12px_-2px_rgba(244,63,94,0.4)]',
        'hover:-translate-y-px',
        'active:translate-y-0',
      ],
      success: [
        'bg-success-600 text-white',
        'hover:bg-success-700',
        'active:bg-success-800',
        'focus-visible:ring-success-500/40',
        'shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]',
        'hover:shadow-[0_4px_12px_-2px_rgba(16,185,129,0.4)]',
        'hover:-translate-y-px',
        'active:translate-y-0',
      ],
    };

    const sizes = {
      xs: 'h-8 px-3 text-xs gap-1 leading-none',
      sm: 'h-9 px-3.5 text-sm gap-1.5 leading-none',
      md: 'h-10 px-4 text-sm gap-2 leading-none',
      lg: 'h-11 px-5 text-base gap-2 leading-none',
      xl: 'h-13 px-6 text-base gap-2.5 leading-none',
    };

    const iconSizes = {
      xs: 'h-3.5 w-3.5',
      sm: 'h-4 w-4',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
      xl: 'h-5 w-5',
    };

    const spinnerSizes = {
      xs: 'h-3 w-3',
      sm: 'h-3.5 w-3.5',
      md: 'h-4 w-4',
      lg: 'h-4 w-4',
      xl: 'h-5 w-5',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {/* Loading Spinner */}
        {loading && (
          <svg
            className={cn('animate-spin', spinnerSizes[size])}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {/* Left Icon */}
        {!loading && leftIcon && (
          <span className={cn('shrink-0', iconSizes[size])}>
            {leftIcon}
          </span>
        )}

        {/* Content */}
        <span className={cn('inline-flex items-center', loading ? 'opacity-70' : '')}>{children}</span>

        {/* Right Icon */}
        {!loading && rightIcon && (
          <span className={cn('shrink-0', iconSizes[size])}>
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

// Icon Button variant for icon-only buttons
export interface IconButtonProps extends Omit<ButtonProps, 'leftIcon' | 'rightIcon'> {
  icon?: React.ReactNode;
  'aria-label': string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, size = 'md', className, children, ...props }, ref) => {
    const iconButtonSizes = {
      xs: 'h-8 w-8',
      sm: 'h-9 w-9',
      md: 'h-10 w-10',
      lg: 'h-11 w-11',
      xl: 'h-13 w-13',
    };

    return (
      <Button
        ref={ref}
        size={size}
        className={cn(iconButtonSizes[size], 'px-0', className)}
        {...props}
      >
        {icon || children}
      </Button>
    );
  }
);

IconButton.displayName = 'IconButton';
