"use client";

import type { ComponentProps, Ref } from "react";
import { forwardRef } from "react";
import { CaretLeft } from "@phosphor-icons/react";
import { sidebar } from "./theme";
import { useSidebarContext } from "./sidebar-context";

export type SidebarHeadToggleProps = Omit<ComponentProps<"button">, "ref">;

export const SidebarHeadToggle = forwardRef<
  HTMLButtonElement,
  SidebarHeadToggleProps
>(({ className, ...props }, ref?: Ref<HTMLButtonElement>) => {
  const {
    context: { collapsed, setCollapsed },
  } = useSidebarContext();

  const { headToggle, headToggleIcon } = sidebar();
  return (
    <button
      className={headToggle({ className })}
      data-collapsed={collapsed ? "true" : "false"}
      onClick={(event) => {
        setCollapsed && setCollapsed(!collapsed);
        if (props.onClick) {
          props.onClick(event);
        }
      }}
      ref={ref}
      type="button"
      {...props}
    >
      <CaretLeft className={headToggleIcon({ collapsed })} />
    </button>
  );
});

SidebarHeadToggle.displayName = "Sidebar.Head.Toggle";
