/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light theme color palette
        white: {
          DEFAULT: '#ffffff',
          50: '#ffffff',
          100: '#fafafa',
          200: '#f5f5f5',
          300: '#f0f0f0',
          400: '#e5e5e5',
          500: '#dadada',
          600: '#cccccc',
          700: '#b8b8b8',
          800: '#a3a3a3',
          900: '#8a8a8a',
        },
        orange: {
          50: '#fff8f1',
          100: '#feecdc',
          200: '#fdd8b5',
          300: '#fdba8c',
          400: '#ff9f56',
          500: '#FF6A00', // Primary
          600: '#D45800', // Dark
          700: '#b54400',
          800: '#8a3300',
          900: '#662500',
          950: '#451a00',
        },
        coral: {
          50: '#fef2f4',
          100: '#fee5e9',
          200: '#fccfd8',
          300: '#faa8ba',
          400: '#f8728d',
          500: '#f43f68',
          600: '#e5195b',
          700: '#D4145A', // Secondary
          800: '#a71246',
          900: '#8e123c',
          950: '#55001e',
        },
        violet: {
          50: '#fcf4ff',
          100: '#f9e9ff',
          200: '#f4d3ff',
          300: '#edb0ff',
          400: '#e47dff',
          500: '#d342ff',
          600: '#c226ff',
          700: '#a410e8',
          800: '#8a15be',
          900: '#701596',
          950: '#4c0075',
        },
        pink: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
        // Main theme colors
        primary: {
          50: '#fff8f1',
          100: '#feecdc',
          200: '#fdd8b5',
          300: '#fdba8c',
          400: '#ff9f56',
          500: '#FF6A00', // Primary
          600: '#D45800', // Dark
          700: '#b54400',
          800: '#8a3300',
          900: '#662500',
          950: '#451a00',
        },
        secondary: {
          50: '#fef2f4',
          100: '#fee5e9',
          200: '#fccfd8',
          300: '#faa8ba',
          400: '#f8728d',
          500: '#f43f68',
          600: '#e5195b',
          700: '#D4145A', // Secondary
          800: '#a71246',
          900: '#8e123c',
          950: '#55001e',
        },
        accent: {
          light: '#f472b6', // pink-400
          dark: '#ec4899', // pink-500
        },
        success: {
          light: '#10b981', // emerald-500
          dark: '#059669', // emerald-600
        },
      },
      fontFamily: {
        sans: ['Inter', 'Satoshi', 'Poppins', 'sans-serif'],
        heading: ['Poppins', 'Satoshi', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'fade-in': 'fadeIn 1.5s ease-in-out',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'glow': 'glow 1.5s ease-in-out infinite alternate',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'gradient-shift': 'gradientShift 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 106, 0, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 106, 0, 0.8)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        }
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.08), 0 10px 20px -2px rgba(0, 0, 0, 0.06)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        'glow': '0 0 15px 2px rgba(255, 106, 0, 0.3)',
        'glow-lg': '0 0 25px 5px rgba(255, 106, 0, 0.4)',
        'orange-xs': '0 0 5px rgba(255, 106, 0, 0.2)',
        'orange-sm': '0 0 10px rgba(255, 106, 0, 0.3)',
        'orange-md': '0 0 15px rgba(255, 106, 0, 0.4)',
        'orange-lg': '0 0 25px rgba(255, 106, 0, 0.5)',
        'orange-xl': '0 0 35px rgba(255, 106, 0, 0.6)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        'grid': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FF6A00' fill-opacity='0.05'%3E%3Cpath d='M0 0h20v20H0V0zm10 10v10H0V10h10zm10 0v10H10V10h10zM10 0v10H0V0h10zm10 0v10H10V0h10z'/%3E%3C/g%3E%3C/svg%3E\")",
        'warm-gradient': 'linear-gradient(to right, #FF6A00, #D4145A)',
        'warm-gradient-to-bottom': 'linear-gradient(to bottom, #FF6A00, #D4145A)',
        'light-gradient': 'linear-gradient(to bottom, #ffffff, #f9f9f9)',
        'wave-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23FF6A00' fill-opacity='0.1' d='M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,69.3C672,64,768,96,864,128C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
      },
      backdropBlur: {
        xs: '2px',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: '#FF6A00',
              '&:hover': {
                color: '#D4145A',
              },
            },
          },
        },
      },
      textShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.1)',
        'DEFAULT': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'lg': '0 8px 16px rgba(0, 0, 0, 0.2)',
        'glow': '0 0 10px rgba(255, 106, 0, 0.7)',
      },
      borderGradient: {
        'warm': 'linear-gradient(to right, #FF6A00, #D4145A)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow-glow': {
          textShadow: '0 0 10px rgba(255, 106, 0, 0.7)',
        },
        '.bg-gradient-warm': {
          background: 'linear-gradient(to right, #FF6A00, #D4145A)',
        },
        '.border-gradient-warm': {
          borderImage: 'linear-gradient(to right, #FF6A00, #D4145A) 1',
        },
        '.bg-gradient-animated': {
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s linear infinite',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} 