/** @type {import('tailwindcss').Config} */
// Brand tokens are sampled from the Efyion Dx logo. Change them here and the
// whole site updates.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070B3A',
          900: '#0B1152', // logo navy — headings, dark sections
          800: '#141C66',
          700: '#1E2A80',
        },
        azure: {
          600: '#2447C9', // medical blue — links, focus, secondary accents
          500: '#3560E0',
          100: '#E3EBFD',
          50: '#F1F5FE',
        },
        violet: {
          700: '#621C99',
          600: '#7A24B8', // logo purple — used sparingly as accent
          500: '#9340CF',
          100: '#F1E6FA',
        },
        mist: '#F3F6FB', // light section background
        line: '#DFE5EF', // hairlines and borders
        ink: '#48527A', // body text
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans Variable',
          'Plus Jakarta Sans',
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
        display: [
          'Plus Jakarta Sans Variable',
          'Plus Jakarta Sans',
          'Manrope Variable',
          'sans-serif',
        ],
      },
      maxWidth: { site: '80rem' },
      borderRadius: { tube: '999px 999px 2rem 2rem' },
      boxShadow: {
        soft: '0 1px 2px rgba(11,17,82,.04), 0 12px 32px -12px rgba(11,17,82,.14)',
        lift: '0 2px 4px rgba(11,17,82,.05), 0 24px 48px -16px rgba(11,17,82,.22)',
      },
    },
  },
  plugins: [],
};
