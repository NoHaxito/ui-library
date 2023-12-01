import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export const sidebar = tv({
  slots: {
    base: "h-full transiton-all duration-300",
    inner:
      "h-full overflow-y-auto overflow-x-hidden rounded bg-neutral-50 py-4 px-3 dark:bg-neutral-900",
    items: "",
    itemGroup:
      "mt-4 flex flex-col gap-2 border-t border-neutral-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-neutral-700",
    item: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-neutral-900 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800",
    itemIcon:
      "h-6 w-6 flex-shrink-0 text-neutral-500 transition duration-75 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white",
  },
  variants: {
    collapsed: {
      true: {
        base: "w-16",
      },
      false: {
        base: "w-64",
      },
    },
    active: {
      true: {
        item: "bg-neutral-100 dark:bg-neutral-700",
        itemIcon: "text-neutral-700 dark:text-neutral-100",
      },
      false: {
        item: "",
        itemIcon: "",
      },
    },
  },
  defaultVariants: {},
});
export type SidebarVariant = VariantProps<typeof sidebar>;
