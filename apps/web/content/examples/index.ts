// @ts-nocheck
/* -------------------------------------------------------------------------- */
/*                    GENERATED FILE, DO NOT EDIT MANUALLY!                   */
/* -------------------------------------------------------------------------- */
import { lazy, type LazyExoticComponent } from "react";

type Example = {
  component: LazyExoticComponent<() => JSX.Element>;
  code: string;
};

export const Examples: Record<string, Example> = {
  "accordion/basic": {
    component: lazy(() => import("@/content/examples/accordion/basic.tsx")),
    code: `"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@sihaxito/deluxe-ui";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="min-w-lg w-full">
      <AccordionItem
        value="item-1"
        className="border-b dark:border-neutral-800"
      >
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className="border-b dark:border-neutral-800"
      >
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-3"
        className="border-b dark:border-neutral-800"
      >
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
`,
  },
  "collapsible/basic": {
    component: lazy(() => import("@/content/examples/collapsible/basic.tsx")),
    code: `"use client";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@sihaxito/deluxe-ui";

export function CollapsibleDemo() {
  return (
    <Collapsible className="space-y-2">
      <div className="flex items-center justify-between gap-2 px-4">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger className="flex h-6 w-6 items-center justify-center rounded-lg bg-neutral-100 p-2 dark:bg-neutral-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#ffffff"
            viewBox="0 0 256 256"
          >
            <path d="M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z"></path>
          </svg>
          <span className="sr-only">Toggle</span>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm dark:border-neutral-800">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up space-y-2 transition-all duration-500 ease-out">
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
`,
  },
  "dropdown-menu/basic": {
    component: lazy(() => import("@/content/examples/dropdown-menu/basic.tsx")),
    code: `"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@sihaxito/deluxe-ui";

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Click me</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
`,
  },
  "tooltip/basic": {
    component: lazy(() => import("@/content/examples/tooltip/basic.tsx")),
    code: `"use client";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@sihaxito/deluxe-ui";

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>Im a tooltip!</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
`,
  },
};
