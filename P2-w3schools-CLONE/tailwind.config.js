/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: `jit`,
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        containerColor: `#0D1721`,
        lightGreen: `#04AA6D`,
        darkGreen: `#059862`,
        bgFreeWeb: `#FFF4A3`,
        bgHoverFree: `#FFF080`,
        bgGetCerti: `#FFC0C7`,
        bgHoverGet: `#FFB3BB`,
        bgHoverPro: `#0D1721`,
      },
    },
  },
  plugins: [],
};
