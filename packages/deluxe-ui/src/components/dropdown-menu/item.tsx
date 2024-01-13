"use client";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { DropdownMenuItem as RadixDropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { type DropdownTheme, dropdownTheme } from "./theme";

type DropdownItemProps = DropdownTheme["item"];

interface DropdownMenuItemProps
  extends ComponentPropsWithoutRef<typeof RadixDropdownMenuItem>,
    DropdownItemProps {}

export const DropdownMenuItem = forwardRef<
  ElementRef<typeof RadixDropdownMenuItem>,
  DropdownMenuItemProps
>(({ variant, ...props }, ref) => {
  const item = dropdownTheme.item;
  return (
    <RadixDropdownMenuItem
      ref={ref}
      {...props}
      className={item({ className: props.className, variant })}
    />
  );
});
DropdownMenuItem.displayName = "DropdownItem";
