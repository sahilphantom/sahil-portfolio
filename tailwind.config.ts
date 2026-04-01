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
        bg: "#080808",
        surface: "#111111",
        "surface-2": "#181818",
        lime: "#3dd9eb",
        coral: "#FF5C4D",
        sky: "#4DCDFF",
        violet: "#B57BFF",
        text: {
          DEFAULT: "#F0EDE8",
          muted: "#6B6864",
        },
        border: "rgba(255,255,255,0.07)",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        tight: "-0.02em",
        wide: "0.05em",
        wider: "0.08em",
        widest: "0.12em",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease both",
        "blink": "blink 2s ease-in-out infinite",
        "marquee": "marquee 20s linear infinite",
        "glow-pulse": "glowPulse 6s ease-in-out infinite",
        "typing-dot": "typingDot 1.4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        glowPulse: {
          "0%, 100%": { transform: "translate(-50%,-50%) scale(1)", opacity: "0.8" },
          "50%": { transform: "translate(-50%,-50%) scale(1.15)", opacity: "1" },
        },
        typingDot: {
          "0%, 60%, 100%": { opacity: "0.4", transform: "translateY(0)" },
          "30%": { opacity: "1", transform: "translateY(-4px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      backgroundImage: {
        "noise": "url('/noise.svg')",
      },
    },
  },
  plugins: [],
};

export default config;
