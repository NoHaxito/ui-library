import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  base: "border hover:opacity-90 active:opacity-80 disabled:opacity-50 disabled:pointer-events-none text-sm flex items-center justify-center gap-2 rounded-deluxe",
  variants: {
    variant: {
      primary: "bg-deluxe-900 text-white dark:bg-deluxe-200 dark:text-black",
      outline:
        "border-deluxe-200 hover:bg-deluxe-200 dark:border-deluxe-800 dark:hover:bg-deluxe-900",
    },
    size: {
      sm: "px-3 py-2",
      md: "px-4 py-3",
      lg: "px-5 py-4",
      icon: "h-9 w-9",
    },
    disableAnimation: {
      true: "transition-none",
      false: "active:scale-[.97] transition-[transform,opacity]",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "primary",
    disableAnimation: false,
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
