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
} from "lucide-react";
import { useEffect } from "react";
import { useMediaQuery } from "@/lib/use-mediaquery";
import { cn } from "@/lib/utils";
import { useSidebarContext } from "@/components/sidebar-context";

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
      className={cn(
        "fixed top-0 z-30 h-[calc(100vh)] w-full shrink -translate-x-[200%] border-r duration-500 data-[open=true]:min-w-full data-[open=true]:translate-x-0 dark:border-neutral-800 md:!sticky md:block md:translate-x-0 md:duration-300",
      )}
      collapsed={context.collapsed}
      onCollapsedChange={context.setCollapsed}
      onOpenChange={context.setOpen}
      open={context.open}
      overlay={context.overlay}
      // className="data-[open=false]:!-translate-y-[200%] data-[open=true]:translate-y-0 -translate-y-[200%] data-[open=true]:h-64 rounded-b-2xl md:rounded-none min-w-full md:data-[collapsed=false]:min-w-[16rem] data-[collapsed=true]:min-w-[4.5rem] md:transition-all transition-[transform] md:translate-x-0 md:data-[open=false]:translate-y-0 border-r dark:border-neutral-800 fixed top-0 duration-500 z-30 md:h-[calc(100vh)] w-full shrink-0 md:!sticky md:!block"
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
            active
            icon={<Home />}
            tooltip={{ text: "Home", contentProps: { side: "right" } }}
          >
            Home
          </SidebarItem>
          <SidebarItem
            icon={<Inbox />}
            tooltip={{ text: "Inbox", contentProps: { side: "right" } }}
          >
            Inbox
          </SidebarItem>
          <SidebarItem
            icon={<BarChartBig />}
            label={
              <span className="rounded-lg bg-blue-500 px-3 py-1 text-xs text-white">
                Pro
              </span>
            }
            tooltip={{ text: "Analytics", contentProps: { side: "right" } }}
          >
            Analytics
          </SidebarItem>
          <SidebarItem
            icon={<Users2 />}
            tooltip={{ text: "Users", contentProps: { side: "right" } }}
          >
            Users
          </SidebarItem>
          <SidebarItem
            icon={<Bell />}
            label={
              <span className="rounded-full bg-red-500 p-1 text-xs text-white">
                +3
              </span>
            }
            tooltip={{ text: "Notifications", contentProps: { side: "right" } }}
          >
            Notifications
          </SidebarItem>
          <SidebarItem
            icon={<Settings />}
            tooltip={{
              text: "Settings",
              contentProps: {
                side: "right",
              },
            }}
          >
            Settings
          </SidebarItem>
          <SidebarItemCollapse
            classNames={{
              contentCollapsed:
                "bg-neutral-200/50 dark:bg-neutral-800/80 rounded-lg",
            }}
            icon={<MoreVertical />}
            itemTitle="View more"
          >
            <SidebarItem icon={<List />}>Tasks</SidebarItem>
            <SidebarItem icon={<Send />}>Messages</SidebarItem>
            <SidebarItem icon={<UserIcon />}>Profile</SidebarItem>
          </SidebarItemCollapse>
          s
        </SidebarItemGroup>
      </SidebarItems>
      <SidebarFooter className="group px-2.5 py-2">
        <div className="group flex max-h-[3rem] min-h-[3rem] w-full items-center gap-x-3 truncate rounded-xl bg-neutral-200 px-3 py-2.5 text-sm outline-none ring-inset hover:bg-neutral-300 focus-visible:rounded-xl focus-visible:ring-2 dark:bg-neutral-800/80 dark:hover:bg-neutral-800">
          <span>
            <img
              alt="papayita"
              className="flex h-7 max-h-[1.5rem] min-h-[1.5rem] w-7 min-w-[1.5rem] max-w-[1.5rem] flex-none items-center justify-center rounded-full"
              src="https://cdn.discordapp.com/avatars/405799482492583936/f7c53710b2f12372efd68c36e3bd2c2e.png?size=2048"
            />
          </span>
          <div className="flex w-full items-center justify-between transition-opacity duration-[300ms] group-data-[collapsed=true]:hidden group-data-[collapsed=true]:opacity-0">
            <div className="flex w-full flex-1 flex-col">
              <p className="font-bold text-black dark:text-white">NoHaxito</p>
              <span className="truncate text-sm text-neutral-500">
                nohaxito@gmail.com
              </span>
            </div>
            <MoreVertical className="max-h-[1.2rem] min-h-[1.2rem] min-w-[1.2rem] max-w-[1.2rem] text-right " />
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
