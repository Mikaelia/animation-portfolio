/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
        green: "#4CBE9C",
        blue: "#3BCBE1",
      },
      fontFamily: {
        display: [["Roboto slab", "sans-serif"]],
        body: ["Roboto slab", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        handwriting: ["Nanum Pen Script"]
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
  plugins: [],
};
