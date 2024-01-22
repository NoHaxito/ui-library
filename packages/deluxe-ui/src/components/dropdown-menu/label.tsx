import { forwardRef, ElementRef, ComponentPropsWithoutRef } from "react";
import { DropdownMenuLabel as RadixDropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { dropdownTheme } from "./theme";

export const DropdownMenuLabel = forwardRef<
  ElementRef<typeof RadixDropdownMenuLabel>,
  ComponentPropsWithoutRef<typeof RadixDropdownMenuLabel>
>(({ className, ...props }, ref) => {
  const { label } = dropdownTheme.extra();
  return (
    <RadixDropdownMenuLabel
      ref={ref}
      className={label({ className })}
      {...props}
    />
  );
});
DropdownMenuLabel.displayName = "DropdownMenu.Label";
