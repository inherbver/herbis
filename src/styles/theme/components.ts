/**
 * Styles des composants pour inHerbisVeritas
 * 
 * Ce fichier définit les styles spécifiques pour les composants
 * en utilisant les tokens de design (couleurs, typographie, espacement).
 */

import { colors, typography, spacing } from '../tokens';

export const components = {
  // Styles pour la Navbar
  navbar: {
    container: `${colors.tailwind.background} ${typography.tailwind.body} py-4 px-6 shadow-sm`,
    logoText: `${typography.tailwind.heading} ${typography.tailwind.weights.bold} ${typography.tailwind.sizes.xl}`,
    link: {
      base: `${typography.tailwind.sizes.base} ${typography.tailwind.weights.medium} transition-colors duration-200`,
      normal: 'text-text-secondary hover:text-accent',
      active: `${colors.tailwind.accent.base}`,
    },
    mobileMenu: {
      button: `${colors.tailwind.accent.base} p-2 rounded-md`,
      container: `${colors.tailwind.background} absolute top-full left-0 right-0 z-50 shadow-md py-4`,
    },
  },
  
  // Styles pour le Footer
  footer: {
    container: `${colors.tailwind.background} ${typography.tailwind.body} py-8 px-6 border-t border-border`,
    heading: `${typography.tailwind.heading} ${typography.tailwind.sizes.lg} ${typography.tailwind.weights.semibold} mb-4`,
    link: `${typography.tailwind.sizes.sm} text-text-secondary hover:text-accent transition-colors duration-200`,
    socialIcon: {
      container: 'flex items-center space-x-4',
      icon: `${colors.tailwind.secondary.base} rounded-full p-2 hover:bg-secondary-hover transition-colors duration-200`,
    },
    newsletter: {
      input: 'w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary',
      button: `${colors.tailwind.primary.base} ${colors.tailwind.primary.hover} py-2 px-4 rounded-md transition-colors duration-200`,
    },
  },
  
  // Styles pour les boutons
  button: {
    base: `${typography.tailwind.weights.medium} rounded-md transition-colors duration-200 inline-flex items-center justify-center`,
    sizes: {
      sm: 'py-1 px-3 text-sm',
      md: 'py-2 px-4 text-base',
      lg: 'py-3 px-6 text-lg',
    },
    variants: {
      primary: `${colors.tailwind.primary.base} ${colors.tailwind.primary.hover}`,
      secondary: `${colors.tailwind.secondary.base} ${colors.tailwind.secondary.hover}`,
      accent: `${colors.tailwind.accent.base} ${colors.tailwind.accent.hover}`,
      outline: 'bg-transparent border border-border hover:bg-background text-text-primary',
    },
  },
  
  // Styles pour les cartes
  card: {
    container: `${colors.tailwind.background} rounded-lg overflow-hidden shadow-md`,
    header: 'p-4 border-b border-border',
    body: 'p-6',
    footer: 'p-4 border-t border-border',
  },
};
