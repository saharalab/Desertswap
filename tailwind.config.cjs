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
        supernova: '#FCE51C',
        paleGrey: '#FDFDFD',
        earlyDawn: '#FFF9E0',
        lightEarlyDawn: '#FFFBEB',
        darkSupernova: '#FFE804',
        moonsoon: '#898989',
        lightGray:  "#373739",
        "black/900": "#1a1a1a", 
        "black/500": "#171716",
      },
      backgroundImage: {
        "liquidity-banner": "url('/assets/icons/liquidity-banner.webp')"
      }
    },
  },
  plugins: [require("daisyui")],
};