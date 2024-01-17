import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

const content = tv({
  base: "data-[state=open]:animate-in ease-in-out data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[state=closed]:fade-out-0 min-w-[180px] dark:bg-deluxe-900 bg-deluxe-100 rounded-deluxe shadow-md p-3 z-50 overflow-hidden",
  variants: {
    side: {
      top: "data-[state=open]:slide-in-from-bottom-2.5 data-[state=closed]:slide-out-to-bottom-2.5",
      bottom:
        "data-[state=open]:slide-in-from-top-2.5 data-[state=closed]:slide-out-to-top-2.5",
      left: "data-[state=open]:slide-in-from-right-2.5 data-[state=closed]:slide-out-to-right-2.5",
      right:
        "data-[state=open]:slide-in-from-left-2.5 data-[state=closed]:slide-out-to-left-2.5",
    },
  },
});

export const popoverTheme = {
  content,
};
export type PopoverTheme = {
  content: VariantProps<typeof content>;
};
