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
import {
  Tooltip,
  type TooltipProps,
  TooltipTrigger,
  type TooltipTriggerProps,
  TooltipContent,
  type TooltipContentProps,
} from "../tooltip";
import { useSidebarContext } from "./sidebar-context";

export interface SidebarItemProps extends Omit<ComponentProps<"div">, "ref"> {
  as?: ElementType;
  href?: string;
  icon?: ReactNode;
  active?: boolean;
  label?: ReactNode;
  tooltip?: {
    text: ReactNode;
    rootProps?: TooltipProps;
    triggerProps?: TooltipTriggerProps;
    contentProps?: TooltipContentProps;
  } | null;
}
const ListItem: FC<
  PropsWithChildren<{
    collapsed: boolean;
    className?: string;
    tooltip?: {
      text: ReactNode;
      rootProps?: TooltipProps;
      triggerProps?: TooltipTriggerProps;
      contentProps?: TooltipContentProps;
    } | null;
  }>
> = ({ tooltip, collapsed, children: wrapperChildren, ...props }) => (
  <>
    {tooltip && collapsed ? (
      <Tooltip {...tooltip.rootProps}>
        <TooltipTrigger
          className={cn(tooltip.triggerProps?.className)}
          {...tooltip.triggerProps}
        >
          <li {...props}>{wrapperChildren}</li>
        </TooltipTrigger>
        <TooltipContent
          sideOffset={4}
          {...tooltip.contentProps}
          className={cn(tooltip.contentProps?.className)}
        >
          <div>{tooltip?.text}</div>
        </TooltipContent>
      </Tooltip>
    ) : (
      <li {...props}>{wrapperChildren}</li>
    )}
  </>
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
      tooltip,
      ...props
    },
    ref,
  ) => {
    const {
      context: { collapsed },
    } = useSidebarContext();
    const { item, itemIcon } = sidebar();
    return (
      <ListItem
        className={cn("cursor-pointer list-none")}
        data-active={isActive}
        tooltip={tooltip}
        collapsed={collapsed}
      >
        <Component
          className={item({ className, active: isActive, collapsed })}
          ref={ref}
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
              collapsed ? "opacity-0" : "opacity-100",
              "transition-opacity duration-[800ms] flex items-center justify-between w-full",
            )}
          >
            {children}
            {label && <div>{label}</div>}
          </div>
        </Component>
      </ListItem>
    );
  },
);
SidebarItem.displayName = "Sidebar.Item";
