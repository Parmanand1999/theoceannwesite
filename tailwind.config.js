/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: "0.7rem",
        sm: "0.875rem", // Small screens (e.g., mobile)
        md: "1rem", // Medium screens (e.g., tablet)
        lg: "1.5rem", // Large screens (e.g., desktop)
        xl: "2.5rem", // Extraa-lrge screens
        "2xl": "3rem",
      },
      // screens: {
      //   "2xl": { max: "1535px" },
      //   // => @media (max-width: 1535px) { ... }

      //   xl: { max: "1279px" },
      //   // => @media (max-width: 1279px) { ... }

      //   lg: { max: "1023px" },
      //   // => @media (max-width: 1023px) { ... }

      //   md: { max: "767px" },
      //   // => @media (max-width: 767px) { ... }

      //   sm: { max: "639px" },
      //   // => @media (max-width: 639px) { ... }
      // }
    },
  },
  plugins: [],
};
