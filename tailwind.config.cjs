/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors:{
      primary:{
        100:"#C2D2FB",
        200:"#6D96FF",
        300:"#1A57F3",
        400:"#042987",
        500:"#0A0414"
      },
      dark:{
        100:"#6A6A6B",
        300:"#40414A",
        500:"#282931",
        700:"#1D1E24",
        900:"#01021B",
      },
      white: "#fff"
    },
    extend: {},
  },
  plugins: [],
};
