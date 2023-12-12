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
  SidebarFooter,
} from "@sihaxito/deluxe-ui";

import { Award, ChevronLeft, Home, Inbox, MoreVertical, X } from "lucide-react";
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
      open={context.open}
      onOpenChange={context.setOpen}
      overlay={context.overlay}
      collapsed={context.collapsed}
      onCollapsedChange={context.setCollapsed}
      // className="data-[open=false]:!-translate-y-[200%] data-[open=true]:translate-y-0 -translate-y-[200%] data-[open=true]:h-64 rounded-b-2xl md:rounded-none min-w-full md:data-[collapsed=false]:min-w-[16rem] data-[collapsed=true]:min-w-[4.5rem] md:transition-all transition-[transform] md:translate-x-0 md:data-[open=false]:translate-y-0 border-r dark:border-neutral-800 fixed top-0 duration-500 z-30 md:h-[calc(100vh)] w-full shrink-0 md:!sticky md:!block"
      className={cn(
        "data-[open=true]:translate-x-0 -translate-x-[200%] border-r dark:border-neutral-800 data-[open=true]:min-w-full fixed md:translate-x-0 top-0 duration-500 z-30 h-[calc(100vh)] w-full shrink md:!sticky md:block",
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
      <SidebarFooter className="px-2 py-2">
        <SidebarItem
          as="div"
          className="w-full flex-1 bg-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-800 dark:bg-neutral-800/80"
          icon={
            <img
              src="https://cdn.discordapp.com/avatars/405799482492583936/f7c53710b2f12372efd68c36e3bd2c2e.png?size=2048"
              className="rounded-full"
            />
          }
        >
          <div className="flex-1 gap-3 flex justify-between items-center">
            <div className="flex-1 w-full flex flex-col">
              <p className="font-bold dark:text-white text-black">NoHaxito</p>
              <span className="text-sm text-neutral-500">
                nohaxito@gmail.com
              </span>
            </div>
            <MoreVertical className="text-right min-h-[1.2rem] max-h-[1.2rem] min-w-[1.2rem] max-w-[1.2rem] " />
          </div>
        </SidebarItem>
      </SidebarFooter>
    </Sidebar>
  );
}
