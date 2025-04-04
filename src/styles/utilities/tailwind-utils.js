/**
 * Utilitaires Tailwind pour la configuration
 * Ce fichier contient des fonctions utilitaires pour faciliter l'intégration avec Tailwind CSS
 */

// Conversion des variables CSS pour Tailwind
const buildTailwindColorsFromCssVars = (prefix, keys) => {
  const colors = {};
  keys.forEach(key => {
    // Convertit kebab-case en camelCase pour les clés internes
    const kebabToCamel = str => str.replace(/-([a-z])/g, g => g[1].toUpperCase());
    const cssVarName = key.includes('-') ? key : kebabToCamel(key);
    
    colors[key] = `hsl(var(--${prefix}-${cssVarName}) / <alpha-value>)`;
  });
  return colors;
};

// Génère les couleurs standards pour l'interface utilisateur
const generateStandardColors = () => {
  return {
    // Couleurs de base
    background: 'hsl(var(--background) / <alpha-value>)',
    foreground: 'hsl(var(--foreground) / <alpha-value>)',
    card: 'hsl(var(--card) / <alpha-value>)',
    'card-foreground': 'hsl(var(--card-foreground) / <alpha-value>)',
    
    // Couleurs primaires
    primary: 'hsl(var(--primary) / <alpha-value>)',
    'primary-foreground': 'hsl(var(--primary-foreground) / <alpha-value>)',
    'primary-hover': 'hsl(var(--primary-hover) / <alpha-value>)',
    'primary-active': 'hsl(var(--primary-active) / <alpha-value>)',
    'primary-light': 'hsl(var(--primary-light) / <alpha-value>)',
    
    // Couleurs secondaires
    secondary: 'hsl(var(--secondary) / <alpha-value>)',
    'secondary-foreground': 'hsl(var(--secondary-foreground) / <alpha-value>)',
    'secondary-hover': 'hsl(var(--secondary-hover) / <alpha-value>)',
    'secondary-active': 'hsl(var(--secondary-active) / <alpha-value>)',
    'secondary-light': 'hsl(var(--secondary-light) / <alpha-value>)',
    
    // Couleurs d'accent
    accent: 'hsl(var(--accent) / <alpha-value>)',
    'accent-foreground': 'hsl(var(--accent-foreground) / <alpha-value>)',
    'accent-hover': 'hsl(var(--accent-hover) / <alpha-value>)',
    'accent-active': 'hsl(var(--accent-active) / <alpha-value>)',
    'accent-light': 'hsl(var(--accent-light) / <alpha-value>)',
    
    // États
    hover: 'hsl(var(--hover) / <alpha-value>)',
    active: 'hsl(var(--active) / <alpha-value>)',
    disabled: 'hsl(var(--disabled) / <alpha-value>)',
    'disabled-foreground': 'hsl(var(--disabled-foreground) / <alpha-value>)',
    
    // Bordures
    border: 'hsl(var(--border) / <alpha-value>)',
    'border-hover': 'hsl(var(--border-hover) / <alpha-value>)',
    
    // Feedback et notifications
    success: 'hsl(var(--success) / <alpha-value>)',
    error: 'hsl(var(--error) / <alpha-value>)',
    warning: 'hsl(var(--warning) / <alpha-value>)',
    info: 'hsl(var(--info) / <alpha-value>)',
    
    // Composants spécifiques
    navigation: 'hsl(var(--navigation) / <alpha-value>)',
    'navigation-foreground': 'hsl(var(--navigation-foreground) / <alpha-value>)',
    footer: 'hsl(var(--footer) / <alpha-value>)',
    'footer-foreground': 'hsl(var(--footer-foreground) / <alpha-value>)',
  };
};

module.exports = {
  buildTailwindColorsFromCssVars,
  generateStandardColors,
};
