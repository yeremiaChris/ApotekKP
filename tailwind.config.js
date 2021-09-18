module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "base-bg": "#F1F2F2",
        "dark-gray": "#f3f3f3",
        "dark-navy": "#8e90a2",
        "light-gray": "#ededed",
        "disable-btn": "#5e6073",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
