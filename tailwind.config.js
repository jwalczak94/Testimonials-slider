module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundSize: {
        "50%": "3.75rem",
        imageBg: "110%",
      },
      colors: {
        fontColor600: "hsl(240, 38%, 20%)",
        fontColor300: "hsl(240, 18%, 77%)",
      },
      fontFamily: {
        bodyFont: ["Inter", "sans-serif"],
      },
      fontSize: {
        base: "15px",
        lg: "clamp(1.125rem, 0.2901rem + 3.5623vw, 2rem);",
      },
      boxShadow: {
        icon: "0px 15px 20px -10px rgba(36, 36, 113, 0.099);",
      },
      screens: {
        xxl: "1200px",
      },
    },
  },
  plugins: [],
};
