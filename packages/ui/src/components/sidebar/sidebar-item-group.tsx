"use client";
import type { ComponentProps, FC } from "react";
import { TooltipProvider, type TooltipProviderProps } from "../tooltip";
import { sidebar } from "./theme";

export interface SidebarItemGroupProps extends ComponentProps<"ul"> {
  tooltip?: Omit<TooltipProviderProps, "children">;
}

export const SidebarItemGroup: FC<SidebarItemGroupProps> = ({
  children,
  className,
  tooltip,
  ...props
}) => {
  const { itemGroup } = sidebar();
  return (
    <ul className={itemGroup({ className })} {...props}>
      <TooltipProvider {...tooltip}>{children}</TooltipProvider>
    </ul>
  );
};

SidebarItemGroup.displayName = "Sidebar.ItemGroup";
