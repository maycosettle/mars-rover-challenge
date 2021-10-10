module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f6f5fe',
          100: '#edebfd',
          200: '#d3cefa',
          300: '#b8b0f6',
          400: '#8274f0',
          500: '#4d39e9',
          600: '#4533d2',
          700: '#3a2baf',
          800: '#2e228c',
          900: '#261c72',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
};
