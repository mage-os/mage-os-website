const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,ts,vue}'
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.orange[600],
        secondary: colors.orange[400],
      },
    },
    fontFamily: {
      sans: [
        'Montserrat',
        ...fontFamily.sans
      ],
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
