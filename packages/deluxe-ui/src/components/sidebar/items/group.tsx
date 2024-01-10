"use client";
import { type ComponentProps, forwardRef } from "react";
import { sidebarTheme } from "../theme";

export interface SidebarItemsProps extends ComponentProps<"ul"> {}

export const SidebarItemsGroup = forwardRef<
  HTMLUListElement,
  SidebarItemsProps
>(({ className, ...props }, ref) => {
  const { group } = sidebarTheme.items();
  return <ul className={group({ className })} {...props} />;
});

SidebarItemsGroup.displayName = "SidebarItemsGroup";
