import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customDark: "#1a1a1a", // a very dark custom color
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%", "border-color": "transparent" },
        },
        blink: {
          "0%, 100%": { "border-color": "transparent" },
          "50%": { "border-color": "white" },
        },
        bars: {
          "0%": { width: "0px" }, // Start at 100px width
          "100%": { width: "100%" }, // Animate to 500px width
        },
        shiftRight: {
          "0%": {
            transform: "translateX(-200px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        shiftTop: {
          "0%": {
            transform: "translateY(50px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        typing: "typing 1s steps(10) forwards 2s",
        blink: "blink 0.75s step-end infinite",
        bars: "bars 1s ease-in-out forwards",
        "bars-delayed-1": "bars 1s ease-in-out forwards .5s",
        "bars-delayed-2": "bars 1s ease-in-out forwards 1s",
        shiftRight: "shiftRight 900ms ease-in-out forwards 300ms",
        shiftTop: "shiftTop 300ms ease-in-out forwards 300ms",
        "shiftTop-2": "shiftTop 1s ease-in-out forwards 500ms",
      },
    },
  },
  plugins: [],
};
export default config;
