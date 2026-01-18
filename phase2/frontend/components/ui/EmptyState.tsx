/**
 * Premium EmptyState Component
 *
 * Beautiful empty state with illustrations and call-to-action.
 * Provides helpful guidance when there's no content to display.
 */

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
  className?: string;
  variant?: 'default' | 'minimal' | 'illustrated';
}

export default function EmptyState({
  icon,
  title,
  description,
  action,
  className,
  variant = 'default',
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center',
        variant === 'minimal' ? 'py-8 px-4' : 'py-16 px-6',
        'animate-fade-in',
        className
      )}
    >
      {/* Icon Container */}
      {icon && (
        <div
          className={cn(
            'flex items-center justify-center mb-6',
            'transition-transform duration-300',
            variant === 'minimal'
              ? 'w-12 h-12'
              : 'w-16 h-16',
            variant === 'illustrated'
              ? 'bg-gradient-to-br from-primary-50 to-violet-50 rounded-2xl'
              : 'bg-neutral-100 rounded-full'
          )}
        >
          <div
            className={cn(
              'text-neutral-400',
              variant === 'minimal' ? 'w-6 h-6' : 'w-8 h-8',
              variant === 'illustrated' && 'text-primary-500'
            )}
          >
            {icon}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-sm mx-auto">
        <h3
          className={cn(
            'font-semibold text-neutral-900 mb-2',
            variant === 'minimal' ? 'text-base' : 'text-lg'
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            'text-neutral-500 leading-relaxed',
            variant === 'minimal' ? 'text-sm' : 'text-sm'
          )}
        >
          {description}
        </p>
      </div>

      {/* Action */}
      {action && (
        <div className={cn('mt-6', variant === 'minimal' && 'mt-4')}>
          {action}
        </div>
      )}
    </div>
  );
}

// Preset Empty States for common scenarios
export function NoTasksEmpty({ action }: { action?: ReactNode }) {
  return (
    <EmptyState
      variant="illustrated"
      icon={
        <svg
          className="w-full h-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      }
      title="No tasks yet"
      description="Create your first task to get started. Stay organized and boost your productivity."
      action={action}
    />
  );
}

export function NoSearchResultsEmpty({ query }: { query: string }) {
  return (
    <EmptyState
      variant="minimal"
      icon={
        <svg
          className="w-full h-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      }
      title="No results found"
      description={`No tasks match "${query}". Try a different search term or clear the filter.`}
    />
  );
}

export function NoCompletedTasksEmpty() {
  return (
    <EmptyState
      variant="minimal"
      icon={
        <svg
          className="w-full h-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      }
      title="No completed tasks"
      description="Tasks you complete will appear here. Start checking off your to-do list!"
    />
  );
}

export function ConnectionErrorEmpty({ onRetry }: { onRetry?: () => void }) {
  return (
    <EmptyState
      icon={
        <svg
          className="w-full h-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      }
      title="Connection error"
      description="We couldn't load your tasks. Please check your connection and try again."
      action={
        onRetry && (
          <button
            onClick={onRetry}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Try again
          </button>
        )
      }
    />
  );
}
