/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./js/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        padauk: ["Padauk", "sans-serif"],
        ubuntu: ["Ubuntu Sans", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#cce4f0",
          200: "#99c9e2",
          300: "#66add3",
          400: "#3392c5",
          500: "#0077b6",
          600: "#005f92",
          700: "#00476d",
          800: "#003049",
          900: "#001824",
        },
      },
    },
  },
  plugins: [],
};
