/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      ssm: "425px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#111111",
        secondary: "#f2f2f2",
        accent: "#F13024",
        third: "rgba(50, 64, 255, 0.9831582291119573)",
      },
      boxShadow: {
        custom: "0 0 20px #00fffb, 0 0 40px #008fbc",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
    },
  },
  container: {
    padding: {
      DEFAULT: "15px",
    },
  },
  plugins: ["tailwindcss-textshadow"],
};
