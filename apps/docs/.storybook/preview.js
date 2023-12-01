import {
  withThemeByClassName,
  withThemeByDataAttribute,
} from "@storybook/addon-themes";
import "@sihaxito/deluxe-ui/styles.css";

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-mode",
  }),
];
