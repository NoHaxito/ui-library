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
}

export const SidebarItemCollapse = React.forwardRef<
  HTMLDivElement,
  SidebarItemCollapseProps
>(({ asChild, children, className, ...props }, forwardedRef) => {
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
          asChild
          className={cn(
            context.collapsed ? "mx-0 p-0" : "p-1 mt-1",
            "bg-neutral-200 rounded-lg dark:bg-neutral-800",
          )}
        >
          <div>{children}</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
});

SidebarItemCollapse.displayName = "Sidebar.ItemCollapse";
