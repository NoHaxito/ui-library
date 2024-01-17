"use client";

import { DialogClose as RadixDialogClose } from "@radix-ui/react-dialog";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { buttonVariants } from "../button/theme";
import { X } from "@phosphor-icons/react";

export const DialogClose = forwardRef<
  ElementRef<typeof RadixDialogClose>,
  ComponentPropsWithoutRef<typeof RadixDialogClose>
>(({ children = <X className="h-4 w-4" />, className, ...props }, ref) => {
  return (
    <RadixDialogClose
      ref={ref}
      className={buttonVariants({
        variant: "ghost",
        size: "icon",
        className: `h-6 w-6 ${className}`,
      })}
      {...props}
    >
      {children}
    </RadixDialogClose>
  );
});
DialogClose.displayName = RadixDialogClose.displayName;
