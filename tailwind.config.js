/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'brown':'#D87D4A',
      'brown-off':'#FBAF85',
      'black':'#000000',
      'black-light':'#101010',
      'white':'#FFFFFF',
      'dark-gray':'#979797',
      'gray':'#F1F1F1',
      'light-gray':'#FAFAFA'

    },
    fontSize: {
      xs: ['13px', '25px'],
      sm: ['14px', '25px'],
      base: ['15px', '25px'],
      lg: ['18px', '28px'],
      xl: ['28px', '36px'],
      '2xl': ['40px', '44px'],
      '3xl': ['56px', '58px']

      


    },
    screens:{
      'md': {'max': '1024px'},
    },
    extend: {},
  },
  plugins: [],
}