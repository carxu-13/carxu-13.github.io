/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        bgblue: "#0B1220",
        midblue: "#101B2E",
        bgtext: "#8AD0E8",
        subtext: "#C9D6E3",
        surface: "#151F33",
        accent: "#6EE7F9",
        warm: "#F7C59F",
      },
      fontFamily: {
        display: ['"Fraunces"', "serif"],
        body: ['"Space Grotesk"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(110, 231, 249, 0.25)",
      },
    },
  },
  plugins: [],
}
