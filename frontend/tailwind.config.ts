import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Fintech Color Palette
        background: '#F5F6F2',
        text: '#0B0B0B',
        subtext: '#2C2C2C',
        accent: '#E9F460',
        'card-dark': '#111111',
        success: '#21C45A',
        gray: {
          50: '#F5F6F2',
          100: '#E5E7E3',
          200: '#CBCFC9',
          300: '#B1B7AF',
          400: '#777F75',
          500: '#5C635A',
          600: '#444444',
          700: '#2C2C2C',
          800: '#1A1A1A',
          900: '#0B0B0B',
        },
        // Keep shadcn compatibility
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: '#E9F460',
          foreground: '#0B0B0B',
        },
        secondary: {
          DEFAULT: '#111111',
          foreground: '#F5F6F2',
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: '#E5E7E3',
          foreground: '#2C2C2C',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#0B0B0B',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#0B0B0B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        lg: '16px',
        md: '12px',
        sm: '8px',
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(0, 0, 0, 0.08)',
        'lift': '0 4px 30px rgba(0, 0, 0, 0.12)',
        'accent': '0 4px 20px rgba(233, 244, 96, 0.3)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
