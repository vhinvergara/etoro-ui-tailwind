module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    width: {
      70: "17rem",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#393f56",
        secondary: "#323648",
        third: "#282b3a",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
