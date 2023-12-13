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
  const [open, setOpen] = React.useState(false);
  const id = React.useId();
  const { context } = useSidebarContext();
  const { item, itemIcon } = sidebar();
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={id}>
        <AccordionTrigger
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
              context.collapsed ? "opacity-0 hidden" : "opacity-100",
              "transition-opacity duration-[300ms] flex items-center justify-between w-full",
            )}
          >
            {props.itemTitle}
          </div>
        </AccordionTrigger>
        <AccordionContent
          className={cn(
            context.collapsed && "!px-0",
            "px-4 pb-0 py-1",
            classNames?.contentCollapsed,
          )}
        >
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
});

SidebarItemCollapse.displayName = "Sidebar.ItemCollapse";
