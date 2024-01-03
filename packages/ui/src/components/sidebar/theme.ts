import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export const sidebar = tv({
  slots: {
    base: "z-30 transition-width duration-[300ms] antialiased h-full ease-in-out bg-neutral-50 dark:bg-neutral-900 flex flex-col",
    overlay: "fixed inset-0 z-20 bg-black/50",
    headBase:
      "transition-opacity dark:text-white top-0 w-full items-center min-h-[4rem] px-[20px] dark:border-neutral-800 bg-inherit flex flex-nowrap truncate",
    headLogo: "flex flex-none items-center justify-center",
    headTitle: "text-lg font-medium truncate",
    headToggle:
      "hidden md:flex items-center h-6 w-6 p-1 rounded ring-1 absolute right-0 translate-x-1/2 ring-neutral-100 text-neutral-500 bg-white",
    headToggleIcon:
      "h-full w-full transition transform duration-250 ease-in-out",
    items:
      "overflow-hidden overflow-y-auto h-full my-0 pr-2 first:my-4 px-3 overflow-x-hidden flex flex-1 flex-col gap-y-6",
    itemGroup: "flex flex-col",
    itemWrapper: "cursor-pointer list-none",
    item: "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-100 border group truncate w-full min-h-[3rem] max-h-[3rem] flex items-center text-sm outline-none ring-inset focus-visible:ring-2 focus-visible:rounded-xl py-2.5 gap-x-3",
    itemTitle:
      "flex w-full items-center justify-between transition-opacity duration-[800ms]",
    itemIcon: "h-6 w-6 -ml-0.5 flex-none flex items-center justify-center",
    itemCollapseWrapper: "ml-auto",
    itemCollapseIcon: "transition group-data-[state=open]:rotate-90",
    itemCollapseContent:
      "data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden px-4 py-0.5 pb-0 text-sm transition-all",
    footer:
      "w-full items-center justify-center flex mt-auto min-h-[4rem] px-4 sticky bottom-0 border-t border-neutral-200 dark:border-neutral-800",
  },
  variants: {
    open: {
      true: {
        overlay: ["block"],
      },
      false: {
        overlay: ["hidden"],
      },
    },
    collapsed: {
      true: {
        base: ["min-w-[4.5rem]", "max-w-[4.5rem]"],
        item: ["border-transparent", "px-3", "justify-start", "rounded-xl"],
        itemTitle: ["opacity-0"],
        itemCollapseContent: ["px-0"],
        headTitle: [],
        headToggleIcon: ["rotate-180"],
      },
      false: {
        base: ["min-w-[16rem]", "max-w-[16rem]"],
        item: ["border-transparent", "px-3", "rounded-xl"],
        itemTitle: ["opacity-100"],
        itemCollapseContent: [],
        headTitle: ["ml-2"],
        headToggleIcon: [],
      },
    },
    active: {
      true: {
        item: [],
      },
      false: {
        item: ["border-transparent"],
      },
    },
    variant: {
      transparent: {
        item: ["bg-transparent"],
      },
    },
  },
  compoundVariants: [
    {
      active: true,
      class: {
        item: "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-50 font-semibold",
      },
    },
  ],
  // compoundSlots: [
  //   {
  //     slots: ["item"],
  //     active: true,
  //     collapsed: true,
  //     class: "border-neutral-200 dark:border-neutral-700",
  //   },
  // ],
});
export type SidebarVariant = VariantProps<typeof sidebar>;
