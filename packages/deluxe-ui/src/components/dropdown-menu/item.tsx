"use client";
import React, {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
  ReactNode,
} from "react";
import { DropdownMenuItem as RadixDropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { type DropdownTheme, dropdownTheme } from "./theme";

type DropdownItemProps = DropdownTheme["item"];

interface DropdownMenuItemProps
  extends ComponentPropsWithoutRef<typeof RadixDropdownMenuItem>,
    DropdownItemProps {
  icon?: ReactNode;
  shortcut?: ReactNode;
  rightIcon?: ReactNode;
}

export const DropdownMenuItem = forwardRef<
  ElementRef<typeof RadixDropdownMenuItem>,
  DropdownMenuItemProps
>(({ rightIcon, children, icon, shortcut, variant, ...props }, ref) => {
  const item = dropdownTheme.item;
  return (
    <RadixDropdownMenuItem
      ref={ref}
      {...props}
      className={item({ className: props.className, variant })}
    >
      {icon && icon}
      {children}
      {rightIcon && <span className="ml-auto">{rightIcon && rightIcon}</span>}
      {shortcut && (
        <span className="ml-auto text-xs tracking-widest text-deluxe-500">
          {shortcut && shortcut}
        </span>
      )}
    </RadixDropdownMenuItem>
  );
});
DropdownMenuItem.displayName = "DropdownItem";
