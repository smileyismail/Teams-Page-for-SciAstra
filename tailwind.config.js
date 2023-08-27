/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#5300ff",
        lightPurple: "#e7accc",
        customPurple: "#b656e2",
        darkPurple: "#5804A6",
      },
    },
  },
  plugins: [],
};
