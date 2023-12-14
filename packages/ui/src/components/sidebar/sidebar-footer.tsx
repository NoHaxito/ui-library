"use client";

import React from "react";
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
      ref={forwardedRef}
      data-collapsed={collapsed ? "true" : "false"}
      className={footer({ className: props.className })}
      {...props}
    >
      {children}
    </div>
  );
});

SidebarFooter.displayName = "Sidebar.Footer";
