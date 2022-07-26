/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        StyreneAWeb: ['Styrene A Web', 'sans-serif'],
      },
      colors: {
        floralWhite: '#FEFAEB',
        supernova: '#FFCC00',
        paleGrey: '#FDFDFD',
        earlyDawn: '#FFF9E0',
        lightEarlyDawn: '#FFF7D4',
        darkSupernova: '#EBBC00',
        moonsoon: '#898989',
        lightGray: "#373739",
        "black/900": "#1a1a1a", 
      },
    },
  },
  plugins: [],
};