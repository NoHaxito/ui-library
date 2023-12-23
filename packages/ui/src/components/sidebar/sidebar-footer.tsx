"use client";

import * as React from "react";
import { useSidebarContext } from "./sidebar-context";
import { sidebar } from "./theme";

export const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ children, ...props }, forwardedRef) => {
  const {
    context: { collapsed },
  } = useSidebarContext();
  const { footer } = sidebar();
  return (
    <div
      className={footer({ className: props.className })}
      data-collapsed={collapsed ? "true" : "false"}
      ref={forwardedRef}
      {...props}
    >
      {children}
    </div>
  );
});

SidebarFooter.displayName = "Sidebar.Footer";
