"use client";

import type { ComponentProps, Ref } from "react";
import { forwardRef, useId } from "react";
import { ChevronLeft, X } from "lucide-react";
import { sidebar } from "./theme";
import { useSidebarContext } from "./sidebar-context";
import { cn } from "../../utils";

export type SidebarHeadToggleOpenProps = Omit<ComponentProps<"button">, "ref">;

export const SidebarHeadToggleOpen = forwardRef<
  HTMLButtonElement,
  SidebarHeadToggleOpenProps
>(({ className, ...props }, ref?: Ref<HTMLButtonElement>) => {
  const id = useId();
  const {
    context: { collapsed, setCollapsed, open, setOpen },
  } = useSidebarContext();

  const { headToggle, headToggleIcon } = sidebar();
  return (
    <button
      className={headToggle({
        className: cn("md:hidden flex -translate-x-1/2", className),
      })}
      data-open={open ? "true" : "false"}
      id={id}
      onClick={(event) => {
        setOpen && setOpen(!open);
        if (props.onClick) {
          props.onClick(event);
        }
      }}
      ref={ref}
      type="button"
      {...props}
    >
      <X className={headToggleIcon()} />
    </button>
  );
});

SidebarHeadToggleOpen.displayName = "Sidebar.Head.ToggleOpen";
