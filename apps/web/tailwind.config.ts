import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { "height": "0" },
          to: { "height": "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { "height": "var(--radix-accordion-content-height)" },
          to: { "height": "0" },
        },
        "collapsible-down": {
          from: { "height": "0" },
          to: { "height": "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { "height": "var(--radix-collapsible-content-height)" },
          to: { "height": "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.3s ease-out",
        "collapsible-up": "collapsible-up 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
