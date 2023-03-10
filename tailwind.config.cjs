/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        xxs: "375px",
      },
      boxShadow: {
        click: "inset 5px 5px 10px -3px rgba(0, 0, 0, 0.7)",
      },
      colors: {
        regalBlue:
          "linear-gradient(90ged, #7964de, #ad6ce5, #db75eb, #f395ae, #fab466)",
      },
    },
  },
  plugins: [],
};
