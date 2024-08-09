/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
    theme: {
      colors: {
        bgblue: '#0C2D48',
        bgtext:'#B1D4E0',
        subtext: '#F1F1F1',
      },
    extend: {},
  },
  plugins: [],
}

