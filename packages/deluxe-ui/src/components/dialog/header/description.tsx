"use client";

import { DialogDescription as RadixDialogDescription } from "@radix-ui/react-dialog";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { dialogTheme } from "../theme";

export const DialogDescription = forwardRef<
  ElementRef<typeof RadixDialogDescription>,
  ComponentPropsWithoutRef<typeof RadixDialogDescription>
>(({ className, ...props }, ref) => {
  const { description } = dialogTheme.header();
  return (
    <RadixDialogDescription
      ref={ref}
      className={description({ className })}
      {...props}
    />
  );
});
DialogDescription.displayName = RadixDialogDescription.displayName;
