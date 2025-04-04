/**
 * Tokens de couleur primitifs pour l'application
 * Ces tokens représentent les valeurs de base sans référence visuelle ou fonctionnelle
 */

// Utilisation de constantes en UPPER_SNAKE_CASE pour les valeurs fixes
// conformément aux règles de nommage dans .windsurfrules
export const COLOR_HSL = {
  // Tons neutres
  NEUTRAL_100: '60 11% 94%',     // Ancien "calcaire" - #F2F2EF
  NEUTRAL_200: '210 11% 85%',    // Gris clair
  NEUTRAL_300: '210 11% 70%',    // Gris moyen
  NEUTRAL_600: '210 11% 30%',    // Gris foncé
  NEUTRAL_900: '210 11% 15%',    // Presque noir
  
  // Couleurs primaires avec variations de tonalité
  BLUE_300: '213 73% 70%',       // Bleu clair
  BLUE_500: '213 73% 59%',       // Ancien "bleuMed"/"mediterranee" - #4A90E2
  BLUE_700: '213 73% 45%',       // Bleu foncé
  
  // Couleurs secondaires
  PURPLE_300: '281 17% 72%',     // Lavande clair
  PURPLE_400: '281 17% 62%',     // Ancien "lavande" - #A58FAA
  PURPLE_600: '281 17% 52%',     // Lavande foncé
  
  // Couleurs d'accent
  GREEN_400: '73 30% 53%',       // Vert olive clair
  GREEN_600: '73 30% 43%',       // Ancien "olive"/"green" - #808F4D
  GREEN_800: '73 30% 33%',       // Vert olive foncé
  
  // Couleurs d'avertissement et notifications
  AMBER_400: '39 96% 53%',       // Ocre clair
  AMBER_500: '39 96% 43%',       // Ancien "ocre"/"amber" - #D98E04
  AMBER_600: '39 96% 33%',       // Ocre foncé
  
  // Couleurs fonctionnelles
  SUCCESS_500: '120 50% 40%',    // Vert succès
  ERROR_500: '0 84% 60%',        // Rouge erreur
  WARNING_400: '30 84% 60%',     // Orange avertissement
  INFO_500: '200 84% 60%',       // Bleu information
  
  // Couleurs de base
  WHITE: '0 0% 100%',
  BLACK: '0 0% 0%',
  
  // Couleurs pour graphiques
  CHART_1: '12 76% 61%',
  CHART_2: '173 58% 39%', 
  CHART_3: '197 37% 24%',
  CHART_4: '43 74% 66%',
  CHART_5: '27 87% 67%',
};

// Exportation des valeurs RGB pour utilisation dans des contextes non-CSS
export const colorRgb = {
  // Conversion manuelle pour les couleurs principales (optimisation)
  white: { r: 255, g: 255, b: 255 },
  black: { r: 0, g: 0, b: 0 },
  neutral100: { r: 242, g: 242, b: 239 },
  primary500: { r: 74, g: 144, b: 226 },
  secondary400: { r: 165, g: 143, b: 170 },
  accent600: { r: 128, g: 143, b: 77 },
  warning500: { r: 217, g: 142, b: 4 },
};

// Exportation des valeurs HEX pour compatibilité avec certaines bibliothèques
export const colorHex = {
  neutral100: '#F2F2EF',
  neutral200: '#D8DCE1',
  neutral600: '#4D5966',
  
  primary500: '#4A90E2',
  secondary400: '#A58FAA',
  accent600: '#808F4D',
  warning500: '#D98E04',
  
  success500: '#278148',
  error500: '#E53535',
  warning400: '#F0923F',
  info500: '#3B9ADE',
  
  white: '#FFFFFF',
  black: '#000000',
};
