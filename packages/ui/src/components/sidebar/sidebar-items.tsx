"use client";
import type { ComponentProps, FC } from "react";
import { ScrollArea } from "../scroll-area";
import { useSidebarContext } from "./sidebar-context";
import { sidebar } from "./theme";

export type SidebarItemsProps = ComponentProps<"div">;

export const SidebarItems: FC<SidebarItemsProps> = ({
  children,
  className,
  ...props
}) => {
  const { context } = useSidebarContext();
  const { items } = sidebar();
  return (
    <nav
      className={items({ className, collapsed: context.collapsed })}
      {...props}
    >
      {children}
    </nav>
  );
};
SidebarItems.displayName = "Sidebar.Items";
