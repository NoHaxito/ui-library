"use client";

import { DialogTitle as RadixDialogTitle } from "@radix-ui/react-dialog";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { dialogTheme } from "../theme";

export const DialogTitle = forwardRef<
  ElementRef<typeof RadixDialogTitle>,
  ComponentPropsWithoutRef<typeof RadixDialogTitle>
>(({ className, ...props }, ref) => {
  const { title } = dialogTheme.header();
  return (
    <RadixDialogTitle ref={ref} className={title({ className })} {...props} />
  );
});
DialogTitle.displayName = RadixDialogTitle.displayName;
