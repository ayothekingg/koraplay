/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7E3FEA",
        buttonBG: "#15072E",
      },

      fontFamily: {
        abeze: ["ABeeZee", "sans-serif"],
      },
    },
    plugins: [],
    darkMode: "class",
  },
};
