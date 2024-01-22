import { forwardRef, ElementRef, ComponentPropsWithoutRef } from "react";
import { DropdownMenuSeparator as RadixDropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { dropdownTheme } from "./theme";

export const DropdownMenuSeparator = forwardRef<
  ElementRef<typeof RadixDropdownMenuSeparator>,
  ComponentPropsWithoutRef<typeof RadixDropdownMenuSeparator>
>(({ className, ...props }, ref) => {
  const { separator } = dropdownTheme.extra();
  return (
    <RadixDropdownMenuSeparator
      ref={ref}
      className={separator({ className })}
      {...props}
    />
  );
});
DropdownMenuSeparator.displayName = "DropdownMenu.Separator";
