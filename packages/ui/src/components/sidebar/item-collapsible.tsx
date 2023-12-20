"use client";

import { ChevronDown } from "lucide-react";
import * as React from "react";
import { cn } from "../../utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion/root";
import { useSidebarContext } from "./sidebar-context";
import { sidebar } from "./theme";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../collapsible";
import { CaretRight } from "@phosphor-icons/react";

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
>(({ classNames, asChild, children, className, ...props }, forwardedRef) => {
  const id = React.useId();
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
        {props.icon && <span className={itemIcon()}>{props.icon}</span>}
        {context.collapsed && !props.icon ? (
          <span className="font-bold">
            {(props.itemTitle as string).charAt(0).toLocaleUpperCase()}
          </span>
        ) : null}
        <div
          className={cn(
            context.collapsed ? "opacity-0" : "opacity-100",
            "transition-opacity duration-[400ms] flex items-center justify-between w-full",
          )}
        >
          {props.itemTitle}
          <span className="ml-auto">
            <CaretRight className="group-data-[state=open]:rotate-90 transition" />
          </span>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent
        className={cn(
          context.collapsed && "!px-0",
          "px-4 pb-0 py-0.5 overflow-hidden text-sm transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",
          classNames?.contentCollapsed,
        )}
      >
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
});

SidebarItemCollapse.displayName = "Sidebar.ItemCollapse";
