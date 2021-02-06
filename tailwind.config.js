module.exports = {
  purge: {
    enabled: false,
    content: ["./**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
        "8xl": "8rem",
      },
      screens: {
        sm: "320px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
