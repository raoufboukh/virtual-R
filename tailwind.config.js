/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "992px",
      xl: "1180px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        // xl: "40px",
        md: "32px",
      },
    },
    extend: {},
  },
  plugins: [],
};
