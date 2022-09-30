/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: `jit`,
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: `480px`,
      md: `768px`,
      lg: `976px`,
      xl: `1440px`,
    },
    extend: {
      height: {
        46: "11.25rem",
      },
      colors: {
        contaColor: `#F1F6F9`,
        cardColor: `#14274E`,
        buttonColor: `#394867`,
        hoverColor: `#EA5455`,
      },
    },
  },
  plugins: [],
};
