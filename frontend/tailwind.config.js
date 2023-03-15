/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkgreen: "#05ACB0",
        purple: "#272350",
        red: "#E53750",
        yellow: "#FFAB1D",
      },
      dropShadow: {
        button: "0 20px 40px rgba(0, 0, 0, 0.1)",
        filter: "0px 7px 15px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
