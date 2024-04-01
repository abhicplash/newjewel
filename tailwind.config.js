/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rampart: ["Rampart One", "cursive"],
        Head: ["Quattrocento Sans", "sans-serif"],
        org: ["Playfair Display", "serif"]
      },
      backgroundImage: {
        model1: "url('/src/Assets/home/one.jpeg')"
      }
    }
  },
  plugins: []
};
