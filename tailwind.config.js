/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        // Tmavý antracit z loga T3
        charcoal: {
          950: '#0d0f0e',
          900: '#161917',
          800: '#1f2320',
          700: '#2c312d',
          600: '#3b413c',
          500: '#525a53',
        },
        // Olivová / stavebně zelená z loga
        olive: {
          50: '#f6f7ee',
          100: '#e9ecd6',
          200: '#d4daae',
          300: '#b8c17d',
          400: '#9da957',
          500: '#7f8c3b',
          600: '#63702c',
          700: '#4c5624',
          800: '#3e4621',
          900: '#353c20',
        },
        // Teplá světle šedá pro pozadí
        sand: {
          50: '#faf9f6',
          100: '#f3f1ea',
          200: '#e7e3d7',
          300: '#d6d0be',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
      },
    },
  },
  plugins: [],
};
