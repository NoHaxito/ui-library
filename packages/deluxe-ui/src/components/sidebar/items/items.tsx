"use client";
import { type ComponentProps, forwardRef } from "react";
import { sidebarTheme } from "../theme";

export interface SidebarItemsProps extends ComponentProps<"nav"> {}

export const SidebarItems = forwardRef<HTMLElement, SidebarItemsProps>(
  ({ className, ...props }, ref) => {
    const { base } = sidebarTheme.items();
    return <nav className={base({ className })} {...props} />;
  },
);

SidebarItems.displayName = "SidebarItems";
