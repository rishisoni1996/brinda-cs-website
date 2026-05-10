/**
 * JS-side design tokens for use in components that can't read CSS variables directly
 * (e.g. Framer Motion transition objects, JS breakpoint matchers).
 *
 * Visual tokens (colors, fonts, spacing, radii, shadows) live in `app/globals.css`.
 * This file is for tokens that need to be plain JS values.
 */

export const motion = {
  /** Default duration for fade / slide-up entrances, in seconds. */
  duration: 0.6,
  /** Custom easing — gentle ease-out, no overshoot. */
  ease: [0.22, 1, 0.36, 1] as const,
  /** Stagger between sibling children in a fade-in group, in seconds. */
  stagger: 0.08,
  /** How far children translate up before settling, in pixels. */
  slideUp: 16,
} as const;

/** Mirrors Tailwind v4 default breakpoints, in pixels. */
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const z = {
  base: 0,
  raised: 10,
  sticky: 20,
  overlay: 40,
  modal: 50,
  toast: 60,
} as const;
