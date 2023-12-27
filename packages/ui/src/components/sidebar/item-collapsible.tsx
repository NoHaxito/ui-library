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
  const { item, itemIcon } = sidebar();
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
        <div
          className={cn(
            context.collapsed ? "opacity-0" : "opacity-100",
            "flex w-full items-center justify-between transition-opacity duration-[400ms]",
          )}
        >
          {props.itemTitle}
          <span className="ml-auto">
            <CaretRight className="transition group-data-[state=open]:rotate-90" />
          </span>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent
        className={cn(
          context.collapsed && "!px-0",
          "data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden px-4 py-0.5 pb-0 text-sm transition-all",
          classNames?.contentCollapsed,
        )}
        ref={forwardedRef}
      >
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
});

SidebarItemCollapse.displayName = "Sidebar.ItemCollapse";
