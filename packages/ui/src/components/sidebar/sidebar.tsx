/* eslint-disable jsx-a11y/click-events-have-key-events -- todo*/
/* eslint-disable jsx-a11y/no-static-element-interactions -- todo*/
"use client";
import {
  type ReactNode,
  type ComponentProps,
  type ElementType,
  type FC,
} from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { cn } from "../../utils";
import { sidebar, type SidebarVariant } from "./theme";
import { useSidebarContext } from "./sidebar-context";

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
  const { SidebarContext } = useSidebarContext();

  return (
    <SidebarContext.Provider
      value={{
        collapsed: collapsed!,
        setCollapsed,
        open: open!,
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
      {overlayProp ? (
        <div
          className={cn(overlayStyles({ open }))}
          id="overlay"
          onClick={() => {
            setOpen(false);
          }}
        />
      ) : null}
    </SidebarContext.Provider>
  );
};
SidebarComponent.displayName = "Sidebar";

export { SidebarComponent };
