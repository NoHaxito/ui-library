"use client";
import * as React from "react";
import {
  PopoverPortal as RadixPopoverPortal,
  PopoverContent as RadixPopoverContent,
} from "@radix-ui/react-popover";
import { cn } from "../../lib/utils";
import { popoverTheme } from "./theme";

type PopoverContentProps = React.ComponentProps<typeof RadixPopoverContent>;

export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof RadixPopoverContent>,
  PopoverContentProps
>(
  (
    { className, side = "bottom", sideOffset = 4, align = "center", ...props },
    forwardedRef
  ) => {
    const content = popoverTheme.content;
    return (
      <RadixPopoverPortal>
        <RadixPopoverContent
          ref={forwardedRef}
          sideOffset={sideOffset}
          align={align}
          side={side}
          className={cn(content({ className, side }))}
          {...props}
        />
      </RadixPopoverPortal>
    );
  }
);
PopoverContent.displayName = "PopoverContent";
