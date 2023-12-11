"use client";

import type { ComponentProps, ReactNode, Ref } from "react";
import { forwardRef, useId } from "react";
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
  const id = useId();
  const {
    context: { collapsed },
  } = useSidebarContext();

  const { headTitle } = sidebar();
  return (
    <div className={headTitle({ className, collapsed })} id={id} ref={ref}>
      {!collapsed && children}
    </div>
  );
});

SidebarHeadTitle.displayName = "Sidebar.Head.Title";
