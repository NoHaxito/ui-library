"use client";
import * as React from "react";
import { SubTrigger } from "@radix-ui/react-dropdown-menu";
import { CaretRight } from "@phosphor-icons/react";
import { DropdownMenuTheme, dropdownMenu } from "../theme";

export interface DropdownMenuSubTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SubTrigger>,
    DropdownMenuTheme {}

export const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof SubTrigger>,
  DropdownMenuSubTriggerProps
>(({ variant, children, className, ...props }, forwardedRef) => {
  const { item } = dropdownMenu();
  return (
    <SubTrigger
      {...props}
      ref={forwardedRef}
      className={item({ className, variant })}
    >
      {children}
      <CaretRight className="ml-auto h-4 w-4" />
    </SubTrigger>
  );
});

DropdownMenuSubTrigger.displayName = "DropdownMenu.SubTrigger";
