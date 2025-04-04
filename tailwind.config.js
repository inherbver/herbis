/** @type {import('tailwindcss').Config} */
const { generateStandardColors } = require('./src/styles/utilities/tailwind-utils');

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './globals.css' // Ajout de globals.css pour reconnaître les variables CSS
  ],
  safelist: [
    // Classes essentielles pour les composants de navigation
    'bg-navigation',
    'text-navigation-foreground',
    'bg-footer',
    'text-footer-foreground',
    
    // Classes primaires, secondaires et d'accent
    'bg-primary',
    'text-primary-foreground',
    'bg-secondary',
    'text-secondary-foreground',
    'bg-accent',
    'text-accent-foreground',
    
    // États d'interaction
    'hover:bg-primary-hover',
    'hover:bg-secondary-hover',
    'hover:bg-accent-hover',
    'active:bg-primary-active',
    'active:bg-secondary-active',
    'active:bg-accent-active',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        cinzel: ['var(--font-cinzel)'],
        raleway: ['var(--font-raleway)'],
        sans: ['var(--font-raleway)']
      },
      colors: generateStandardColors(),
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
