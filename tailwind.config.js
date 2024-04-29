/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        iGray:"#f8f8f8",
        iDarkBlue:"#304960",
        iOrange:"#FC7A1E",
        iGreen:"#38a3a5",
      }
      
    },
    fontFamily: {
      "signature": ["Great Vibes","cursive"],
      "rennieBeanie": ["Rennie Beanie","cursive"],
      "tiltWrap": ["Tilt Warp","sans-serif"],
      "ubuntu": ["Ubuntu","sans-serif"],
    },

    

  },
  plugins: [],
  plugins: [require("daisyui")],
}

