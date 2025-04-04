/**
 * Tokens de couleur pour l'application
 * Ces tokens suivent une approche sémantique pour faciliter la maintenance
 */

// Palette primitive (couleurs de base sans référence visuelle)
export const palette = {
  // Tonalités neutres
  neutral100: 'hsl(60, 11%, 94%)',     // Ancien "calcaire"/"lightNeutral" - F2F2EF
  neutral200: 'hsl(210, 11%, 85%)',    // Ancien "lightGrey"
  neutral600: 'hsl(210, 11%, 30%)',    // Ancien "darkGrey"
  
  // Couleurs primaires et secondaires
  primary500: 'hsl(213, 73%, 59%)',    // Ancien "bleuMed"/"mediterranee" - 4A90E2
  secondary400: 'hsl(281, 17%, 62%)',  // Ancien "lavande"/"purple" - A58FAA
  accent600: 'hsl(73, 30%, 43%)',      // Ancien "olive"/"green" - 808F4D
  warning500: 'hsl(39, 96%, 43%)',     // Ancien "ocre"/"amber" - D98E04
  
  // Autres couleurs utilitaires
  white: 'hsl(0, 0%, 100%)',
  black: 'hsl(0, 0%, 0%)',

  // États sémantiques
  success500: 'hsl(120, 50%, 40%)',    // Vert succès
  error500: 'hsl(0, 84%, 60%)',        // Rouge erreur
  warning400: 'hsl(30, 84%, 60%)',     // Orange avertissement
  info500: 'hsl(200, 84%, 60%)',       // Bleu information
};

// Couleurs sémantiques (selon la fonction)
export const semanticColors = {
  // Couleurs globales
  background: palette.neutral100,
  foreground: 'hsl(0, 0%, 3.9%)',
  border: palette.warning500,
  
  // Couleurs d'interaction
  primary: palette.primary500,
  primaryHover: 'hsl(213, 73%, 52%)',
  primaryForeground: palette.white,

  secondary: palette.secondary400,
  secondaryHover: 'hsl(281, 17%, 55%)',
  secondaryForeground: palette.white,

  accent: palette.accent600,
  accentHover: 'hsl(73, 30%, 38%)',
  accentForeground: palette.white,

  // Composants UI spécifiques
  navigation: palette.secondary400,
  navigationHover: 'hsl(281, 17%, 55%)', 
  navigationForeground: palette.white,

  footer: palette.secondary400,
  footerHover: 'hsl(281, 17%, 55%)',
  footerForeground: palette.white,

  // Variantes de texte
  textPrimary: 'hsl(222.2, 84%, 4.9%)',
  textSecondary: 'hsl(215.4, 16.3%, 46.9%)',
  
  // États et alertes
  success: palette.success500,
  error: palette.error500,
  warning: palette.warning500,
  info: palette.info500,

  // Autres composants d'interface
  card: {
    background: palette.white,
    foreground: 'hsl(222.2, 84%, 4.9%)',
  },
  popover: {
    background: palette.white,
    foreground: 'hsl(222.2, 84%, 4.9%)',
  },
  muted: {
    background: 'hsl(210, 11%, 96%)',
    foreground: 'hsl(215.4, 16.3%, 46.9%)',
  },
};

// Thèmes pour l'application
export const theme = {
  light: {
    ...semanticColors,
  },
  dark: {
    background: 'hsl(222.2, 84%, 4.9%)',
    foreground: palette.neutral100,
    
    // Composants UI en mode sombre
    navigation: 'hsl(281, 17%, 32%)',
    navigationForeground: palette.white,
    
    footer: 'hsl(281, 17%, 32%)',
    footerForeground: palette.white,
    
    // Variations pour le mode sombre
    card: {
      background: 'hsl(222.2, 84%, 9.9%)',
      foreground: palette.neutral100,
    },
    
    // Autres surcharges pour le mode sombre...
  }
};

// Valeurs CSS pour usage direct avec Tailwind
export const tailwind = {
  // Couleurs primitives en format CSS var
  neutral: {
    100: 'var(--neutral-100)',
    200: 'var(--neutral-200)',
    600: 'var(--neutral-600)'
  },
  primary: {
    base: 'bg-primary text-primary-foreground',
    hover: 'hover:bg-primary-hover',
    500: 'var(--primary-500)'
  },
  secondary: {
    base: 'bg-secondary text-secondary-foreground',
    hover: 'hover:bg-secondary-hover',
    400: 'var(--secondary-400)'
  },
  accent: {
    base: 'bg-accent text-accent-foreground',
    hover: 'hover:bg-accent-hover',
    600: 'var(--accent-600)'
  },
  warning: {
    400: 'var(--warning-400)',
    500: 'var(--warning-500)'
  },
  success: {
    500: 'var(--success-500)'
  },
  error: {
    500: 'var(--error-500)'
  },
  background: 'var(--background)',
  foreground: 'var(--foreground)',
  navigation: {
    base: 'bg-navigation text-navigation-foreground',
    hover: 'hover:text-navigation-foreground/80'
  },
  footer: {
    base: 'bg-footer text-footer-foreground',
    hover: 'hover:text-footer-foreground/80'
  }
};

// Exporter une structure unique pour faciliter l'import
export default {
  palette,
  semanticColors,
  theme,
  tailwind
};
