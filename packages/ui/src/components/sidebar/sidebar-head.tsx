"use client";

import type { ComponentProps, ReactNode, Ref } from "react";
import { forwardRef, useId } from "react";
import { sidebar } from "./theme";

export interface SidebarHeadProps extends Omit<ComponentProps<"div">, "ref"> {
  children: ReactNode;
}

export const SidebarHead = forwardRef<HTMLDivElement, SidebarHeadProps>(
  ({ children, className }, ref?: Ref<HTMLDivElement>) => {
    const id = useId();
    const { headBase } = sidebar();
    return (
      <div className={headBase({ className })} id={id} ref={ref}>
        {children}
      </div>
    );
  }
);
SidebarHead.displayName = "Sidebar.Head";
