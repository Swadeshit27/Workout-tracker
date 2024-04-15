/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Roboto": ['Roboto', "sans-serif"],
        "Montserrat": ["Montserrat", "sans-serif"],
        "Quicksand": ["Quicksand", "sans-serif"]
      },
      colors: {
        lightGray: '#7F7F7F',
        lighterGray: '#787878',
        lightestGray: '#F1F1F1',
        link: '#93A9FF',
        mediumBlack: '#2C2B2B'
      }
    },
    backgroundImage: {
      btnGradient: "linear-gradient(270deg, #7B91FF 0%, #95BEFF 100%)",
      btn2Gradient: "linear-gradient(90.95deg, #E9B1E0 0.79%, #D3A5F2 99.18%)",
      dateGradient: " linear-gradient(270deg, #8DA4FF -0.62%, #D1DBFF 100.68%)",
      textBgGradient: "linear-gradient(90.07deg, rgba(129, 157, 255, 0.28) 5.94%, rgba(16, 16, 16, 0) 76.45%)",
    },
    boxShadow: {
      cardShadow: '-4px 8px 25px -8px #00000026',
      btnShadow: '0px 4px 6.5px 0px #00000026'
    }
  },
  plugins: [],
}