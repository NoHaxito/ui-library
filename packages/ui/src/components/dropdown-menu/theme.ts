import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";
export const dropdownMenu = tv({
  slots: {
    content:
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-20 data-[state=closed]:zoom-out-90 data-[state=open]:zoom-in-90 data-[side=bottom]:slide-in-from-top-4 data-[side=left]:slide-in-from-right-4 data-[side=right]:slide-in-from-left-4 data-[side=top]:slide-in-from-bottom-4 data-[side=right]:ml-1 data-[side=left]:mr-1 data-[side=top]:mb-1 data-[side=bottom]:mt-1 transition-all min-w-[180px] dark:bg-neutral-900 bg-neutral-100 rounded-lg shadow-md px-1 py-1.5 z-[100]",
    item: "group text-sm flex items-center gap-2 transition-colors ease rounded-lg cursor-pointer gap-2 px-2 py-2",
    shortcut: "ml-auto flex items-center gap-x-0.5 text-neutral-500",
  },
  variants: {
    variant: {
      default: {
        item: "dark:text-neutral-300 text-neutral-800 focus:bg-neutral-200 dark:focus:bg-neutral-800 focus:outline-none focus:border-neutral-300 dark:focus:border-neutral-700",
      },
      danger: {
        item: "text-red-500 focus:text-white dark:focus:text-neutral-300 dark:text-red-500 focus:bg-red-500 dark:focus:bg-red-600 focus:outline-none focus:border-red-400 dark:focus:border-red-600",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
export type DropdownMenuTheme = VariantProps<typeof dropdownMenu>;
