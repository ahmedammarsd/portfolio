/** @type {import('tailwindcss').Config} */
export default {
  prefix: "tw-",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "450px" },
    },
    extend: {
      backgroundColor: {
        "dark-one": "#020c1b",
        "light-green": "#64FFDA",
        "light-two-green": "#64FFDA",
        "transparent-black": "rgba(0,0,0,0.3)",
        "transparent-black-5": "rgba(0,0,0,0.5)",
      },
      fontFamily: {
        notoSans: `"Noto Sans",
        serif`,
        ubuntu: `"Ubuntu",
        serif`,
      },
      // fontSize: {
      //   "h1-fluid": "clamp(2rem, 5vw, 4rem)", // 32px–64px
      //   "h2-fluid": "clamp(1.75rem, 4vw, 3.5rem)",
      //   "h3-fluid": "clamp(1.5rem, 3vw, 2.5rem)",
      // },
      fontSize: {
        xxs: ["0.625rem", { lineHeight: "1rem" }], // 10px
        "fluid-h1": "clamp(2rem, 5vw + 1rem, 4rem)",
        "fluid-h2": "clamp(1.75rem, 4vw + 0.5rem, 3rem)",
        "fluid-h3": "clamp(1.5rem, 3vw + 0.5rem, 2.5rem)",
        "fluid-base": "clamp(1rem, 2vw + 0.5rem, 1.25rem)",
        "fluid-sm": "clamp(0.875rem, 1vw + 0.25rem, 1rem)",
      },
      borderColor: {
        "light-green": "#64FFDA",
        "light-two-green": "#64FFDA",
      },
      textColor: {
        "light-green": "#64FFDA",
        "light-two-green": "#64FFDA",
        "middle-grey": "#A8B2D1",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
    },
  },
  plugins: [],
};
