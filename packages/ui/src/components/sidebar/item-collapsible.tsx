"use client";

import * as React from "react";
import { CaretRight } from "@phosphor-icons/react";
import { cn } from "../../utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../collapsible";
import { useSidebarContext } from "./sidebar-context";
import { sidebar } from "./theme";

interface SidebarItemCollapseProps
  extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
  defaultOpen?: boolean;
  icon?: React.ReactNode;
  itemTitle?: React.ReactNode;
  classNames?: {
    contentCollapsed?: string;
  };
}

export const SidebarItemCollapse = React.forwardRef<
  HTMLDivElement,
  SidebarItemCollapseProps
>(({ classNames, children, className, ...props }, forwardedRef) => {
  const { context } = useSidebarContext();
  const {
    item,
    itemTitle,
    itemIcon,
    itemCollapseWrapper,
    itemCollapseIcon,
    itemCollapseContent,
  } = sidebar();
  return (
    <Collapsible defaultOpen={props.defaultOpen}>
      <CollapsibleTrigger
        className={item({
          className,
          collapsed: context.collapsed,
        })}
      >
        {props.icon ? <span className={itemIcon()}>{props.icon}</span> : null}
        {context.collapsed && !props.icon ? (
          <span className="font-bold">
            {(props.itemTitle as string).charAt(0).toLocaleUpperCase()}
          </span>
        ) : null}
        <div className={itemTitle({ collapsed: context.collapsed })}>
          {props.itemTitle}
          <span className={itemCollapseWrapper()}>
            <CaretRight className={itemCollapseIcon()} />
          </span>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent
        className={itemCollapseContent({
          collapsed: context.collapsed,
          className: classNames?.contentCollapsed,
        })}
        ref={forwardedRef}
      >
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
});

SidebarItemCollapse.displayName = "Sidebar.ItemCollapse";
