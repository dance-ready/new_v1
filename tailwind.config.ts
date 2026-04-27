import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dk: "#1C1C1A",
        wh: "#FDFCFA",
        cr: "#F7F4EF",
        mi: "#5C5B57",
        ac: "#C8472B",
        al: "#F0E8E5",
        ro: "#d4a8a0",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
