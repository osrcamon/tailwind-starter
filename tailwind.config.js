const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./index.{html,js}"],
  theme: {
    extend: {
      colors: {
        red: colors.red,
        yellow: colors.amber,
        black: colors.black,
        white: colors.white,
        gray: colors.coolGray,
        transparent: 'transparent'
      }
    },
    
  },
  plugins: [],
}
