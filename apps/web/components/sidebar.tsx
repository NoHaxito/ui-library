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
import { sidebarItems } from "@/data/sidebar-items";

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
      open={context.open}
      onOpenChange={context.setOpen}
      
      className={cn(
        "left-0 md:-ml-4 bg-white transition-[width,transform] dark:bg-neutral-950 border-none data-[open=true]:translate-x-0 -translate-x-[200%] border-r dark:border-neutral-800 fixed md:translate-x-0 top-[4rem] duration-500 md:duration-300 z-30 h-[calc(100vh-4rem)] w-full shrink-0 md:!sticky md:block"
      )}
    >
      <SidebarItems>
        <SidebarItemGroup>
          {sidebarItems.map((item) => (
            <SidebarItemCollapse
              defaultOpen
              key={item.title}
              itemTitle={item.title}
              className="font-bold text-neutral-900 dark:text-white"
            >
              {item.items.map((item) => (
                <SidebarItem
                  key={item.title}
                  as={Link}
                  href={item.href}
                  active={pathname === item.href}
                  className="list-disc min-h-[2rem] max-h-[2rem]"
                >
                  {item.title}
                </SidebarItem>
              ))}
            </SidebarItemCollapse>
          ))}
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
