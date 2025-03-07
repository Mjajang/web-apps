/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        background: "#FAFAFC",
        red: {
          apple: "#b64400",
        },
        black: {
          apple: "#1d1d1f",
        },
        blue: {
          apple: "#0066CC",
        },
        space: {
          "finish-space-black": "#2E2C2E",
          "finish-silver": "#E3E4E5",
        },
      },
      fontSize: {
        xxs: ["10px", "12px"],
        heading: ["80px", "84px"],
        subheading: ["28px", "32px"],
      },
      backgroundImage: {
        slider1: "url('/src/assets/produktif.jpg')",
      },
    },
  },
  plugins: [],
};
