import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#4338ca", foreground: "#f8fafc" },
        background: "#f8f4ef",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "system-ui", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
