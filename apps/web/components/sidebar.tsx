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
  SidebarItemCollapse,
} from "@sihaxito/deluxe-ui";

import {
  Award,
  BarChartBig,
  Bell,
  Home,
  Inbox,
  List,
  MoreVertical,
  Send,
  Settings,
  UserIcon,
  Users2,
  X,
} from "lucide-react";
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
        "data-[open=true]:translate-x-0 -translate-x-[200%] border-r dark:border-neutral-800 data-[open=true]:min-w-full fixed md:translate-x-0 top-0 duration-500 md:duration-300 z-30 h-[calc(100vh)] w-full shrink md:!sticky md:block",
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
        <SidebarItemGroup
          tooltip={{
            delayDuration: 0.6,
          }}
        >
          <SidebarItem
            tooltip={{ text: "Home", contentProps: { side: "right" } }}
            icon={<Home />}
            active
          >
            Home
          </SidebarItem>
          <SidebarItem
            tooltip={{ text: "Inbox", contentProps: { side: "right" } }}
            icon={<Inbox />}
          >
            Inbox
          </SidebarItem>
          <SidebarItem
            tooltip={{ text: "Analytics", contentProps: { side: "right" } }}
            icon={<BarChartBig />}
            label={
              <span className="px-3 py-1 rounded-lg text-white bg-blue-500 text-xs">
                Pro
              </span>
            }
          >
            Analytics
          </SidebarItem>
          <SidebarItem
            tooltip={{ text: "Users", contentProps: { side: "right" } }}
            icon={<Users2 />}
          >
            Users
          </SidebarItem>
          <SidebarItem
            tooltip={{ text: "Notifications", contentProps: { side: "right" } }}
            icon={<Bell />}
            label={
              <span className="p-1 rounded-full text-white bg-red-500 text-xs">
                +3
              </span>
            }
          >
            Notifications
          </SidebarItem>
          <SidebarItem
            tooltip={{
              text: "Settings",
              contentProps: {
                side: "right",
              },
            }}
            icon={<Settings />}
          >
            Settings
          </SidebarItem>
          <SidebarItemCollapse
            classNames={{
              contentCollapsed:
                "bg-neutral-200/50 dark:bg-neutral-800/80 rounded-lg",
            }}
            icon={<MoreVertical />}
            itemTitle={"View more"}
          >
            <SidebarItem icon={<List />}>Tasks</SidebarItem>
            <SidebarItem icon={<Send />}>Messages</SidebarItem>
            <SidebarItem icon={<UserIcon />}>Profile</SidebarItem>
          </SidebarItemCollapse>
        </SidebarItemGroup>
      </SidebarItems>
      <SidebarFooter className="group px-2.5 py-2">
        <div
          className="block rounded-xl group truncate w-full min-h-[3rem] max-h-[3rem] flex items-center text-sm outline-none ring-inset focus-visible:ring-2 focus-visible:rounded-xl py-2.5 px-3 gap-x-3 bg-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-800 dark:bg-neutral-800/80"
          // icon={
          //   <img
          //     src="https://cdn.discordapp.com/avatars/405799482492583936/f7c53710b2f12372efd68c36e3bd2c2e.png?size=2048"
          //     className="rounded-full"
          //   />
          // }
        >
          <span>
            <img
              src="https://cdn.discordapp.com/avatars/405799482492583936/f7c53710b2f12372efd68c36e3bd2c2e.png?size=2048"
              className="rounded-full min-h-[1.5rem] min-w-[1.5rem] max-h-[1.5rem] max-w-[1.5rem] h-7 w-7 flex-none flex items-center justify-center"
            />
          </span>
          <div className="group-data-[collapsed=true]:hidden transition-opacity duration-[300ms] group-data-[collapsed=true]:opacity-0 flex justify-between items-center w-full">
            <div className="flex-1 w-full flex flex-col">
              <p className="font-bold dark:text-white text-black">NoHaxito</p>
              <span className="text-sm truncate text-neutral-500">
                nohaxito@gmail.com
              </span>
            </div>
            <MoreVertical className="text-right min-h-[1.2rem] max-h-[1.2rem] min-w-[1.2rem] max-w-[1.2rem] " />
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
