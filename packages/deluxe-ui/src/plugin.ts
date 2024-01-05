import plugin from "tailwindcss/plugin";
import theme from "tailwindcss/defaultTheme";
import { PluginOptions } from "./types/plugin";
import { deluxeUIColors } from "./plugin/colors";

const getTheme = {
  grayColor: deluxeUIColors.grayColor,
  borderRadius: {
    none: "borderRadius.none",
    sm: "borderRadius.sm",
    md: "borderRadius.md",
    lg: "borderRadius.lg",
    xl: "borderRadius.xl",
    "2xl": "borderRadius.2xl",
    "3xl": "borderRadius.3xl",
    full: "borderRadius.full",
  },
};

export const deluxeTW = (config: PluginOptions = {}) => {
  return plugin(
    ({ addBase, theme }) => {
      addBase({
        ".deluxe-rounded": {
          borderRadius: `${theme(
            getTheme.borderRadius[config.borderRadius ?? "md"]
          )}`,
        },
      });
    },
    {
      theme: {
        extend: {
          borderRadius: {
            deluxe: theme.borderRadius[config.borderRadius ?? "md"],
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
