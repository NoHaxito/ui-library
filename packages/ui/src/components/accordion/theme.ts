import { tv, type VariantProps } from "tailwind-variants";

export const accordion = tv({
  slots: {
    trigger:
      "flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
    contentWrapper:
      "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all",
    content: "pb-4 pt-0",
    iconIndicator: "w-4 h-4 transition-transform duration-200",
  },
});

export type AccordionTheme = VariantProps<typeof accordion>;
