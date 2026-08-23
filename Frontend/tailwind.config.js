/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Space Grotesk"', "sans-serif"],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', "sans-serif"],
        mono: ['"JetBrains Mono"', '"Fira Code"', "monospace"],
      },
      colors: {
        obsidian: {
          950: "#030712",
          900: "#0B0F19",
          850: "#0F1626",
          800: "#111827",
          750: "#172033",
          700: "#1F2937",
          600: "#374151",
          500: "#4B5563",
        },
        primary: {
          DEFAULT: "#10B981",
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
          950: "#022C22",
        },
        cyber: {
          violet: "#8B5CF6",
          indigo: "#6366F1",
          cyan: "#06B6D4",
          amber: "#F59E0B",
          rose: "#F43F5E",
        },
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(16, 185, 129, 0.3)",
        "glow-violet": "0 0 25px -5px rgba(139, 92, 246, 0.3)",
        "glow-cyan": "0 0 25px -5px rgba(6, 182, 212, 0.3)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 15px rgba(16, 185, 129, 0.2)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(16, 185, 129, 0.4)",
          },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
