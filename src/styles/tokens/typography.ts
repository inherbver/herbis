/**
 * Tokens de typographie pour inHerbisVeritas
 * 
 * Structure:
 * - fonts: Familles de polices
 * - sizes: Tailles de police
 * - weights: Poids des polices
 * - lineHeights: Hauteurs de ligne
 * - tailwind: Classes Tailwind associées
 */

export const typography = {
  // Familles de polices
  fonts: {
    heading: 'var(--font-cinzel)',
    body: 'var(--font-raleway)',
    sans: 'var(--font-raleway)',
  },
  
  // Tailles de police
  sizes: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
  },
  
  // Poids des polices
  weights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  
  // Hauteurs de ligne
  lineHeights: {
    none: '1',
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
    loose: '2',
  },
  
  // Classes Tailwind
  tailwind: {
    heading: 'font-cinzel',
    body: 'font-raleway',
    sizes: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
    },
    weights: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    lineHeights: {
      none: 'leading-none',
      tight: 'leading-tight',
      normal: 'leading-normal',
      relaxed: 'leading-relaxed',
      loose: 'leading-loose',
    },
  },
};
