/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        cinzel: ['var(--font-cinzel)'],
        raleway: ['var(--font-raleway)'],
        sans: ['var(--font-raleway)'],
      },
      colors: {
        /* Couleurs primitives */
        lightNeutral: "hsl(var(--color-light-neutral))",
        blue: "hsl(var(--color-blue))",
        green: "hsl(var(--color-green))",
        amber: "hsl(var(--color-amber))",
        purple: "hsl(var(--color-purple))",
        
        /* Couleurs sémantiques */
        background: "hsl(var(--color-background))",
        foreground: "hsl(var(--color-text-primary))",
        
        primary: {
          DEFAULT: "hsl(var(--color-primary))",
          hover: "hsl(var(--color-primary-hover))",
          foreground: "hsl(var(--color-primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--color-secondary))",
          hover: "hsl(var(--color-secondary-hover))",
          foreground: "hsl(var(--color-secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--color-accent))",
          hover: "hsl(var(--color-accent-hover))",
          foreground: "hsl(var(--color-accent-foreground))",
        },
        border: "hsl(var(--color-border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        /* Classes de texte */
        text: {
          primary: "hsl(var(--color-text-primary))",
          secondary: "hsl(var(--color-text-secondary))",
        },
        
        /* Pour rétrocompatibilité - conserver ces noms */
        calcaire: "hsl(var(--calcaire))",
        mediterranee: "hsl(var(--mediterranee))",
        olive: "hsl(var(--olive))",
        ocre: "hsl(var(--ocre))",
        lavande: "hsl(var(--lavande))",
        decorative: "hsl(var(--decorative))",
        hover: "hsl(var(--hover))",
        
        /* Couleurs pour Shadcn UI */
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
