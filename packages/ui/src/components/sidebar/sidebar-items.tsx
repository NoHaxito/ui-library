"use client";
import type { ComponentProps, FC } from "react";
import { sidebar } from "./theme";

export type SidebarItemsProps = ComponentProps<"div">;

export const SidebarItems: FC<SidebarItemsProps> = ({
  children,
  className,
  ...props
}) => {
  const { items } = sidebar();
  return (
    <nav className={items({ className })} {...props}>
      {children}
    </nav>
  );
};
SidebarItems.displayName = "Sidebar.Items";
