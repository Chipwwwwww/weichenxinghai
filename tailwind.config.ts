import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: "#0a0f1e",
          cyan: "#00d4ff",
          gold: "#d4a843",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-tc)", "system-ui", "sans-serif"],
      },
      animation: {
        twinkle: "twinkle 6s ease-in-out infinite",
        drift: "drift 14s linear infinite",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.18" },
          "50%": { opacity: "0.7" },
        },
        drift: {
          "0%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-12px) translateX(6px)" },
          "100%": { transform: "translateY(0px) translateX(0px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
