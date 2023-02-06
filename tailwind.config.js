/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content:  ["./**/*.{html,js}"],
  theme: {
    extend: {
       fontFamily: {
                sans: ['Helvetica Neue', ...defaultTheme.fontFamily.sans],
            },
            colors:{
                blue: {
                    600: '#5a26ff'
                },
            }
    },
  },
  plugins: [],
}
