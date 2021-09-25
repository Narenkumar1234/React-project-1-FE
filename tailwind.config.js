module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      gradientwhite:'#D1FAE5',
      green:'#059669',
      white: '#F9FAFB',
      blue: "#6D28D9"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
