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
      open={context.open}
      onOpenChange={context.setOpen}
      className={cn(
        "fixed left-0 top-[4rem] z-30 h-[calc(100vh-4rem)] w-full shrink-0 -translate-x-[200%] border-r border-none bg-white transition-[width,transform] duration-500 data-[open=true]:translate-x-0 dark:border-neutral-800 dark:bg-neutral-950 md:!sticky md:-ml-4 md:block md:translate-x-0 md:duration-300",
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
                  className="max-h-[2rem] min-h-[2rem] list-disc"
                  label={item.label && <Badge>{item.label}</Badge>}
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
