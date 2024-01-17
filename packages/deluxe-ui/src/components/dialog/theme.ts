import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

const overlay = tv({
  base: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
});
const header = tv({
  slots: {
    base: "flex flex-col text-center gap-y-1 sm:text-left",
    title: "text-lg font-semibold leading-none tracking-tight",
    description: "text-sm text-deluxe-500",
  },
});

const content = tv({
  base: "fixed left-[50%] top-[50%] z-50 grid w-11/12 sm:w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-deluxe-200 bg-deluxe-100 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-90 data-[state=open]:zoom-in-90 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-deluxe md:w-full dark:border-deluxe-800 dark:bg-deluxe-950",
});

export const dialogTheme = {
  header,
  overlay,
  content,
};
export type DialogTheme = {
  header: VariantProps<typeof header>;
  overlay: VariantProps<typeof overlay>;
  content: VariantProps<typeof content>;
};
