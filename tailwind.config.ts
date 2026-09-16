import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        panel: "rgb(var(--color-panel) / <alpha-value>)",
        panelmuted: "rgb(var(--color-panelmuted) / <alpha-value>)",
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        hairline: "rgb(var(--color-hairline) / <alpha-value>)",
        // Vivid accent — reserved for solid fills (buttons, dots, thick
        // accent bars) where a big block of color carries its own contrast.
        signal: "rgb(var(--color-signal) / <alpha-value>)",
        signaldim: "rgb(var(--color-signaldim) / <alpha-value>)",
        // Theme-safe accent — for text and thin borders, where the vivid
        // orange alone doesn't hold enough contrast against a light
        // background. Same hue, darkened automatically in light mode.
        signalink: "rgb(var(--color-signal-ink) / <alpha-value>)",
        // Fixed dark color for text sitting on top of a solid signal-colored
        // fill (buttons) — stays legible regardless of theme.
        onsignal: "#14130f",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      transitionTimingFunction: {
        "out-quiet": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
