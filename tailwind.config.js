/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        base: {
          950: "#070B14",
          900: "#0B1120",
          800: "#111A2E",
          700: "#1A2540",
        },
        accent: {
          DEFAULT: "#38BDF8",
          violet: "#8B5CF6",
          emerald: "#34D399",
        },
      },
      backgroundImage: {
        "grid-slate":
          "linear-gradient(to right, rgba(148,163,184,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.07) 1px, transparent 1px)",
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0" } },
      },
    },
  },
  plugins: [],
};
