/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "280px",
      md: "720px",
      lg: "1280px",
      xl: "1920px",
    },
    colors: {
      white: "#FFFFFF",
      BlueDark: "#2B2D42",
      RedDark: "#D90429",
      Red: "#EF233C",
      Red66: "#F46E7E",
      Red33: "#FAB6BF",
      Blue66: "#737482",
      Blue33: "#B9BAC1",
      RedDark66: "#E65972",
      RedDark33: "#F2ACB8",
      Light: "#EDF2F4",
      Light66: "#F3F6F8",
      Light33: "#F9FBFB",
      Gray: "#8D99AE",
      Gray66: "#B4BCCA",
      Gray33: "#D9DDE4",
    },
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      }
    }
  },
  plugins: [],
};
