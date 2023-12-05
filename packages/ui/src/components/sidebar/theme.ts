import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export const sidebar = tv({
  slots: {
    base: "h-full transition-width duration-[400ms] antialiased ease-in-out bg-neutral-50 dark:bg-neutral-900 flex flex-col fixed top-0 left-0 z-10",
    headBase:
      "transition-opacity dark:text-white top-0 w-full items-center min-h-[4rem] px-[20px] dark:border-neutral-800 border-b border-dashed bg-inherit flex flex-nowrap truncate",
    headLogo: "flex flex-none items-center justify-center",
    headTitle: "text-lg font-medium truncate",
    headToggle:
      "hidden md:flex items-center h-6 w-6 p-1 rounded ring-1 absolute right-0 translate-x-1/2 ring-neutral-100 text-neutral-500 bg-white",
    headToggleIcon:
      "h-full w-full transition transform duration-250 ease-in-out",
    items:
      "my-4 px-3 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:dark:bg-neutral-700 [&::-webkit-scrollbar-thumb]:bg-neutral-400 my-4 overflow-x-hidden flex flex-col gap-y-6",
    itemGroup: "flex flex-col",
    item: "border group truncate w-full flex items-center text-sm outline-none ring-inset focus-visible:ring-2 focus-visible:rounded-md py-2.5 gap-x-3",
    itemIcon: "flex-none flex items-center justify-center",
    label: "bg-indigo-500 rounded-md text-white text-xs p-1",
  },
  variants: {
    collapsed: {
      true: {
        items: ["overflow-y-hidden"],
        item: ["border-transparent", "px-3", "justify-start", "rounded-md"],
        itemIcon: ["w-7", "h-7"],
        headTitle: [],
        headToggleIcon: ["rotate-180"],
      },
      false: {
        items: ["overflow-y-hidden"],
        item: ["border-transparent", "px-3", "rounded-md"],
        headTitle: ["ml-2"],
        itemIcon: ["w-7", "h-7"],
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
      class: ["min-w-[4.9rem]", "max-w-[4.9rem]"],
    },
    {
      slots: ["item"],
      active: true,
      collapsed: true,
      class: "!border-neutral-200 dark:!border-neutral-700",
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
