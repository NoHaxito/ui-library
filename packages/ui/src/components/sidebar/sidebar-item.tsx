"use client";
import type {
  ComponentProps,
  ElementType,
  FC,
  PropsWithChildren,
  ReactNode,
} from "react";
import { forwardRef, useId } from "react";
import { cn } from "../../utils";
import { sidebar } from "./theme";
import { useSidebarContext } from "./sidebar-context";

export interface SidebarItemProps extends Omit<ComponentProps<"div">, "ref"> {
  as?: ElementType;
  href?: string;
  icon?: ReactNode;
  active?: boolean;
  label?: ReactNode;
}
const ListItem: FC<
  PropsWithChildren<{
    id: string;
    collapsed: boolean;
    className?: string;
  }>
> = ({ collapsed, children: wrapperChildren, ...props }) => (
  <li {...props}>{collapsed ? wrapperChildren : wrapperChildren}</li>
);

export const SidebarItem = forwardRef<Element, SidebarItemProps>(
  (
    {
      active: isActive,
      as: Component = "a",
      children,
      className,
      icon: Icon,
      label,
      ...props
    },
    ref
  ) => {
    const { collapsed } = useSidebarContext();
    const id = useId();
    const { item, itemIcon, label: itemLabel } = sidebar();
    return (
      <ListItem
        className={cn(collapsed && "", "cursor-pointer")}
        collapsed={collapsed}
        data-active={isActive}
        id={id}
      >
        <Component
          className={item({ className, active: isActive, collapsed })}
          data-active={isActive}
          ref={ref}
          {...props}
        >
          {Icon ? (
            <span
              aria-hidden
              className={itemIcon({ active: isActive, collapsed })}
            >
              {Icon}
            </span>
          ) : null}
          {collapsed && !Icon ? (
            <span className="font-bold">
              {(children as string).charAt(0).toLocaleUpperCase()}
            </span>
          ) : null}
          <div
            className={cn(
              collapsed ? "opacity-0" : "opacity-100",
              "transition-opacity duration-[400ms] w-full flex items-center justify-between"
            )}
          >
            {!collapsed && (
              <span className="text-left" id={id}>
                {children}
              </span>
            )}

            {!collapsed && label ? (
              <span className={itemLabel({ className: "ml-auto" })}>
                {label}
              </span>
            ) : null}
          </div>
        </Component>
      </ListItem>
    );
  }
);
SidebarItem.displayName = "Sidebar.Item";