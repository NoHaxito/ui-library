import type { Config } from "tailwindcss";
import { deluxeTW } from "@deluxe/ui";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "node_modules/@deluxe/ui/dist/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [deluxeTW({ grayColor: "neutral", borderRadius: "lg" })],
};
export default config;
