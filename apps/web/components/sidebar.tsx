"use client";

import {
  Sidebar,
  SidebarHead,
  SidebarHeadLogo,
  SidebarHeadToggle,
  SidebarHeadTitle,
  SidebarItems,
  SidebarItemGroup,
  SidebarItem,
  SidebarHeadToggleOpen,
} from "@sihaxito/deluxe-ui";
import { Award, ChevronLeft, Home, Inbox, X } from "lucide-react";
import { useEffect } from "react";
import { useMediaQuery } from "../lib/use-mediaquery";
import { cn } from "../lib/utils";
import { useSidebarContext } from "./sidebar-context";

export function SidebarComp() {
  const { context } = useSidebarContext();
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
      overlay={context.overlay}
      collapsed={context.collapsed}
      open={context.open}
      onOpenChange={context.setOpen}
      onCollapsedChange={context.setCollapsed}
      className={cn(
        "data-[open=true]:translate-x-0 data-[open=true]:!w-56 -translate-x-[200%]",
        "transition-all md:translate-x-0 border-r dark:border-neutral-800 fixed top-0 z-30 h-[calc(100vh)] w-full shrink-0 md:!sticky md:!block",
      )}
    >
      <SidebarHead>
        <SidebarHeadLogo>
          <Award className="h-8 w-8" />
        </SidebarHeadLogo>
        <SidebarHeadTitle>Deluxe UI</SidebarHeadTitle>
        <SidebarHeadToggle />
        <SidebarHeadToggleOpen />
      </SidebarHead>
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem icon={<Home className="-ml-0.5" />} active>
            Home
          </SidebarItem>
          <SidebarItem icon={<Inbox className="-ml-0.5" />}>Inbox</SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
