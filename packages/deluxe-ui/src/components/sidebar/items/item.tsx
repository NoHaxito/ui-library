"use client";
import {
  type ComponentProps,
  forwardRef,
  type FC,
  type PropsWithChildren,
  type ElementType,
  type ReactNode,
} from "react";
import { sidebarTheme } from "../theme";
import { useSidebarContext } from "../context";

export interface SidebarItemsProps extends ComponentProps<"ul"> {
  as?: ElementType;
  href?: string;
  icon?: ReactNode;
  active?: boolean;
  label?: ReactNode;
  disabled?: boolean;
}

const ListItem: FC<
  PropsWithChildren<{
    collapsed: boolean;
    className?: string;
    // tooltip?: {
    //   text: ReactNode;
    //   rootProps?: TooltipProps;
    //   triggerProps?: TooltipTriggerProps;
    //   contentProps?: TooltipContentProps;
    // } | null;
    tooltip?: null;
  }>
> = ({ tooltip, collapsed, children: wrapperChildren, ...props }) => (
  <>
    {tooltip && collapsed ? (
      //   <Tooltip {...tooltip.rootProps}>
      //     <TooltipTrigger
      //       className={cn(tooltip.triggerProps?.className)}
      //       {...tooltip.triggerProps}
      //     >
      //       <li {...props}>{wrapperChildren}</li>
      //     </TooltipTrigger>
      //     <TooltipContent
      //       sideOffset={4}
      //       {...tooltip.contentProps}
      //       className={cn(tooltip.contentProps?.className)}
      //     >
      //       <div>{tooltip.text}</div>
      //     </TooltipContent>
      //   </Tooltip>
      <li {...props}>{wrapperChildren}</li>
    ) : (
      <li {...props}>{wrapperChildren}</li>
    )}
  </>
);

export const SidebarItem = forwardRef<HTMLUListElement, SidebarItemsProps>(
  (
    {
      disabled,
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
    const {
      context: { collapsed },
    } = useSidebarContext();
    const { base, icon, title, wrapper } = sidebarTheme.item();
    return (
      <ListItem
        collapsed={collapsed}
        data-active={isActive}
        className={wrapper()}
      >
        <Component
          className={base({ className, active: isActive, collapsed, disabled })}
          data-active={isActive}
          ref={ref}
          {...props}
        >
          {Icon ? <span className={icon()}>{Icon}</span> : null}
          {collapsed && !Icon ? (
            <span className="font-bold">
              {(children as string).charAt(0).toLocaleUpperCase()}
            </span>
          ) : null}
          <div className={title({ collapsed })}>
            {children}
            {label ? <div>{label}</div> : null}
          </div>
        </Component>
      </ListItem>
    );
  }
);

SidebarItem.displayName = "SidebarItem";
