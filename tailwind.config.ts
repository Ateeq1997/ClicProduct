import tailwindAnimate from "tailwindcss-animate";

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../shared/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindAnimate],
};
