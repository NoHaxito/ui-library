"use client";

import type { ComponentProps, ReactNode, Ref } from "react";
import { forwardRef, useId } from "react";
import { sidebar } from "./theme";

export interface SidebarHeadLogoProps
  extends Omit<ComponentProps<"div">, "ref"> {
  children: ReactNode;
}

export const SidebarHeadLogo = forwardRef<HTMLDivElement, SidebarHeadLogoProps>(
  ({ children, className }, ref?: Ref<HTMLDivElement>) => {
    const id = useId();
    const { headLogo } = sidebar();
    return (
      <div className={headLogo({ className })} id={id} ref={ref}>
        {children}
      </div>
    );
  }
);

SidebarHeadLogo.displayName = "Sidebar.Head.Logo";
