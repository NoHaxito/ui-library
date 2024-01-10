import type { Config } from "tailwindcss";

import { deluxeTW } from "@deluxe/ui";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/@deluxe/ui/dist/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        md: "100%",
        xl: "80rem",
      },
      padding: {
        DEFAULT: "1.5rem",
        md: "2.5rem",
        xl: "2.5rem",
      },
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [deluxeTW({ grayColor: "neutral", borderRadius: "2xl" })],
};
export default config;
