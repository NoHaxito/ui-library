import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export const tabs = tv({
  slots: {
    list: "group relative z-10 inline-flex h-10 items-center justify-center p-1 text-neutral-500",
    trigger:
      "gap-2 inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-300 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-neutral-900 dark:focus-visible:ring-white  dark:data-[state=active]:text-white",
    indicator:
      "absolute flex rounded-lg items-center left-0 w-[var(--radix-tab-active-width)] translate-x-[var(--radix-tab-active-left)] transition-[width,transform] duration-300",
  },
  variants: {
    variant: {
      solid: {
        list: "rounded-lg bg-neutral-100 dark:bg-neutral-900",
        indicator:
          "-z-[2] h-[var(--radix-tab-active-height)] bg-neutral-200 dark:bg-neutral-800",
        trigger:
          "data-[state=active]:bg-neutral-200 dark:data-[state=active]:bg-neutral-800",
      },
      underline: {
        // list: "border-b dark:border-neutral-800 shrink-0",
        list: "",
        indicator: "bottom-0 h-[2px] bg-black dark:bg-white",
        trigger: "",
      },
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});

export type TabsVariant = VariantProps<typeof tabs>;
