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
import {
  Tooltip,
  type TooltipProps,
  TooltipTrigger,
  type TooltipTriggerProps,
  TooltipContent,
  type TooltipContentProps,
} from "../tooltip";
import { type SidebarVariant, sidebar } from "./theme";
import { useSidebarContext } from "./sidebar-context";

export interface SidebarItemProps
  extends Omit<ComponentProps<"div">, "ref">,
    Omit<SidebarVariant, "open" | "active" | "collapsed"> {
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
          <div>{tooltip.text}</div>
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
      variant,
      ...props
    },
    ref
  ) => {
    const {
      context: { collapsed },
    } = useSidebarContext();
    const { item, itemIcon } = sidebar();
    return (
      <ListItem
        className={cn("cursor-pointer list-none")}
        collapsed={collapsed}
        data-active={isActive}
        tooltip={tooltip}
      >
        <Component
          className={item({ className, active: isActive, collapsed, variant })}
          data-active={isActive}
          ref={ref}
          {...props}
        >
          {Icon ? <span className={itemIcon()}>{Icon}</span> : null}
          {collapsed && !Icon ? (
            <span className="font-bold">
              {(children as string).charAt(0).toLocaleUpperCase()}
            </span>
          ) : null}
          <div
            className={cn(
              collapsed ? "opacity-0" : "opacity-100",
              "transition-opacity duration-[800ms] flex items-center justify-between w-full"
            )}
          >
            {children}
            {label ? <div>{label}</div> : null}
          </div>
        </Component>
      </ListItem>
    );
  }
);
SidebarItem.displayName = "Sidebar.Item";
