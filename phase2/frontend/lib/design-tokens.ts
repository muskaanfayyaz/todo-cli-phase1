/**
 * Premium Design System Tokens
 *
 * World-class design system inspired by Linear, Stripe, Vercel, and Raycast.
 * Every value is intentionally crafted for a premium, polished experience.
 */

/**
 * COLOR SYSTEM
 *
 * A refined, sophisticated palette with perfect contrast ratios.
 * Inspired by the best SaaS products in the industry.
 */
export const colors = {
  // Primary - Deep Indigo with rich undertones
  primary: {
    50: '#f5f7ff',
    100: '#ebefff',
    200: '#d9e0ff',
    300: '#b8c4ff',
    400: '#8d9eff',
    500: '#6172f3',  // Main brand - vibrant but sophisticated
    600: '#444ce7',  // Hover state
    700: '#3538cd',
    800: '#2d31a6',
    900: '#292d6e',
    950: '#1a1b3d',
  },

  // Neutral - Refined cool grays with subtle blue undertone
  neutral: {
    0: '#ffffff',
    25: '#fcfcfd',
    50: '#f9fafb',   // Background
    100: '#f3f4f6',  // Secondary background
    200: '#e5e7eb',  // Border light
    300: '#d1d5db',  // Border
    400: '#9ca3af',  // Placeholder text
    500: '#6b7280',  // Secondary text
    600: '#4b5563',  // Body text
    700: '#374151',  // Heading text
    800: '#1f2937',
    900: '#111827',  // High contrast text
    950: '#030712',
  },

  // Success - Refined emerald green
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',  // Main success
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },

  // Warning - Warm amber
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',  // Main warning
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },

  // Danger - Refined red
  danger: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',  // Main danger
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },

  // Info - Ocean blue
  info: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',  // Main info
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },

  // Violet - For gradients and accents
  violet: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
  },

  // Semantic colors
  background: {
    primary: '#ffffff',
    secondary: '#f9fafb',
    tertiary: '#f3f4f6',
    elevated: '#ffffff',
    overlay: 'rgba(17, 24, 39, 0.7)',
  },

  surface: {
    primary: '#ffffff',
    secondary: '#f9fafb',
    hover: '#f3f4f6',
    pressed: '#e5e7eb',
  },

  border: {
    primary: '#e5e7eb',
    secondary: '#f3f4f6',
    hover: '#d1d5db',
    focus: '#6172f3',
  },

  text: {
    primary: '#111827',
    secondary: '#4b5563',
    tertiary: '#6b7280',
    quaternary: '#9ca3af',
    disabled: '#d1d5db',
    inverse: '#ffffff',
    brand: '#6172f3',
  },
} as const;

/**
 * TYPOGRAPHY SYSTEM
 *
 * Inter font with carefully tuned scales for exceptional readability.
 */
export const typography = {
  fontFamily: {
    sans: 'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    mono: '"SF Mono", SFMono-Regular, ui-monospace, Menlo, Monaco, Consolas, monospace',
    display: 'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },

  fontSize: {
    '2xs': '0.6875rem',  // 11px
    xs: '0.75rem',       // 12px
    sm: '0.8125rem',     // 13px
    base: '0.875rem',    // 14px - Default body text
    md: '0.9375rem',     // 15px
    lg: '1rem',          // 16px
    xl: '1.125rem',      // 18px
    '2xl': '1.25rem',    // 20px
    '3xl': '1.5rem',     // 24px
    '4xl': '1.875rem',   // 30px
    '5xl': '2.25rem',    // 36px
    '6xl': '3rem',       // 48px
    '7xl': '3.75rem',    // 60px
    '8xl': '4.5rem',     // 72px
  },

  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeight: {
    none: 1,
    tight: 1.2,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 1.75,
  },

  letterSpacing: {
    tighter: '-0.03em',
    tight: '-0.02em',
    snug: '-0.01em',
    normal: '0',
    wide: '0.01em',
    wider: '0.02em',
    widest: '0.05em',
  },
} as const;

/**
 * SPACING SYSTEM
 *
 * 4px base unit for precise, harmonious spacing.
 */
export const spacing = {
  0: '0',
  px: '1px',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px
  1.5: '0.375rem',  // 6px
  2: '0.5rem',      // 8px
  2.5: '0.625rem',  // 10px
  3: '0.75rem',     // 12px
  3.5: '0.875rem',  // 14px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  7: '1.75rem',     // 28px
  8: '2rem',        // 32px
  9: '2.25rem',     // 36px
  10: '2.5rem',     // 40px
  11: '2.75rem',    // 44px
  12: '3rem',       // 48px
  14: '3.5rem',     // 56px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  28: '7rem',       // 112px
  32: '8rem',       // 128px
  36: '9rem',       // 144px
  40: '10rem',      // 160px
  44: '11rem',      // 176px
  48: '12rem',      // 192px
  52: '13rem',      // 208px
  56: '14rem',      // 224px
  60: '15rem',      // 240px
  64: '16rem',      // 256px
  72: '18rem',      // 288px
  80: '20rem',      // 320px
  96: '24rem',      // 384px
} as const;

/**
 * BORDER RADIUS
 *
 * Refined radii for a modern, polished aesthetic.
 */
export const borderRadius = {
  none: '0',
  xs: '0.125rem',    // 2px
  sm: '0.25rem',     // 4px - Subtle elements
  DEFAULT: '0.375rem', // 6px - Buttons, inputs
  md: '0.5rem',      // 8px - Cards
  lg: '0.625rem',    // 10px
  xl: '0.75rem',     // 12px - Modals
  '2xl': '1rem',     // 16px - Large cards
  '3xl': '1.5rem',   // 24px - Hero elements
  full: '9999px',    // Pills, avatars
} as const;

/**
 * SHADOWS
 *
 * Layered, sophisticated shadow system for premium depth.
 */
export const shadows = {
  none: 'none',

  // Subtle shadows for cards and containers
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.02)',
  DEFAULT: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.03)',
  md: '0 4px 8px -2px rgba(0, 0, 0, 0.06), 0 2px 4px -2px rgba(0, 0, 0, 0.03)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.06), 0 4px 6px -4px rgba(0, 0, 0, 0.03)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.07), 0 8px 10px -6px rgba(0, 0, 0, 0.03)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.12)',

  // Inset shadow for pressed states
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)',
  innerLg: 'inset 0 4px 8px 0 rgba(0, 0, 0, 0.06)',

  // Focus rings
  ring: '0 0 0 3px rgba(97, 114, 243, 0.12)',
  ringPrimary: '0 0 0 3px rgba(97, 114, 243, 0.2)',
  ringDanger: '0 0 0 3px rgba(239, 68, 68, 0.2)',
  ringSuccess: '0 0 0 3px rgba(34, 197, 94, 0.2)',

  // Glow effects for premium hover states
  glow: '0 0 20px rgba(97, 114, 243, 0.15)',
  glowLg: '0 0 40px rgba(97, 114, 243, 0.2)',

  // Card hover elevation
  cardHover: '0 12px 24px -4px rgba(0, 0, 0, 0.08), 0 4px 8px -2px rgba(0, 0, 0, 0.03)',
  cardActive: '0 8px 16px -4px rgba(0, 0, 0, 0.06), 0 2px 4px -2px rgba(0, 0, 0, 0.02)',
} as const;

/**
 * MOTION
 *
 * Premium animation timing for smooth, natural interactions.
 */
export const motion = {
  // Durations (optimized for 60fps)
  duration: {
    instant: 75,      // Micro-interactions
    faster: 100,      // Tooltips, focus rings
    fast: 150,        // Hover states
    normal: 200,      // Standard transitions
    slow: 300,        // Page transitions
    slower: 400,      // Complex animations
    slowest: 500,     // Dramatic reveals
  },

  // Easing functions
  easing: {
    // Standard easings
    linear: 'linear',
    ease: 'ease',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',

    // Premium easings (Apple-style)
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    springBouncy: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    smoothOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
    smoothIn: 'cubic-bezier(0.7, 0, 0.84, 0)',

    // Dramatic easings (for modals, sheets)
    dramatic: 'cubic-bezier(0.22, 1, 0.36, 1)',
    dramaticIn: 'cubic-bezier(0.6, 0.04, 0.98, 0.34)',
    dramaticOut: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
  },

  // Transition presets
  transition: {
    all: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    fast: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    colors: 'color 150ms, background-color 150ms, border-color 150ms',
    opacity: 'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    shadow: 'box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'all 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
} as const;

/**
 * BREAKPOINTS
 */
export const breakpoints = {
  xs: '375px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1440px',
  '3xl': '1920px',
} as const;

/**
 * Z-INDEX SCALE
 */
export const zIndex = {
  behind: -1,
  base: 0,
  raised: 1,
  dropdown: 100,
  sticky: 200,
  overlay: 300,
  modal: 400,
  popover: 500,
  tooltip: 600,
  toast: 700,
  maximum: 999,
} as const;

/**
 * CONTAINER WIDTHS
 */
export const containers = {
  xs: '20rem',     // 320px
  sm: '24rem',     // 384px
  md: '28rem',     // 448px
  lg: '32rem',     // 512px
  xl: '36rem',     // 576px
  '2xl': '42rem',  // 672px
  '3xl': '48rem',  // 768px
  '4xl': '56rem',  // 896px
  '5xl': '64rem',  // 1024px
  '6xl': '72rem',  // 1152px
  '7xl': '80rem',  // 1280px
  prose: '65ch',
} as const;

/**
 * GRADIENTS
 */
export const gradients = {
  // Brand gradients
  primary: 'linear-gradient(135deg, #6172f3 0%, #444ce7 100%)',
  primarySoft: 'linear-gradient(135deg, #f5f7ff 0%, #ebefff 100%)',

  // Background gradients
  subtle: 'linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)',
  radialLight: 'radial-gradient(ellipse at top, #f5f7ff 0%, transparent 70%)',

  // Hero gradients
  hero: 'linear-gradient(135deg, #6172f3 0%, #8b5cf6 50%, #6172f3 100%)',
  heroMesh: 'radial-gradient(at 40% 20%, #818cf8 0px, transparent 50%), radial-gradient(at 80% 0%, #c084fc 0px, transparent 50%), radial-gradient(at 0% 50%, #6172f3 0px, transparent 50%)',

  // Text gradients
  text: 'linear-gradient(90deg, #6172f3 0%, #8b5cf6 100%)',
  textVibrant: 'linear-gradient(90deg, #6172f3 0%, #a855f7 50%, #ec4899 100%)',
} as const;
