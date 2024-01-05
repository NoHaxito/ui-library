import plugin from "tailwindcss/plugin";
import theme from "tailwindcss/defaultTheme";
import { PluginOptions } from "../types/plugin";
import { deluxeUIColors } from "./colors";

const getTheme = {
  grayColor: deluxeUIColors.grayColor,
  // borderRadius: {
  //   none: "borderRadius.none",
  //   sm: "borderRadius.sm",
  //   md: "borderRadius.md",
  //   lg: "borderRadius.lg",
  //   xl: "borderRadius.xl",
  //   "2xl": "borderRadius.2xl",
  //   "3xl": "borderRadius.3xl",
  //   full: "borderRadius.full",
  // },
  borderRadius: {
    none: "0px",
    sm: "0.125rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
};

export const deluxeTW = (config: PluginOptions = {}) => {
  return plugin(
    ({ addBase, theme }) => {
      // addBase({
      //   ".deluxe-rounded": {
      //     borderRadius: `${theme(
      //       getTheme.borderRadius[config.borderRadius ?? "md"]
      //     )}`,
      //   },
      // });
    },
    {
      theme: {
        extend: {
          borderRadius: {
            deluxe: getTheme.borderRadius[config.borderRadius ?? "md"],
          },
          backgroundColor: {
            deluxe: getTheme.grayColor[config.grayColor ?? "neutral"],
          },
          keyframes: {
            "accordion-down": {
              from: { height: "0" },
              to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
              from: { height: "var(--radix-accordion-content-height)" },
              to: { height: "0" },
            },
            "collapsible-down": {
              from: { height: "0" },
              to: { height: "var(--radix-collapsible-content-height)" },
            },
            "collapsible-up": {
              from: { height: "var(--radix-collapsible-content-height)" },
              to: { height: "0" },
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
    }
  );
};
