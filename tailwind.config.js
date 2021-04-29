const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class',
  theme: {
    darkSelector: '.mode-dark',
    extend: {
      height: {
        '1/2': '50vh'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-dark-mode')()
  ]
}

