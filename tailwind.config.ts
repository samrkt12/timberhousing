import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
      colors: {
        primary: {
          light: "#EB6A4E",
          base: "#D75438",
          dark: "#BD442B",
        },
        secondary: {
          light: "#856D93",
          base: "#4A3456",
          dark: "#2D1F34",
          darkest: "#352E39",
        },
        whites: {
          light: "#FFFFFF",
          base: "#ECECEC",
          grey: "#424242",
          dark: "#222222",
          darkest: "#1E1E21",
        },
      },
    },
  },
  plugins: [],
};
export default config;
