"use client";
import type {
  ComponentProps,
  ElementType,
  FC,
  PropsWithChildren,
  ReactNode,
} from "react";
import { forwardRef } from "react";
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

export const SidebarItem = forwardRef<HTMLLIElement, SidebarItemProps>(
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
    ref,
  ) => {
    const {
      context: { collapsed },
    } = useSidebarContext();
    const { item, itemIcon } = sidebar();
    return (
      <li
        className={cn("cursor-pointer list-none")}
        ref={ref}
        data-active={isActive}
      >
        <Component
          className={item({ className, active: isActive, collapsed })}
          data-active={isActive}
          {...props}
        >
          {Icon && <span className={itemIcon()}>{Icon}</span>}
          {collapsed && !Icon ? (
            <span className="font-bold">
              {(children as string).charAt(0).toLocaleUpperCase()}
            </span>
          ) : null}
          <div
            className={cn(
              collapsed ? "opacity-0 hidden" : "opacity-100",
              "transition-opacity duration-[300ms] flex items-center justify-between w-full",
            )}
          >
            {children}
            {label && <div>{label}</div>}
          </div>
        </Component>
      </li>
    );
  },
);
SidebarItem.displayName = "Sidebar.Item";
