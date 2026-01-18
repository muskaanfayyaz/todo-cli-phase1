/**
 * Premium Input Component
 *
 * World-class input field with refined focus states and premium styling.
 * Features beautiful focus glow, smooth transitions, and accessible labels.
 */

import { InputHTMLAttributes, forwardRef, useId } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  inputSize?: 'sm' | 'md' | 'lg';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      fullWidth = false,
      leftIcon,
      rightIcon,
      disabled,
      inputSize = 'md',
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    const sizes = {
      sm: {
        input: 'h-8 px-3 text-sm',
        icon: 'h-4 w-4',
        label: 'text-xs',
        helper: 'text-xs',
      },
      md: {
        input: 'h-10 px-3.5 text-sm',
        icon: 'h-4 w-4',
        label: 'text-sm',
        helper: 'text-xs',
      },
      lg: {
        input: 'h-12 px-4 text-base',
        icon: 'h-5 w-5',
        label: 'text-sm',
        helper: 'text-sm',
      },
    };

    const currentSize = sizes[inputSize];

    const baseStyles = [
      'block w-full',
      'bg-white dark:bg-neutral-800',
      'border rounded-lg',
      'text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500',
      // Smooth transitions
      'transition-all duration-150 ease-out',
      // Focus state
      'focus:outline-none',
      // Disabled state
      'disabled:bg-neutral-50 dark:disabled:bg-neutral-900 disabled:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-60',
      // Shadow
      'shadow-xs dark:shadow-none',
    ];

    const stateStyles = error
      ? [
          'border-danger-300 dark:border-danger-600',
          'focus:border-danger-500',
          'focus:ring-4 focus:ring-danger-500/10',
        ]
      : [
          'border-neutral-200 dark:border-neutral-700',
          'hover:border-neutral-300 dark:hover:border-neutral-600',
          'focus:border-primary-500 dark:focus:border-primary-400',
          'focus:ring-4 focus:ring-primary-500/10',
          // Subtle shadow on focus
          'focus:shadow-sm dark:focus:shadow-none',
        ];

    const inputElement = (
      <div className="relative">
        {/* Left Icon */}
        {leftIcon && (
          <div
            className={cn(
              'absolute left-3 top-1/2 -translate-y-1/2',
              'text-neutral-400 pointer-events-none',
              'transition-colors duration-150',
              currentSize.icon
            )}
          >
            {leftIcon}
          </div>
        )}

        {/* Input */}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            baseStyles,
            stateStyles,
            currentSize.input,
            leftIcon && 'pl-10',
            rightIcon && 'pr-10',
            className
          )}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
          }
          {...props}
        />

        {/* Right Icon */}
        {rightIcon && (
          <div
            className={cn(
              'absolute right-3 top-1/2 -translate-y-1/2',
              'text-neutral-400',
              'transition-colors duration-150',
              currentSize.icon
            )}
          >
            {rightIcon}
          </div>
        )}
      </div>
    );

    // Simple input without wrapper
    if (!label && !error && !helperText) {
      return inputElement;
    }

    // Full input with label and helper text
    return (
      <div className={cn('space-y-1.5', fullWidth && 'w-full')}>
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'block font-medium',
              currentSize.label,
              error ? 'text-danger-700 dark:text-danger-400' : 'text-neutral-700 dark:text-neutral-300',
              disabled && 'opacity-60'
            )}
          >
            {label}
          </label>
        )}

        {/* Input */}
        {inputElement}

        {/* Helper Text or Error */}
        {(error || helperText) && (
          <p
            id={error ? `${inputId}-error` : `${inputId}-helper`}
            className={cn(
              currentSize.helper,
              'flex items-center gap-1',
              error ? 'text-danger-600 dark:text-danger-400' : 'text-neutral-500 dark:text-neutral-400'
            )}
          >
            {error && (
              <svg
                className="h-3.5 w-3.5 shrink-0"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 108 1a7 7 0 000 14zm0-2a5 5 0 100-10 5 5 0 000 10zm0-9a1 1 0 011 1v3a1 1 0 01-2 0V5a1 1 0 011-1zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;

// Textarea Component
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  showCount?: boolean;
  autoResize?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      fullWidth = false,
      showCount = false,
      autoResize = false,
      disabled,
      id,
      value,
      maxLength,
      onChange,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const textareaId = id || generatedId;
    const currentLength = typeof value === 'string' ? value.length : 0;

    // Handle auto-resize
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (autoResize) {
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
      }
      onChange?.(e);
    };

    const baseStyles = [
      'block w-full',
      'bg-white dark:bg-neutral-800',
      'border rounded-lg',
      'px-3.5 py-2.5 text-sm',
      'text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500',
      'transition-all duration-150 ease-out',
      'focus:outline-none',
      'disabled:bg-neutral-50 dark:disabled:bg-neutral-900 disabled:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-60',
      'shadow-xs dark:shadow-none',
      autoResize ? 'resize-none overflow-hidden min-h-[80px]' : 'resize-y min-h-[80px]',
    ];

    const stateStyles = error
      ? [
          'border-danger-300 dark:border-danger-600',
          'focus:border-danger-500',
          'focus:ring-4 focus:ring-danger-500/10',
        ]
      : [
          'border-neutral-200 dark:border-neutral-700',
          'hover:border-neutral-300 dark:hover:border-neutral-600',
          'focus:border-primary-500 dark:focus:border-primary-400',
          'focus:ring-4 focus:ring-primary-500/10',
          'focus:shadow-sm dark:focus:shadow-none',
        ];

    const textareaElement = (
      <div className="relative">
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(baseStyles, stateStyles, showCount && 'pb-6', className)}
          disabled={disabled}
          value={value}
          maxLength={maxLength}
          onChange={handleChange}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined
          }
          {...props}
        />
        {showCount && maxLength && (
          <span className="absolute bottom-2 right-3 text-xs text-neutral-400 pointer-events-none">
            {currentLength}/{maxLength}
          </span>
        )}
      </div>
    );

    if (!label && !error && !helperText) {
      return textareaElement;
    }

    return (
      <div className={cn('space-y-1.5', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={textareaId}
            className={cn(
              'block text-sm font-medium',
              error ? 'text-danger-700 dark:text-danger-400' : 'text-neutral-700 dark:text-neutral-300',
              disabled && 'opacity-60'
            )}
          >
            {label}
          </label>
        )}
        {textareaElement}
        {(error || helperText) && (
          <p
            id={error ? `${textareaId}-error` : `${textareaId}-helper`}
            className={cn(
              'text-xs flex items-center gap-1',
              error ? 'text-danger-600 dark:text-danger-400' : 'text-neutral-500 dark:text-neutral-400'
            )}
          >
            {error && (
              <svg
                className="h-3.5 w-3.5 shrink-0"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 108 1a7 7 0 000 14zm0-2a5 5 0 100-10 5 5 0 000 10zm0-9a1 1 0 011 1v3a1 1 0 01-2 0V5a1 1 0 011-1zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
