"use client";

import type { ComponentProps, Ref } from "react";
import { forwardRef } from "react";
import { X } from "lucide-react";
import { cn } from "../../utils";
import { sidebar } from "./theme";
import { useSidebarContext } from "./sidebar-context";

export type SidebarHeadToggleOpenProps = Omit<ComponentProps<"button">, "ref">;

export const SidebarHeadToggleOpen = forwardRef<
  HTMLButtonElement,
  SidebarHeadToggleOpenProps
>(({ className, ...props }, ref?: Ref<HTMLButtonElement>) => {
  const {
    context: { open, setOpen },
  } = useSidebarContext();

  const { headToggle, headToggleIcon } = sidebar();
  return (
    <button
      className={headToggle({
        className: cn("flex -translate-x-1/2 md:hidden", className),
      })}
      data-open={open ? "true" : "false"}
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
