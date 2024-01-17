"use client";
import {
  DropdownMenu as RadixDropdownMenu,
  DropdownMenuProps as RadixDropdownMenuProps,
} from "@radix-ui/react-dropdown-menu";
import { ElementRef, forwardRef } from "react";

export const DropdownMenu = forwardRef<
  ElementRef<typeof RadixDropdownMenu>,
  RadixDropdownMenuProps
>(({ ...props }, ref) => {
  return <RadixDropdownMenu {...props} />;
});

DropdownMenu.displayName = "DropdownMenu";
