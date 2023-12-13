"use client";

import type { ComponentProps, ReactNode, Ref } from "react";
import { forwardRef } from "react";
import { sidebar } from "./theme";
import { useSidebarContext } from "./sidebar-context";

export interface SidebarHeadTitleProps
  extends Omit<ComponentProps<"div">, "ref"> {
  children: ReactNode;
}

export const SidebarHeadTitle = forwardRef<
  HTMLDivElement,
  SidebarHeadTitleProps
>(({ children, className }, ref?: Ref<HTMLDivElement>) => {
  const {
    context: { collapsed },
  } = useSidebarContext();

  const { headTitle } = sidebar();
  return (
    <div className={headTitle({ className, collapsed })} ref={ref}>
      {!collapsed && children}
    </div>
  );
});

SidebarHeadTitle.displayName = "Sidebar.Head.Title";
