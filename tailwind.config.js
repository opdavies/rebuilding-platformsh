const defaultConfig = require('tailwindcss/defaultConfig')

module.exports = {
  theme: {
    extend: {
      colors: {
        charade: '#2a293c',
        'gun-powder': '#414054',
        inherit: 'inherit'
      },
      fontFamily: {
        sans: [
          'Open Sans',
          ...defaultConfig.theme.fontFamily.sans
        ]
      }
    }
  },
  variants: {
    backgroundColor: [...defaultConfig.variants.backgroundColor, 'hocus', 'group-hocus'],
    textDecoration: [...defaultConfig.variants.textDecoration, 'group-hover', 'hocus', 'group-hocus']
  },
  plugins: [
    require('tailwindcss-spaced-items')({ values: defaultConfig.theme.spacing }),
    require('tailwindcss-interaction-variants')(),
    require('tailwindcss-transforms')(),
    require('tailwindcss-visuallyhidden')(),
  ]
}
