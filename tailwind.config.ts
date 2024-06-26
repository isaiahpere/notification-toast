import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        popUp: {
          "0%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        slideIn: "slideIn 1s ease-in-out",
        fadeIn: "fadeIn 0.5s ease-in-out",
        popUp: "popUp 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
