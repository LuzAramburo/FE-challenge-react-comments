const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(238, 40%, 52%)',
        'primary-light': 'hsl(239, 57%, 85%)',
        error: 'hsl(358, 79%, 66%)',
        'error-light': 'hsl(357, 100%, 86%)',
      },
    },
    fontFamily: {
      sans: ['"Rubik"', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
