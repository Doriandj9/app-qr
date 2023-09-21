/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors:{
        ...colors,
        primary: '#34B298',
        secondary: '#35495D',
        ternary: 'rgb(242 242 242 / 0.1333)',
        complement: ''
      }
    },
  },
  plugins: [],
}

