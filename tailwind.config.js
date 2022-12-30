/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        italic: ["MontserratItalic", "sans-serif"],
        sans: ["Montserrat", "Arial", "sans-serif"],
      },
      colors: {
        primary: {
          pink: "#F9A8D4",
          purple: "#9D50BB",
        },
        secondary: {
          pink: "#FEE2E2",
          purple: "#E0BBE4",
          white: "#ffffffbf",
          wheat: "#c9ada7",
          darkText: "#4a4e69",
        },
        background: {
          light: "#F9FAFB",
          dark: "#22223b",
          semiWhite: "#f2e9e4",
        },
      },
    },
  },
  variants: {
    extend: {},
  },

  plugins: [],
};
