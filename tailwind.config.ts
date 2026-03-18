import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          blue: "#3b82f6",
          green: "#10b981",
          red: "#ef4444",
        },
        neon: {
          blue: "#3b82f6",
          green: "#10b981",
          red: "#ef4444",
        },
        industrial: {
          dark: "#0f0f12",
          panel: "#18181b",
          border: "#27272a",
        },
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "monospace"],
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      animation: {
        "scanline": "scanline 3s linear infinite",
        "glitch": "glitch 0.3s ease-in-out",
        "decrypt": "decrypt 2s steps(40) forwards",
      },
      keyframes: {
        scanline: {
          "0%, 100%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(2px, -2px)" },
          "60%": { transform: "translate(-2px, -2px)" },
          "80%": { transform: "translate(2px, 2px)" },
          "100%": { transform: "translate(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
