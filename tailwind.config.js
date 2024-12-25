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
      },
      fontFamily: {
        notoSans: `"Noto Sans",
        serif`,
        ubuntu: `"Ubuntu",
        serif`,
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
