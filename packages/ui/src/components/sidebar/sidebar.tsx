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
  const [collapsed, setCollapsed] = useState(collapsedProp);
  const { base } = sidebar();
  const mounted = useRef<boolean>(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    onCollapsedChange && onCollapsedChange(collapsed);
  }, [collapsed, onCollapsedChange]);
  return (
    <SidebarProvider value={{ collapsed, setCollapsed }}>
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
