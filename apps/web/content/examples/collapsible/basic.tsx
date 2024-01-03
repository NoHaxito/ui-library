"use client";
import { CaretUpDown } from "@phosphor-icons/react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@sihaxito/deluxe-ui";

export default function CollapsibleDemo() {
  return (
    <Collapsible className="space-y-2">
      <div className="flex items-center justify-between gap-2 px-4">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger className="flex h-6 w-6 items-center justify-center rounded-lg bg-neutral-100 p-2 dark:bg-neutral-800">
          <CaretUpDown />
          <span className="sr-only">Toggle</span>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm dark:border-neutral-800">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up space-y-2 overflow-hidden transition-all duration-500 ease-out">
        <div className="rounded-md border px-4 py-3 font-mono text-sm dark:border-neutral-800">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm dark:border-neutral-800">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
