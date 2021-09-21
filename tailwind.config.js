module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkBg: '#03111B',
        darkCard: '#0F161E',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
