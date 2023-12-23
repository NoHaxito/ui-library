import React from "react";

export const collapsible = {
  "collapsible-basic": {
    component: React.lazy(() => import("./basic")),
    code: `"use client";
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
            <CollapsibleTrigger className="rounded-lg h-6 w-6 p-2 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800">
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
          <div className="rounded-md border dark:border-neutral-800 px-4 py-3 font-mono text-sm">
            @radix-ui/primitives
          </div>
          <CollapsibleContent className="ease-out duration-500 space-y-2 data-[state=open]:animate-collapsible-down transition-all data-[state=closed]:animate-collapsible-up">
            <div className="rounded-md border dark:border-neutral-800 px-4 py-3 font-mono text-sm">
              @radix-ui/colors
            </div>
            <div className="rounded-md border dark:border-neutral-800 px-4 py-3 font-mono text-sm">
              @stitches/react
            </div>
          </CollapsibleContent>
        </Collapsible>
      );
    }`,
  },
};
