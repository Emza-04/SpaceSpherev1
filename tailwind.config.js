
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f8ff',
          100: '#e0f0fe',
          200: '#bae2fd',
          300: '#7dcbfa',
          400: '#37b1f6',
          500: '#1593e6', // Primary Blue
          600: '#0676c7',
          700: '#055e9f',
          800: '#085084',
          900: '#0d436d',
          950: '#092a47',
        },
        ink: {
          DEFAULT: '#050505', // Primary Black
          charcoal: '#1e1e1e', // Charcoal
        },
        surface: {
          DEFAULT: '#f4f6f8', // Light Gray
          dark: '#e5e8ec',
        },
        hairline: {
          DEFAULT: '#d9dde3', // Border Gray
        }
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        'xl': '0.75rem', // 12px
        '2xl': '1rem', // 16px
      }
    },
  },
  plugins: [],
}
