module.exports = {
  mode: "jit",
  purge: [
    './src/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '855px'},
      // => @media (max-width: 855px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'xs': {'max': '480px'},
      // => @media (max-width: 375px) { ... }
    }
  },
  variants: {
    extend: {
      backgroundImage: {
        'test': "url('images/texture_blue.png')",
      }
    },
  },
  plugins: [],
}
