const Color = require('color')

const lighten = (clr, val) => Color(clr).lighten(val).rgb().string()
const darken = (clr, val) => Color(clr).darken(val).rgb().string()

module.exports = {
purge: [
    './public/*.html',
    // './resources/**/*.blade.php',
    // './resources/**/*.js',
    // './resources/**/*.vue',
  ],
  darkMode: false,
  theme: {
    extend: {
        fontFamily: {
            'main': ['Raleway', 'sans-serif'],
            'heading': ['Quicksand', 'sans-serif']
        },
        colors: {
            accent1: {
              DEFAULT: '#d7384e',
              lighter: lighten('#d7384e', 0.1),
              darker: darken('#d7384e', 0.1)
            },
            accent2: '#393e46',
        },
        spacing: {
            '01': '1px'
        }
    },
  },
  variants: {
    extend: {
        transitionProperty: ['group-hover'],
        transform: ['group-hover'],
        rotate: ['group-hover'],
        scale: ['group-hover'],
        visibility: ['group-hover'],
        display: ['group-hover'],
        grayscale: ['group-hover']
    },
  },
  plugins: [],
}
