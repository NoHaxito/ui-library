"use client";
import * as React from "react";
import { SubContent, Portal } from "@radix-ui/react-dropdown-menu";
import { dropdownMenu } from "../theme";

export const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof SubContent>,
  React.ComponentPropsWithoutRef<typeof SubContent>
>(({ sideOffset = 2, alignOffset = -5, className, ...props }, forwardedRef) => {
  const { subContent } = dropdownMenu();
  return (
    <Portal>
      <SubContent
        {...props}
        ref={forwardedRef}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        className={subContent({ className })}
      />
    </Portal>
  );
});

DropdownMenuSubContent.displayName = "DropdownMenu.SubContent";
