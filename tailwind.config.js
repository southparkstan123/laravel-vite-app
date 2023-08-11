const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    'resources/ts/**/*.{ts,js,vue}'
  ],
  theme: {
    fontFamily: {},
    extend: {
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [],
}