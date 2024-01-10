import plugin from "tailwindcss/plugin";
import { PluginOptions } from "../types/plugin";
import { deluxeUIColors } from "./colors";

const getTheme = {
  grayColor: deluxeUIColors.grayColor,
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
  return plugin(() => {}, {
    theme: {
      extend: {
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          "collapsible-down": "collapsible-down 0.3s ease-out",
          "collapsible-up": "collapsible-up 0.3s ease-out",
          "indeterminated-progress":
            "indeterminate-progress 1s infinite linear",
        },
        backgroundColor: {
          deluxe: getTheme.grayColor[config.grayColor ?? "neutral"],
        },
        borderColor: {
          deluxe: getTheme.grayColor[config.grayColor ?? "neutral"],
        },
        textColor: {
          deluxe: getTheme.grayColor[config.grayColor ?? "neutral"],
        },
        borderRadius: {
          deluxe: getTheme.borderRadius[config.borderRadius ?? "md"],
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
          "indeterminate-progress": {
            "0%": { transform: " translateX(0) scaleX(0)" },
            "40%": { transform: "translateX(0) scaleX(0.7)" },
            "100%": {
              transform: "translateX(100%) scaleX(0.4)",
            },
          },
        },
      },
    },
  });
};
