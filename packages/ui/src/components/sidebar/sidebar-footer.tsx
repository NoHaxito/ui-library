"use client";

import React from "react";
import { sidebar } from "./theme";

export const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ children, ...props }, forwardedRef) => {
  const { footer } = sidebar();
  return (
    <div
      ref={forwardedRef}
      className={footer({ className: props.className })}
      {...props}
    >
      {children}
    </div>
  );
});

SidebarFooter.displayName = "Sidebar.Footer";
