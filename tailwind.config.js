module.exports = {
  purge: {
    enabled: true,
    content: ["./**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "100rem": "80rem",
      },
      colors: {
        custom1: "#9F0A28",
        custom2: "#D55C2B",
        custom3: "#F6E7D3",
        custom4: "#24B694",
      },
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
