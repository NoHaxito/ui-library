/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
  plugins: [require("@tailwindcss/typography")],
};
