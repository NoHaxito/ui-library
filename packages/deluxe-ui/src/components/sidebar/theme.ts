import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

const sidebarBase = tv({
  slots: {
    base: "z-30 transition-[width,transform] duration-[300ms] antialiased h-full ease-in-out bg-deluxe-50 dark:bg-deluxe-900 flex flex-col",
    overlay: "fixed inset-0 z-20 bg-black/50",
  },
  variants: {
    collapsed: {
      true: "min-w-[4.5rem] max-w-[4.5rem]",
      false: "min-w-[16rem] max-w-[16rem]",
    },
    open: {
      true: {
        overlay: "hidden",
      },
      false: {},
    },
  },
  defaultVariants: {
    collapsed: false,
  },
});

const sidebarItems = tv({
  slots: {
    base: "overflow-hidden overflow-y-auto h-full first:py-1.5 pr-2 px-3 overflow-x-hidden flex flex-1 flex-col gap-y-6",
    group: "flex flex-col",
  },
});

const sidebarItem = tv({
  slots: {
    base: "rounded-deluxe text-deluxe-500 dark:text-deluxe-400 hover:text-deluxe-700 dark:hover:text-deluxe-100 group truncate w-full min-h-[3rem] max-h-[3rem] flex items-center text-sm outline-none ring-inset focus-visible:ring-2 focus-visible:rounded-deluxe py-2.5 gap-x-3",
    wrapper: "list-none",
    title:
      "flex w-full items-center justify-between transition-opacity duration-[800ms]",
    icon: "h-6 w-6 -ml-0.5 flex-none flex items-center justify-center",
  },
  variants: {
    disabled: {
      true: {
        base: "opacity-50 pointer-events-none",
        wrapper: "cursor-not-allowed",
      },
      false: {
        wrapper: "cursor-pointer",
      },
    },
    collapsed: {
      true: {
        base: "px-3 justify-start",
        title: "opacity-0",
      },
      false: {
        base: "px-3",
        title: "opacity-100",
      },
    },
    active: {
      true: "bg-deluxe-100 dark:bg-deluxe-800 text-deluxe-700 dark:text-deluxe-50 font-semibold",
      false: "",
    },
  },
  defaultVariants: {
    collapsed: false,
    active: false,
    disabled: false,
  },
});

export const sidebarTheme = {
  base: sidebarBase,
  items: sidebarItems,
  item: sidebarItem,
};

export type SidebarTheme = {
  base: VariantProps<typeof sidebarBase>;
  items: VariantProps<typeof sidebarItems>;
  item: VariantProps<typeof sidebarItem>;
};
