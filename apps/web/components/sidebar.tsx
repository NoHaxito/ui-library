/* eslint-disable react-hooks/exhaustive-deps -- i dont need context in array dependencies  */
"use client";

import {
  Sidebar,
  SidebarItems,
  SidebarItemGroup,
  SidebarItem,
  SidebarItemCollapse,
} from "@sihaxito/deluxe-ui";
import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "@/lib/use-mediaquery";
import { cn } from "@/lib/utils";
import { sidebarItems } from "@/data/sidebar-items";
import { useSidebarContext } from "./sidebar-context";
import { Badge } from "./badge";

export function SidebarComp() {
  const { context } = useSidebarContext();
  const pathname = usePathname();
  const matches = useMediaQuery("(min-width: 768px)");
  useEffect(() => {
    if (!context.open) return;
    context.setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!matches) {
      context.setOpen(false);
    }
  }, [matches]);
  return (
    <Sidebar
      className={cn(
        "fixed left-0 top-[4rem] z-30 !h-[calc(100vh-4rem)] w-full shrink-0 -translate-x-[200%] border-r border-none bg-white transition-[width,transform] duration-500 data-[open=true]:translate-x-0 dark:border-neutral-800 dark:bg-neutral-950 md:!sticky md:-ml-4 md:block md:translate-x-0 md:duration-300",
      )}
      onOpenChange={context.setOpen}
      open={context.open}
    >
      <SidebarItems className="h-[calc(100vh-4rem)]">
        <SidebarItemGroup>
          {sidebarItems.map((item) => (
            <SidebarItemCollapse
              className="font-bold text-neutral-900 dark:text-white"
              classNames={{
                contentCollapsed:
                  "data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden px-4 py-0.5 pb-0 text-sm transition-all",
              }}
              defaultOpen
              itemTitle={item.title}
              key={item.title}
            >
              {item.items.map((subItem) => (
                <SidebarItem
                  active={pathname === subItem.href}
                  as={Link}
                  className="max-h-[2rem] min-h-[2rem] list-disc"
                  href={subItem.href}
                  key={subItem.title}
                  label={subItem.label ? <Badge>{subItem.label}</Badge> : null}
                >
                  {subItem.title}
                </SidebarItem>
              ))}
            </SidebarItemCollapse>
          ))}
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
