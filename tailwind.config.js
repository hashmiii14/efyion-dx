/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Deep authoritative medical navy for titles and dark sections
        navy: {
          950: '#07101E',
          900: '#0F2147',
          800: '#162C5B',
          700: '#1E3A8A',
        },
        // Clinical medical blue for primary buttons, links, accents
        medical: {
          900: '#0F2147',
          800: '#163366',
          700: '#1D4ED8',
          600: '#2563EB', // main medical blue
          500: '#3B82F6',
          400: '#60A5FA',
          300: '#93C5FD',
          200: '#BFDBFE',
          100: '#DBEAFE',
          50: '#EFF6FF',
        },
        // Clean azure / cyan-blue for secondary medical elements
        azure: {
          600: '#0284C7',
          500: '#0EA5E9',
          200: '#BAE6FD',
          100: '#E0F2FE',
          50: '#F0F9FF',
        },
        // Violet alias mapped strictly to clinical medical blue to purge all purple
        violet: {
          900: '#0F2147',
          800: '#163366',
          700: '#1D4ED8',
          600: '#2563EB',
          500: '#3B82F6',
          400: '#60A5FA',
          300: '#93C5FD',
          200: '#BFDBFE',
          100: '#DBEAFE',
          50: '#EFF6FF',
        },
        mist: '#F8FAFC', // Slate-50: Crisp, clean, clinical white-gray background
        line: '#E2E8F0', // Slate-200: Subtle hairline borders
        ink: '#334155',  // Slate-700: High-readability professional body copy
      },
      fontFamily: {
        sans: [
          'Manrope Variable',
          'Manrope',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Arial',
          'sans-serif',
        ],
      },
      maxWidth: { site: '80rem' },
      boxShadow: {
        subtle: '0 1px 3px 0 rgba(15, 33, 71, 0.05), 0 1px 2px -1px rgba(15, 33, 71, 0.03)',
        soft: '0 4px 6px -1px rgba(15, 33, 71, 0.06), 0 2px 4px -2px rgba(15, 33, 71, 0.04)',
        lift: '0 10px 25px -3px rgba(15, 33, 71, 0.08), 0 4px 6px -4px rgba(15, 33, 71, 0.03)',
      },
    },
  },
  plugins: [],
};
