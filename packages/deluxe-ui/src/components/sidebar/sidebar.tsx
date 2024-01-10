"use client";

import { type HTMLAttributes, type ElementType, forwardRef } from "react";
import { SidebarTheme, sidebarTheme } from "./theme";
import { useSidebarContext } from "./context";
import { useControllableState } from "@radix-ui/react-use-controllable-state";

type SidebarBase = SidebarTheme["base"];

interface SidebarProps extends HTMLAttributes<HTMLDivElement>, SidebarBase {
  as?: ElementType;
  onCollapsedChange?: (value: boolean) => void;
  open?: boolean;
  onOpenChange?: (value: boolean) => void;
}

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      as: Component = "aside",
      className,
      children,
      open: defaultOpenProp,
      collapsed: defaultCollapsedProp,
      onOpenChange,
      onCollapsedChange,
      ...props
    },
    ref
  ) => {
    const [collapsed, setCollapsed] = useControllableState({
      defaultProp: false,
      prop: defaultCollapsedProp,
      onChange: onCollapsedChange,
    });
    const [open, setOpen] = useControllableState({
      defaultProp: false,
      prop: defaultOpenProp,
      onChange: onOpenChange,
    });
    const { SidebarContext } = useSidebarContext();
    const { base } = sidebarTheme.base();
    return (
      <SidebarContext.Provider
        value={{
          collapsed: collapsed!,
          open: open!,
          setOpen,
          setCollapsed,
        }}
      >
        <Component
          className={base({ collapsed, open, className })}
          ref={ref}
          {...props}
        >
          {children}
        </Component>
      </SidebarContext.Provider>
    );
  }
);
Sidebar.displayName = "Sidebar";
