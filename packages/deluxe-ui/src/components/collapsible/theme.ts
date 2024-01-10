import { tv } from "tailwind-variants";
import { VariantProps } from "tailwind-variants";

export const collapsibleTheme = tv({
  slots: {
    trigger: "",
    content:
      "data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden px-4 py-0.5 pb-0 text-sm transition-all",
  },
});

export type CollapsibleTheme = VariantProps<typeof collapsibleTheme>;
