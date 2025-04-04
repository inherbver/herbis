/**
 * Mapping sémantique des couleurs
 * Ce fichier fait le lien entre les tokens primitifs et leur usage sémantique dans l'application
 * Respecte l'architecture du design system définie dans .windsurfrules
 */

import { COLOR_HSL } from '../tokens/primitives';

// Définition des couleurs sémantiques - utilisation de camelCase pour les variables
// conformément aux règles de nommage dans .windsurfrules
export const semanticColors = {
  // Couleurs de base pour l'interface
  background: COLOR_HSL.NEUTRAL_100,
  foreground: COLOR_HSL.NEUTRAL_900,
  card: COLOR_HSL.WHITE,
  cardForeground: COLOR_HSL.NEUTRAL_900,
  
  // Couleurs primaires - utilisées pour les éléments principaux de l'interface
  primary: COLOR_HSL.BLUE_500,
  primaryForeground: COLOR_HSL.WHITE,
  primaryHover: COLOR_HSL.BLUE_700,
  primaryActive: COLOR_HSL.BLUE_700,
  primaryLight: COLOR_HSL.BLUE_300,
  
  // Couleurs secondaires - utilisées pour les éléments secondaires
  secondary: COLOR_HSL.PURPLE_400,
  secondaryForeground: COLOR_HSL.WHITE,
  secondaryHover: COLOR_HSL.PURPLE_600,
  secondaryActive: COLOR_HSL.PURPLE_600,
  secondaryLight: COLOR_HSL.PURPLE_300,
  
  // Couleurs d'accent - utilisées pour les éléments d'accentuation
  accent: COLOR_HSL.GREEN_600,
  accentForeground: COLOR_HSL.WHITE,
  accentHover: COLOR_HSL.GREEN_800,
  accentActive: COLOR_HSL.GREEN_800,
  accentLight: COLOR_HSL.GREEN_400,
  
  // Couleurs de contrôle - pour notifications, alertes, etc.
  success: COLOR_HSL.SUCCESS_500,
  error: COLOR_HSL.ERROR_500,
  warning: COLOR_HSL.AMBER_500,
  info: COLOR_HSL.INFO_500,
  
  // Couleurs de bordure
  border: COLOR_HSL.NEUTRAL_200,
  borderHover: COLOR_HSL.NEUTRAL_300,
  
  // Couleurs pour le texte
  text: COLOR_HSL.NEUTRAL_900,
  textSubtle: COLOR_HSL.NEUTRAL_600,
  textDisabled: COLOR_HSL.NEUTRAL_300,
  
  // Couleurs d'état
  hover: COLOR_HSL.NEUTRAL_200,
  active: COLOR_HSL.NEUTRAL_300,
  disabled: COLOR_HSL.NEUTRAL_200,
  disabledForeground: COLOR_HSL.NEUTRAL_600,
  
  // Couleurs de focus
  focus: COLOR_HSL.BLUE_500,
  focusRing: COLOR_HSL.BLUE_300,
};

// Exportation pour utilisation dans Tailwind
export const tailwindSemanticColors = {
  background: `hsl(${semanticColors.background})`,
  foreground: `hsl(${semanticColors.foreground})`,
  card: `hsl(${semanticColors.card})`,
  'card-foreground': `hsl(${semanticColors.cardForeground})`,
  
  primary: `hsl(${semanticColors.primary})`,
  'primary-foreground': `hsl(${semanticColors.primaryForeground})`,
  'primary-hover': `hsl(${semanticColors.primaryHover})`,
  'primary-active': `hsl(${semanticColors.primaryActive})`,
  'primary-light': `hsl(${semanticColors.primaryLight})`,
  
  secondary: `hsl(${semanticColors.secondary})`,
  'secondary-foreground': `hsl(${semanticColors.secondaryForeground})`,
  'secondary-hover': `hsl(${semanticColors.secondaryHover})`,
  'secondary-active': `hsl(${semanticColors.secondaryActive})`,
  'secondary-light': `hsl(${semanticColors.secondaryLight})`,
  
  accent: `hsl(${semanticColors.accent})`,
  'accent-foreground': `hsl(${semanticColors.accentForeground})`,
  'accent-hover': `hsl(${semanticColors.accentHover})`,
  'accent-active': `hsl(${semanticColors.accentActive})`,
  'accent-light': `hsl(${semanticColors.accentLight})`,
  
  success: `hsl(${semanticColors.success})`,
  error: `hsl(${semanticColors.error})`,
  warning: `hsl(${semanticColors.warning})`,
  info: `hsl(${semanticColors.info})`,
  
  border: `hsl(${semanticColors.border})`,
  'border-hover': `hsl(${semanticColors.borderHover})`,
  
  text: `hsl(${semanticColors.text})`,
  'text-subtle': `hsl(${semanticColors.textSubtle})`,
  'text-disabled': `hsl(${semanticColors.textDisabled})`,
  
  hover: `hsl(${semanticColors.hover})`,
  active: `hsl(${semanticColors.active})`,
  disabled: `hsl(${semanticColors.disabled})`,
  'disabled-foreground': `hsl(${semanticColors.disabledForeground})`,
  
  focus: `hsl(${semanticColors.focus})`,
  'focus-ring': `hsl(${semanticColors.focusRing})`,
};
