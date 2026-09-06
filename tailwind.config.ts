import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: "#0D0D0D",
          black: "#000000",
          window: "#1A1A1A",
          titlebar: "#2B2B2B",
          text: "#E6E6E6",
          dim: "#888888",
          comment: "#555555",
          green: "#28C840",
          yellow: "#FEBC2E",
          red: "#FF5F56",
          blue: "#5DADE2",
          magenta: "#C678DD",
          cyan: "#56B6C2",
        },
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "Fira Code", "SF Mono", "Menlo", "monospace"],
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "fade-in": "fadeIn 0.5s ease-in-out forwards",
        "scan-line": "scanLine 8s linear infinite",
        flicker: "flicker 0.15s infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.97" },
        },
      },
      boxShadow: {
        terminal: "0 25px 80px -10px rgba(0, 255, 100, 0.08), 0 10px 40px rgba(0,0,0,0.7)",
        glow: "0 0 20px rgba(40, 200, 64, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
