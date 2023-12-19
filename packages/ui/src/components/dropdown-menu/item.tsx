"use client";
import * as React from "react";
import { Item } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuTheme, dropdownMenu } from "./theme";

interface DropdownMenuItemProps
  extends React.ComponentPropsWithoutRef<typeof Item>,
    DropdownMenuTheme {}

export const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof Item>,
  DropdownMenuItemProps
>(({ variant, ...props }, forwardedRef) => {
  const { item } = dropdownMenu();
  return (
    <Item
      ref={forwardedRef}
      {...props}
      className={item({ className: props.className, variant })}
    />
  );
});
DropdownMenuItem.displayName = "DropdownItem";
