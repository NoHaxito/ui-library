"use client";

import {
  Sidebar,
  SidebarItems,
  SidebarItemGroup,
  SidebarItem,
  SidebarItemCollapse,
} from "@sihaxito/deluxe-ui";

import { useEffect } from "react";
import { useMediaQuery } from "@/lib/use-mediaquery";
import { cn } from "@/lib/utils";
import { useSidebarContext } from "./sidebar-context";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SidebarComp() {
  const { context } = useSidebarContext();
  const pathname = usePathname();
  const matches = useMediaQuery("(min-width: 768px)");
  useEffect(() => {
    if (context.collapsed && context.open) {
      context.setCollapsed(false);
    }
  }, [context.open]);
  useEffect(() => {
    if (context.open && context.collapsed) {
      context.setCollapsed(false);
    }
    if (!matches) {
      if (context.collapsed) {
        context.setCollapsed(false);
      }
      context.setOpen(false);
    }
  }, [matches]);
  return (
    <Sidebar
      open={context.open}
      onOpenChange={context.setOpen}
      className={cn(
        "data-[open=true]:translate-x-0 -translate-x-[200%] border-r dark:border-neutral-800 data-[open=true]:min-w-full fixed md:translate-x-0 top-[4rem] duration-500 md:duration-300 z-30 h-[calc(100vh-4rem)] w-full shrink md:!sticky md:block",
      )}
    >
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItemCollapse
            classNames={{ contentCollapsed: "grid gap-y-0.5" }}
            defaultOpen
            itemTitle="Guide"
            className="font-bold dark:text-white"
          >
            <SidebarItem
              as={Link}
              href="/docs/getting-started"
              active={pathname === "/docs/getting-started"}
              className="list-disc min-h-[2rem] max-h-[2rem]"
            >
              Getting started
            </SidebarItem>
            <SidebarItem className="list-disc min-h-[2rem] max-h-[2rem]">
              Customization
            </SidebarItem>
          </SidebarItemCollapse>
          <SidebarItemCollapse
            classNames={{ contentCollapsed: "grid gap-y-0.5" }}
            defaultOpen
            itemTitle="Components"
            className="font-bold dark:text-white"
          >
            <SidebarItem className="list-disc min-h-[2rem] max-h-[2rem]">
              Accordion
            </SidebarItem>
            <SidebarItem className="list-disc min-h-[2rem] max-h-[2rem]">
              Alert dialog
            </SidebarItem>
            <SidebarItem className="list-disc min-h-[2rem] max-h-[2rem]">
              Aspect ratio
            </SidebarItem>
            <SidebarItem className="list-disc min-h-[2rem] max-h-[2rem]">
              Card
            </SidebarItem>
            <SidebarItem className="list-disc min-h-[2rem] max-h-[2rem]">
              Checkbox
            </SidebarItem>
            <SidebarItem className="list-disc min-h-[2rem] max-h-[2rem]">
              Collapsible
            </SidebarItem>
            <SidebarItem className="list-disc min-h-[2rem] max-h-[2rem]">
              Context menu
            </SidebarItem>
            <SidebarItem className="list-disc min-h-[2rem] max-h-[2rem]">
              Dialog
            </SidebarItem>
            <SidebarItem
              as={Link}
              href="/docs/components/dropdown"
              active={pathname === "/docs/components/dropdown"}
              className="list-disc min-h-[2rem] max-h-[2rem]"
            >
              Dropdown Menu
            </SidebarItem>
            <SidebarItem className="list-disc min-h-[2rem] max-h-[2rem]">
              Hover card
            </SidebarItem>
            <SidebarItem className="list-disc min-h-[2rem] max-h-[2rem]">
              Input
            </SidebarItem>
            <SidebarItem className="list-disc min-h-[2rem] max-h-[2rem]">
              Menu bar
            </SidebarItem>
            <SidebarItem className="list-disc min-h-[2rem] max-h-[2rem]">
              Popover
            </SidebarItem>
            <SidebarItem className="list-disc min-h-[2rem] max-h-[2rem]">
              Progress
            </SidebarItem>
            <SidebarItem className="list-disc min-h-[2rem] max-h-[2rem]">
              Select
            </SidebarItem>
            <SidebarItem className="list-disc min-h-[2rem] max-h-[2rem]">
              Slider
            </SidebarItem>
            <SidebarItem className="list-disc min-h-[2rem] max-h-[2rem]">
              Switch
            </SidebarItem>
            <SidebarItem className="list-disc min-h-[2rem] max-h-[2rem]">
              Tabs
            </SidebarItem>
            <SidebarItem className="list-disc min-h-[2rem] max-h-[2rem]">
              Tooltip
            </SidebarItem>
          </SidebarItemCollapse>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
