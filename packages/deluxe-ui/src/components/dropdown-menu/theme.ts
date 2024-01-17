import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

const content = tv({
  base: "data-[state=open]:animate-in ease-in-out data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[state=closed]:fade-out-0 min-w-[180px] dark:bg-deluxe-900 bg-deluxe-100 rounded-deluxe shadow-md px-1 py-1.5 z-50 overflow-hidden",
  variants: {
    side: {
      top: "data-[state=open]:slide-in-from-bottom-3.5 data-[state=closed]:slide-out-to-bottom-3.5",
      bottom:
        "data-[state=open]:slide-in-from-top-3.5 data-[state=closed]:slide-out-to-top-3.5",
      left: "data-[state=open]:slide-in-from-right-3.5 data-[state=closed]:slide-out-to-right-3.5",
      right:
        "data-[state=open]:slide-in-from-left-3.5 data-[state=closed]:slide-out-to-left-3.5",
    },
  },
});

const item = tv({
  base: "group text-sm flex items-center gap-2 transition-colors ease rounded-deluxe cursor-pointer px-2 py-2",
  variants: {
    variant: {
      default:
        "dark:text-deluxe-300 text-deluxe-800 focus:bg-deluxe-200 dark:focus:bg-deluxe-800 focus:outline-none focus:border-deluxe-300 dark:focus:border-deluxe-700",

      danger:
        "dark:text-deluxe-300 dark:focus:text-deluxe-300 focus:text-red-800 text-deluxe-800 focus:bg-red-100 dark:focus:bg-red-800/20 focus:outline-none focus:border-deluxe-300 dark:focus:border-deluxe-700",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const dropdownTheme = {
  content,
  item,
};
export type DropdownTheme = {
  content: VariantProps<typeof content>;
  item: VariantProps<typeof item>;
};
