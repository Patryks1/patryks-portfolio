module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: '#222831',
        secondary: {
          0: '#DDDDDD',
          500: '#e8437f',
          200: '#F05454'
        }
      },
      textColor: {
        primary: '#e8437f',
        secondary: '#ecf0f1',
        accent: '#30475E',
        white: '#DDDDDD',
        black: '#222831'
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  },
  plugins: []
};
