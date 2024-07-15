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
        display: [["Oswald", "sans-serif"]],
        body: ["Oxygen", "sans-serif"],
        handwriting: ["Oswald", "sans-serif"],
      },
      gridTemplateColumns: {
        projects: "repeat(auto-fit, minmax(300px, 1fr))",
      },
      gridTemplateRows: {
        projects: "repeat(3, min-content)",
      },
      screens: {
        sm: "450px",
      },
    },
  },
  plugins: [typographyPlugin],
  safelist: [
    {
      pattern: /bg-green/,
    },
  ],
};
