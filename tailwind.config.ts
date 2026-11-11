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
        primary: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
        },
        brand: {
          blue: "#2563eb",
          indigo: "#4f46e5",
          violet: "#7c3aed",
          emerald: "#10b981",
          cyan: "#06b6d4",
          amber: "#f59e0b",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 5s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        }
      }
    },
  },
  plugins: [],
};
export default config;
