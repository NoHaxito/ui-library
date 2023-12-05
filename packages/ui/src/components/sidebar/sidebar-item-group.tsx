"use client";
import type { ComponentProps, FC } from "react";
import { sidebar } from "./theme";

export type SidebarItemGroupProps = ComponentProps<"ul">;

export const SidebarItemGroup: FC<SidebarItemGroupProps> = ({
  children,
  className,
  ...props
}) => {
  const { itemGroup } = sidebar();
  return (
    <ul className={itemGroup({ className })} {...props}>
      {children}
    </ul>
  );
};

SidebarItemGroup.displayName = "Sidebar.ItemGroup";
