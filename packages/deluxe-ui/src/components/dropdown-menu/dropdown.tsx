"use client";
import {
  DropdownMenu as RadixDropdownMenu,
  DropdownMenuProps as RadixDropdownMenuProps,
} from "@radix-ui/react-dropdown-menu";
import { ElementRef, forwardRef, useEffect, useLayoutEffect } from "react";
import { useDropdownMenuContext } from "./context";
import { useControllableState } from "@radix-ui/react-use-controllable-state";

export const DropdownMenu = forwardRef<
  ElementRef<typeof RadixDropdownMenu>,
  RadixDropdownMenuProps
>(
  (
    {
      defaultOpen,
      open: openProp = false,
      onOpenChange: onOpenChangeProps,
      ...props
    },
    ref
  ) => {
    const { DropdownMenuContext } = useDropdownMenuContext();
    const [open = false, setOpen] = useControllableState({
      defaultProp: false,
      prop: openProp,
      onChange: onOpenChangeProps,
    });

    return (
      <DropdownMenuContext.Provider value={{ open: open!, setOpen }}>
        <RadixDropdownMenu open={open} onOpenChange={setOpen} {...props} />
      </DropdownMenuContext.Provider>
    );
  }
);

DropdownMenu.displayName = "DropdownMenu";
