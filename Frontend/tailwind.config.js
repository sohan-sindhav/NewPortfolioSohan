module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', "sans-serif"],
        mono: ['"Fira Code"', "monospace"],
      },
      colors: {
        primary: {
          DEFAULT: "#6EE7B7",
          50: "#E6FCF5",
          100: "#C3FAE8",
          200: "#96F2D5",
          300: "#6EE7B7",
          400: "#48D89B",
          500: "#20C997",
          600: "#1AAE84",
          700: "#168F6F",
          800: "#117055",
          900: "#0D4D3B",
        },
        dark: {
          DEFAULT: "#0F172A",
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        accent: {
          DEFAULT: "#7C3AED",
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
        },
      },
    },
  },
  plugins: [],
};
