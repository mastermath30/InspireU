import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/lib/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "var(--bg-base)",
        elevated: "var(--bg-elevated)",
        deep: "var(--bg-deep)",
        gold: {
          DEFAULT: "var(--gold)",
          bright: "var(--gold-bright)",
          soft: "var(--gold-soft)",
        },
      },
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        muted: "var(--text-muted)",
        gold: {
          DEFAULT: "var(--gold)",
          bright: "var(--gold-bright)",
          soft: "var(--gold-soft)",
        },
      },
      backgroundColor: {
        base: "var(--bg-base)",
        elevated: "var(--bg-elevated)",
        deep: "var(--bg-deep)",
      },
      borderColor: {
        "gold-subtle": "var(--border-subtle)",
        gold: "var(--gold)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      letterSpacing: {
        "tighter-display": "-0.02em",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 700ms ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
