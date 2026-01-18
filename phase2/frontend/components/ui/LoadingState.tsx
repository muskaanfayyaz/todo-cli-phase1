/**
 * Premium LoadingState Component
 *
 * Beautiful loading state with smooth spinner and optional skeleton loaders.
 */

import { cn } from '@/lib/utils';

interface LoadingStateProps {
  message?: string;
  fullScreen?: boolean;
  className?: string;
  variant?: 'spinner' | 'dots' | 'pulse';
  size?: 'sm' | 'md' | 'lg';
}

export default function LoadingState({
  message,
  fullScreen = false,
  className,
  variant = 'spinner',
  size = 'md',
}: LoadingStateProps) {
  const sizes = {
    sm: { spinner: 'w-6 h-6', dots: 'gap-1', container: 'py-8' },
    md: { spinner: 'w-10 h-10', dots: 'gap-1.5', container: 'py-12' },
    lg: { spinner: 'w-14 h-14', dots: 'gap-2', container: 'py-16' },
  };

  const currentSize = sizes[size];

  const containerClasses = fullScreen
    ? 'min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-white'
    : cn('flex items-center justify-center', currentSize.container);

  return (
    <div className={cn(containerClasses, className)}>
      <div className="text-center animate-fade-in">
        {/* Spinner Variant */}
        {variant === 'spinner' && (
          <div className="relative mx-auto mb-4">
            <div
              className={cn(
                currentSize.spinner,
                'rounded-full',
                'border-2 border-neutral-200',
                'border-t-primary-600',
                'animate-spin'
              )}
            />
            {/* Subtle glow behind spinner */}
            <div
              className={cn(
                currentSize.spinner,
                'absolute inset-0 rounded-full',
                'bg-primary-500/10 blur-md animate-pulse-subtle'
              )}
            />
          </div>
        )}

        {/* Dots Variant */}
        {variant === 'dots' && (
          <div className={cn('flex items-center justify-center mb-4', currentSize.dots)}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={cn(
                  size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-2.5 h-2.5' : 'w-3 h-3',
                  'rounded-full bg-primary-500',
                  'animate-bounce-subtle'
                )}
                style={{ animationDelay: `${i * 150}ms` }}
              />
            ))}
          </div>
        )}

        {/* Pulse Variant */}
        {variant === 'pulse' && (
          <div className="relative mx-auto mb-4">
            <div
              className={cn(
                currentSize.spinner,
                'rounded-full bg-primary-100 animate-pulse'
              )}
            />
            <div
              className={cn(
                'absolute inset-0 flex items-center justify-center'
              )}
            >
              <div
                className={cn(
                  size === 'sm' ? 'w-3 h-3' : size === 'md' ? 'w-4 h-4' : 'w-5 h-5',
                  'rounded-full bg-primary-500'
                )}
              />
            </div>
          </div>
        )}

        {/* Message */}
        {message && (
          <p className={cn(
            'text-neutral-500 font-medium',
            size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base'
          )}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

// Skeleton Loader Component
export interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  lines?: number;
}

export function Skeleton({
  className,
  variant = 'text',
  width,
  height,
  lines = 1,
}: SkeletonProps) {
  const baseStyles = 'bg-neutral-200 animate-pulse';

  if (variant === 'circular') {
    return (
      <div
        className={cn(baseStyles, 'rounded-full', className)}
        style={{ width: width || 40, height: height || 40 }}
      />
    );
  }

  if (variant === 'rectangular') {
    return (
      <div
        className={cn(baseStyles, 'rounded-lg', className)}
        style={{ width: width || '100%', height: height || 100 }}
      />
    );
  }

  // Text variant with multiple lines
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={cn(
            baseStyles,
            'rounded h-4',
            i === lines - 1 && lines > 1 ? 'w-3/4' : 'w-full'
          )}
          style={{ height: height || 16 }}
        />
      ))}
    </div>
  );
}

// Task Skeleton for loading states
export function TaskSkeleton() {
  return (
    <div className="p-4 border-b border-neutral-100 last:border-b-0 animate-pulse">
      <div className="flex items-start gap-3">
        <div className="w-5 h-5 rounded bg-neutral-200 mt-0.5" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-neutral-200 rounded w-3/4" />
          <div className="h-3 bg-neutral-200 rounded w-1/2" />
        </div>
        <div className="flex gap-1">
          <div className="w-8 h-8 bg-neutral-200 rounded" />
          <div className="w-8 h-8 bg-neutral-200 rounded" />
        </div>
      </div>
    </div>
  );
}
