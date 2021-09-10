const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,ts}'],
  theme: {
    colors: {
      ...colors,
      primary: colors.orange[600],
      secondary: colors.orange[400],
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
