"use client";
import * as React from "react";
import {
  DropdownMenuPortal as RadixDropdownMenuPortal,
  DropdownMenuContent as RadixDropdownMenuContent,
} from "@radix-ui/react-dropdown-menu";
import { cn } from "../../lib/utils";
import { dropdownTheme } from "./theme";

type DropdownMenuContentProps = React.ComponentProps<
  typeof RadixDropdownMenuContent
>;

export const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenuContent>,
  DropdownMenuContentProps
>(({ className, side = "bottom", sideOffset = 4, ...props }, forwardedRef) => {
  const content = dropdownTheme.content;
  return (
    <RadixDropdownMenuPortal>
      <RadixDropdownMenuContent
        ref={forwardedRef}
        sideOffset={sideOffset}
        side={side}
        className={cn(
          content({ className: cn(className, "duration-500"), side }),
        )}
        {...props}
      />
    </RadixDropdownMenuPortal>
  );
});
DropdownMenuContent.displayName = "DropdownMenu.Content";
