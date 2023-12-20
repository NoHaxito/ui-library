import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export const sidebar = tv({
  slots: {
    base: "z-30 transition-width duration-[300ms] antialiased ease-in-out bg-neutral-50 dark:bg-neutral-900 flex flex-col",
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
      "my-0 pr-2 first:my-4 px-3 my-4 overflow-x-hidden flex flex-1 flex-col gap-y-6",
    itemGroup: "flex flex-col",
    item: "block border group truncate w-full min-h-[3rem] max-h-[3rem] flex items-center text-sm outline-none ring-inset focus-visible:ring-2 focus-visible:rounded-xl py-2.5 gap-x-3",
    itemIcon: "h-6 w-6 -ml-0.5 flex-none flex items-center justify-center",
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
        items: [
          "md:[&::-webkit-scrollbar]:h-2 md:[&::-webkit-scrollbar]:w-1.5 md:[&::-webkit-scrollbar-track]:bg-transparent md:[&::-webkit-scrollbar-thumb]:rounded-full md:[&::-webkit-scrollbar-thumb]:dark:bg-neutral-800 md:[&::-webkit-scrollbar-thumb]:bg-neutral-400",
        ],
        item: ["border-transparent", "px-3", "justify-start", "rounded-xl"],
        headTitle: [],
        headToggleIcon: ["rotate-180"],
      },
      false: {
        items: [
          "md:[&::-webkit-scrollbar]:h-2 md:[&::-webkit-scrollbar]:w-1.5 md:[&::-webkit-scrollbar-track]:bg-transparent md:[&::-webkit-scrollbar-thumb]:rounded-full md:[&::-webkit-scrollbar-thumb]:dark:bg-neutral-800 md:[&::-webkit-scrollbar-thumb]:bg-neutral-400",
        ],
        item: ["border-transparent", "px-3", "rounded-xl"],
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
  compoundSlots: [
    {
      slots: ["base"],
      collapsed: false,
      class: ["min-w-[16rem]", "max-w-[16rem]"],
    },
    {
      slots: ["base"],
      collapsed: true,
      class: ["min-w-[4.5rem]", "max-w-[4.5rem]"],
    },
    {
      slots: ["item"],
      active: true,
      collapsed: true,
      class: "border-neutral-200 dark:border-neutral-700",
    },
    {
      slots: ["item"],
      active: true,
      class:
        "bg-neutral-100 dark:bg-neutral-800 !text-neutral-700 dark:!text-neutral-50 font-semibold",
    },
    {
      slots: ["item"],
      class:
        "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-100",
    },
  ],
});
export type SidebarVariant = VariantProps<typeof sidebar>;
