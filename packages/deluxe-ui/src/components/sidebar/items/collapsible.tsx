"use client";

import * as React from "react";
import { CaretRight } from "@phosphor-icons/react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../collapsible";
import { useSidebarContext } from "../context";
import { sidebarTheme } from "../theme";
import { cn } from "../../../lib/utils";

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
  const { base, icon, title } = sidebarTheme.item();
  return (
    <Collapsible defaultOpen={props.defaultOpen}>
      <CollapsibleTrigger
        className={base({
          className,
          collapsed: context.collapsed,
        })}
      >
        {props.icon ? <span className={icon()}>{props.icon}</span> : null}
        {context.collapsed && !props.icon ? (
          <span className="font-bold">
            {(props.itemTitle as string).charAt(0).toLocaleUpperCase()}
          </span>
        ) : null}
        <div className={title({ collapsed: context.collapsed })}>
          {props.itemTitle}
          <span className="ml-auto">
            <CaretRight
              className={icon({
                className:
                  "transition group-data-[state=open]:rotate-90 h-4 w-4",
              })}
            />
          </span>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent
        className={cn('px-4', classNames?.contentCollapsed)}
        ref={forwardedRef}
      >
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
});

SidebarItemCollapse.displayName = "SidebarItemCollapse";
