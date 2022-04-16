module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts, tsx}",
  ],
  theme: {
    screen: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1170px',
    },
    colors: {
      whiteColor: '#ffffff',
      blackColor: '#000000',
      greenColor: '#26caac',
      greenActiveColor: '#27e0be',
      greenHoverColor: '#1ea088',
      blueColor: '#0d2e69',
      grayColor: '#898da6',
      lighterGrayColor: '#d7d7d7',
      lightGrayColor: '#f4f3f3',
      lightGreenColor: '#6fcf97',
      purpleColor: '#bb6bd9',
      yellowColor: '#FAFE45',
      orangeColor: '#f2994a',
      redColor: '#eb5757',
      lightBlueColor: '#2f80ed',
    },
    container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
        center: true,
    },
    extend: {},
  },
  plugins: [],
}
