const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '480px',
      ...defaultTheme.screens,
    },
    extend: {
      screens: {
        'lg+': '1072px'
      },
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      colors:{
        // 'light-coffee': '#C89F94', 
        'coffee': {
          50: '#dbcac6',
          200: '#C89F94',
          400: '#a25f4b',
          600: '#371f19'
        }
      },
      keyframes: {
        dropDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        }, 
        fadeIn: {
          from: {opacity: 0,}, 
          to: {opacity: 1,}
        }
      }, 
      animation: {
        dropDown: 'dropDown .5s ease-in-out',
        fadeIn: 'fadeIn .5s ease-in-out'
      },
      letterSpacing: {
        spc2: '2px',
      }
    },
  },
  plugins: [],
}
