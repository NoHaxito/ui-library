"use client";

import { SidebarHeadLogo } from "@sihaxito/deluxe-ui";
import { SidebarHeadTitle } from "@sihaxito/deluxe-ui";
import { SidebarHeadToggle } from "@sihaxito/deluxe-ui";
import { SidebarHead } from "@sihaxito/deluxe-ui";
import {
  Sidebar,
  SidebarItems,
  SidebarItemGroup,
  SidebarItem,
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
    if (!open) {
      return;
    }
    if (!matches) {
      context.setOpen(false);
    }
  }, [matches]);
  return (
    <Sidebar
      collapsed={context.collapsed}
      onCollapsedChange={context.setCollapsed}
      className={cn(
        context.open ? "translate-x-0" : "-translate-x-[200%]",
        "transition-all md:translate-x-0 border-r dark:border-neutral-800 fixed top-0 z-30 h-[calc(100vh)] w-full shrink-0 md:!sticky md:!block",
      )}
    >
      <SidebarHead>
        <SidebarHeadLogo>
          <Award className="h-8 w-8" />
        </SidebarHeadLogo>
        <SidebarHeadTitle>Deluxe UI</SidebarHeadTitle>
        <SidebarHeadToggle />
        <button
          onClick={() => context.setOpen(!context.open)}
          className={cn(
            context.open ? "flex" : "hidden",
            "absolute right-0 md:hidden translate-x-1/2 active:scale-90 ease-in-out duration-300 transform inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 border border-neutral-200 bg-neutral-100 hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:hover:text-neutral-50 h-8 w-8",
          )}
        >
          <X className={cn("transition transform w-[1rem] h-[1rem]")} />
        </button>
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
