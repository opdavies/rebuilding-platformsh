require('tailwindcss-interaction-variants')

const defaultConfig = require('tailwindcss/defaultConfig')

module.exports = {
  theme: {
    extend: {
      colors: {
        charade: '#2a293c',
        inherit: 'inherit'
      }
    }
  },
  variants: {
    backgroundColor: [...defaultConfig.variants.backgroundColor, 'hocus', 'group-hocus']
  },
  plugins: [
    require('tailwindcss-interaction-variants')(),
  ]
}
