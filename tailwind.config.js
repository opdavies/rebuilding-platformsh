const { variants } = require('tailwindcss/defaultConfig')
const { fontFamily, spacing } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    rotate: {
      '-90': '-90deg'
    },
    extend: {
      colors: {
        charade: '#2a293c',
        'gun-powder': '#414054',
        inherit: 'inherit',
        periwinkle: '#d8e2f0'
      },
      fontFamily: {
        sans: [
          'Open Sans',
          ...fontFamily.sans
        ]
      }
    }
  },
  variants: {
    backgroundColor: [...variants.backgroundColor, 'hocus', 'group-hocus'],
    textDecoration: [...variants.textDecoration, 'group-hover', 'hocus', 'group-hocus']
  },
  plugins: [
    require('tailwindcss-interaction-variants')(),
    require('tailwindcss-spaced-items')({ values: spacing }),
    require('tailwindcss-transforms')(),
    require('tailwindcss-visuallyhidden')()
  ]
}
