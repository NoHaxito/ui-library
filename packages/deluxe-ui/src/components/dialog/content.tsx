"use client";
import {
  DialogPortal as RadixDialogPortal,
  DialogContent as RadixDialogContent,
  DialogOverlay as RadixDialogOverlay,
  DialogClose as RadixDialogClose,
} from "@radix-ui/react-dialog";
import { cn } from "../../lib/utils";
import { dialogTheme } from "./theme";
import { X } from "@phosphor-icons/react";
import { type ComponentProps, type ElementRef, forwardRef } from "react";

type DialogContentProps = ComponentProps<typeof RadixDialogContent>;

export const DialogContent = forwardRef<
  ElementRef<typeof RadixDialogContent>,
  DialogContentProps
>(({ className, children, ...props }, forwardedRef) => {
  const content = dialogTheme.content;
  const overlay = dialogTheme.overlay;
  return (
    <RadixDialogPortal>
      <RadixDialogOverlay className={cn(overlay())} />
      <RadixDialogContent
        ref={forwardedRef}
        className={cn(content({ className }))}
        {...props}
      >
        {children}
        <RadixDialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-deluxe-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-deluxe-100 data-[state=open]:text-deluxe-500 dark:ring-offset-deluxe-950 dark:focus:ring-deluxe-300 dark:data-[state=open]:bg-deluxe-800 dark:data-[state=open]:text-deluxe-400">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </RadixDialogClose>
      </RadixDialogContent>
    </RadixDialogPortal>
  );
});
DialogContent.displayName = "DialogContent";
