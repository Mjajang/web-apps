/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        yellow: "#F4D04E",
        grey: "#7F7F7F",
      },
      fontSize: {
        small: "14px",
        medium: "16px",
        heading: "24px",
      },
    },
  },
  plugins: [],
};
