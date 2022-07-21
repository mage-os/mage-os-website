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
        primary: '#F37121',
        secondary: '#FF9234',
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
