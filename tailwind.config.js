/** @type {import('tailwindcss').Config} */
import typographyPlugin from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: {
              backgroundColor: "",
              padding: 0,
            },
          },
        },
      },
      colors: {
        black: "#0F0F0F",
        white: "#FFFFFF",
        gray1: "#E3E3E3",
        gray2: "#494949",
        gray3: "#333333",
        gray4: "#1D1D1D",
        gray5: "#2E2E2E",
        gray6: "#8E8E8E",
        pink: "#FF5678",
        lpink: "#FF8AA1",
        green: "#4CBE9C",
        lgreen: "#5DE9BF",
        lblue: "#B8DCE1",
        blue: "#3BCBE1",
        yellow: "#FDD11A",
        purple: "#C792EA",
        lpurple: "#DCC7EA",
      },
      fontFamily: {
        display: [["Tanker", "sans-serif"]],
        body: ["Oxygen", "sans-serif"],
      },
      gridTemplateColumns: {
        projects_lg: "repeat(auto-fit, minmax(400px, 1fr))",
        projects_sm: "repeat(auto-fit, minmax(300px, 1fr))",
      },
      gridTemplateRows: {
        projects: "repeat(3, min-content)",
      },
      screens: {
        sm: "450px",
      },
    },
  },
  plugins: [
    typographyPlugin,
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-hide": {
          /* Hide scrollbar for Chrome, Safari and Opera */
          "&::-webkit-scrollbar": {
            display: "none",
          },
          /* Hide scrollbar for IE, Edge and Firefox */
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
  safelist: [
    {
      pattern: /bg-green/,
    },
  ],
};
