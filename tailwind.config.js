/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: "#EBEBEB",
        lightRed: "#FFEDED",
        specialBlue: "#4386A9",
        redError: "#E52F2F",
      },
    },
  },
  plugins: [],
}
