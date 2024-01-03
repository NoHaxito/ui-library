"use client";

import * as React from "react";
import { Root, Thumb } from "@radix-ui/react-switch";
import { cn } from "../../utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => (
  <Root
    className={cn(
      "group peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-neutral-800 disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-neutral-900",
      className,
    )}
    {...props}
    ref={ref}
  >
    <Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-all group-active:w-6 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 data-[state=checked]:group-active:translate-x-4",
      )}
    />
  </Root>
));
Switch.displayName = Root.displayName;

export { Switch };
