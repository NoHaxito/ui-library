"use client";
import {
  type ReactNode,
  type ComponentProps,
  type ElementType,
  type FC,
  useState,
  useEffect,
  useRef,
} from "react";
import { cn } from "../../utils";
import { sidebar, type SidebarVariant } from "./theme";
import { SidebarProvider, useSidebarContext } from "./sidebar-context";
import { useControllableState } from "@radix-ui/react-use-controllable-state";

interface SidebarProps
  extends Omit<SidebarVariant, "active" | "open">,
    ComponentProps<"div"> {
  children: ReactNode;
  as?: ElementType;
  onCollapsedChange?: (value: boolean) => void;
  open?: boolean;
  onOpenChange?: (value: boolean) => void;
  overlay?: boolean;
}
const SidebarComponent: FC<SidebarProps> = ({
  children,
  as: Component = "aside",
  collapsed: collapsedProp = false,
  className,
  onCollapsedChange,
  open: openProp,
  overlay: overlayProp = true,
  onOpenChange,
  ...props
}) => {
  // const [collapsed, setCollapsed] = useState(collapsedProp);
  const [collapsed, setCollapsed] = useControllableState({
    defaultProp: collapsedProp,
    prop: collapsedProp,
    onChange: onCollapsedChange,
  });
  const [open, setOpen] = useControllableState({
    defaultProp: openProp,
    prop: openProp,
    onChange: onOpenChange,
  });
  const { base, overlay: overlayStyles } = sidebar();
  const { context, SidebarContext } = useSidebarContext();

  return (
    <SidebarContext.Provider
      value={{
        collapsed: collapsed as boolean,
        setCollapsed,
        open: open as boolean,
        setOpen,
      }}
    >
      <Component
        aria-label={props["aria-label"] ?? "Sidebar"}
        className={cn(base({ collapsed, className }))}
        data-collapsed={collapsed}
        data-open={open}
        {...props}
      >
        {children}
      </Component>
      {overlayProp && (
        <div
          onClick={() => setOpen(false)}
          id="overlay"
          className={cn(overlayStyles({ open: open }))}
        />
      )}
    </SidebarContext.Provider>
  );
};
SidebarComponent.displayName = "Sidebar";

export { SidebarComponent };
