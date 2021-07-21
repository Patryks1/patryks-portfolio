module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        landing:
          "url('https://images.unsplash.com/photo-1625320014712-cc333e4e93a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
      }),
      backgroundColor: {
        primary: '#222831',
        secondary: {
          0: '#DDDDDD',
          500: '#e84393',
          200: '#F05454'
        }
      },
      textColor: {
        primary: '#e84393',
        secondary: '#ecf0f1',
        accent: '#30475E',
        white: '#DDDDDD',
        black: '#222831'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
