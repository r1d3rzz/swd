/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['"Montserrat"', "system-ui", "sans-serif"],
      padauk: ['"Padauk"', "system-ui", "sans-serif"],
    },
  },
  plugins: [require("preline/plugin")],
};
