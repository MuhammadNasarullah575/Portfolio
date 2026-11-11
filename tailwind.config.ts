import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#00ff9c",
          500: "#00ff9c",
          hover: "#00e68d",
        },
        cyberBlue: {
          DEFAULT: "#00b3ff",
          500: "#00b3ff",
        },
        darkBg: "#050505",
        surface: "#0d1117",
        borderDark: "#1f2933",
        textMuted: "#9da7b3",
      },
      fontFamily: {
        header: ["var(--font-orbitron)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "floating-tilt": "floatingTilt 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        floatingTilt: {
          "0%, 100%": { transform: "rotateX(10deg) rotateY(-10deg) translateY(0px)" },
          "25%": { transform: "rotateX(-5deg) rotateY(15deg) translateY(-10px)" },
          "50%": { transform: "rotateX(-15deg) rotateY(-5deg) translateY(0px)" },
          "75%": { transform: "rotateX(5deg) rotateY(10deg) translateY(10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.6" },
        }
      }
    },
  },
  plugins: [],
};
export default config;
