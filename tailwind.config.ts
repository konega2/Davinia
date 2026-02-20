import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0a0a0a",
          beige: "#d5c3a1",
          white: "#f5f5f5",
          muted: "#8e8575",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      boxShadow: {
        luxe: "0 0 0 1px rgba(213,195,161,.24), 0 24px 60px rgba(0,0,0,.45)",
      },
    },
  },
  plugins: [],
};
export default config;
