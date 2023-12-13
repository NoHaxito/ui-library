import colors from "tailwindcss/colors";

export default {
  darkMode: ["class"],
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx,mdx}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue[500],
        secondary: colors.red[500],
        warning: colors.yellow[500],
        textColor: colors.slate[900],
      },
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
