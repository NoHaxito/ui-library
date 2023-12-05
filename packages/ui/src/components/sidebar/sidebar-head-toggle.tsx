"use client";

import type { ComponentProps, Ref } from "react";
import { forwardRef, useId } from "react";
import { ChevronLeft } from "lucide-react";
import { sidebar } from "./theme";
import { useSidebarContext } from "./sidebar-context";

export type SidebarHeadToggleProps = Omit<ComponentProps<"button">, "ref">;

export const SidebarHeadToggle = forwardRef<
  HTMLButtonElement,
  SidebarHeadToggleProps
>(({ className, ...props }, ref?: Ref<HTMLButtonElement>) => {
  const id = useId();
  const { collapsed, setCollapsed } = useSidebarContext();

  const { headToggle, headToggleIcon } = sidebar();
  return (
    <button
      className={headToggle({ className })}
      id={id}
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
      <ChevronLeft className={headToggleIcon({ collapsed })} />
    </button>
  );
});

SidebarHeadToggle.displayName = "Sidebar.Head.Toggle";
