const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class', // This can be 'media' if preferred.
  // Don't add a glob below `public` as Rollup doesn't
  // recognize them and will rebuild in an infinite loop.
  content: [
    './src/**/*.svelte',
    './src/**/*.html',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        white: colors.white,
        gray: colors.gray,
      },
    },
  },
  plugins: [],
}
