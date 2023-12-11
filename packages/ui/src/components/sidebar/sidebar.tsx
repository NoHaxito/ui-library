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
import { SidebarProvider } from "./sidebar-context";
import { useControllableState } from "@radix-ui/react-use-controllable-state";

interface SidebarProps extends SidebarVariant, ComponentProps<"div"> {
  children: ReactNode;
  as?: ElementType;
  onCollapsedChange?: (value: boolean) => void;
}
const SidebarComponent: FC<SidebarProps> = ({
  children,
  as: Component = "nav",
  collapsed: collapsedProp = false,
  className,
  onCollapsedChange,
  ...props
}) => {
  // const [collapsed, setCollapsed] = useState(collapsedProp);
  const [collapsed, setCollapsed] = useControllableState({
    defaultProp: collapsedProp,
    prop: collapsedProp,
    onChange: onCollapsedChange,
  });
  const { base } = sidebar();
  const mounted = useRef<boolean>(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    onCollapsedChange && onCollapsedChange(collapsed as boolean);
  }, [collapsed, onCollapsedChange]);
  return (
    <SidebarProvider value={{ collapsed: collapsed as boolean, setCollapsed }}>
      <Component
        aria-label={props["aria-label"] ?? "Sidebar"}
        className={cn(base({ collapsed, className }))}
        data-collapsed={collapsed}
        {...props}
      >
        {children}
      </Component>
    </SidebarProvider>
  );
};
SidebarComponent.displayName = "Sidebar";

export { SidebarComponent };
