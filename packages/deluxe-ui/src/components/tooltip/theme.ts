import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

const content = tv({
  base: "z-50 data-[side=top]:mb-1 data-[side=right]:ml-1 data-[side=bottom]:mt-1 data-[side=left]:mr-1 duration-300 overflow-hidden rounded-lg border border-deluxe-200 bg-white px-3 py-1.5 text-sm text-deluxe-950 shadow-md animate-in fade-in-0 zoom-in-90 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-90 dark:border-deluxe-800 dark:bg-deluxe-900 dark:text-deluxe-50",
  variants: {
    side: {
      top: "data-[state=delayed-open]:slide-in-from-bottom-1.5 data-[state=delayed-close]:slide-out-to-top-1.5",
      bottom:
        "data-[state=delayed-open]:slide-in-from-top-1.5 data-[state=delayed-close]:slide-out-to-bottom-1.5",
      left: "data-[state=delayed-open]:slide-in-from-right-1.5 data-[state=delayed-close]:slide-out-to-right-1.5",
      right:
        "data-[state=delayed-open]:slide-in-from-left-1.5 data-[state=delayed-close]:slide-out-to-left-1.5",
    },
  },
});

const arrow = "fill-white dark:fill-deluxe-900";

export const tooltipTheme = {
  content,
  arrow,
};
export type TooltipTheme = {
  content: VariantProps<typeof content>;
  arrow: string;
};
