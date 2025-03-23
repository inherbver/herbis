/**
 * Tokens de couleurs pour inHerbisVeritas
 * 
 * Structure:
 * - palette: Couleurs primitives (valeurs brutes)
 * - semantic: Couleurs sémantiques (selon leur fonction)
 * - tailwind: Classes Tailwind associées
 */

export const colors = {
  // Couleurs primitives (valeurs brutes)
  palette: {
    neutral100: '#F2F2EF',  // Ancien calcaire
    primary500: '#4A90E2',  // Ancien mediterranee
    accent500: '#808F4D',   // Ancien olive
    neutral500: '#D98E04',  // Ancien ocre
    secondary500: '#A58FAA', // Ancien lavande
  },
  
  // Couleurs sémantiques (selon leur fonction)
  semantic: {
    background: 'var(--color-background)',
    primary: {
      base: 'var(--color-primary)',
      hover: 'var(--color-primary-hover)',
      foreground: 'var(--color-primary-foreground)',
    },
    accent: {
      base: 'var(--color-accent)',
      hover: 'var(--color-accent-hover)',
      foreground: 'var(--color-accent-foreground)',
    },
    border: 'var(--color-border)',
    secondary: {
      base: 'var(--color-secondary)',
      hover: 'var(--color-secondary-hover)',
      foreground: 'var(--color-secondary-foreground)',
    },
    text: {
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
    }
  },
  
  // Classes Tailwind
  tailwind: {
    background: 'bg-background',
    primary: {
      base: 'bg-primary text-primary-foreground',
      hover: 'hover:bg-primary-hover',
    },
    accent: {
      base: 'bg-accent text-accent-foreground',
      hover: 'hover:bg-accent-hover',
    },
    border: 'border-border',
    secondary: {
      base: 'bg-secondary text-secondary-foreground',
      hover: 'hover:bg-secondary-hover',
    },
    text: {
      primary: 'text-text-primary',
      secondary: 'text-text-secondary',
    }
  }
};
