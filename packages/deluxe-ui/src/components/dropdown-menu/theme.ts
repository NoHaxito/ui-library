import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

const content = tv({
  base: "min-w-[180px] dark:bg-deluxe-900 bg-deluxe-100 rounded-deluxe shadow-md px-1 py-1.5 z-50",
});

const item = tv({
  base: "group text-sm flex items-center gap-2 transition-colors ease rounded-deluxe cursor-pointer px-2 py-2",
  variants: {
    variant: {
      default:
        "dark:text-deluxe-300 text-deluxe-800 focus:bg-deluxe-200 dark:focus:bg-deluxe-800 focus:outline-none focus:border-deluxe-300 dark:focus:border-deluxe-700",

      danger:
        "dark:text-deluxe-300 dark:focus:text-red-900 focus:text-red-800 text-deluxe-800 focus:bg-red-100 dark:focus:bg-red-100 focus:outline-none focus:border-deluxe-300 dark:focus:border-deluxe-700",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const animations = {
  top: {
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
  },
  bottom: {
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
  },
  left: {
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
  },
  right: {
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
  },
};

export const dropdownTheme = {
  content,
  item,
  animations,
};
export type DropdownTheme = {
  content: VariantProps<typeof content>;
  item: VariantProps<typeof item>;
  animations: typeof animations;
};
