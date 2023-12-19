"use client";
import * as React from "react";
import { Portal, Content } from "@radix-ui/react-dropdown-menu";
import { cn } from "../../utils";
import { dropdownMenu } from "./theme";

interface DropdownMenuContentProps
  extends React.ComponentPropsWithoutRef<typeof Content> {}

export const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  DropdownMenuContentProps
>(({ className, sideOffset = 2, ...props }, forwardedRef) => {
  const { content } = dropdownMenu();
  return (
    <Portal>
      <Content
        {...props}
        className={cn(content({ className: className }))}
        ref={forwardedRef}
        sideOffset={sideOffset}
      />
    </Portal>
  );
});
