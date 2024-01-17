"use client";
import Link from "next/link";
import {
  Sidebar,
  SidebarItem,
  SidebarItems,
  SidebarItemsGroup,
  SidebarItemCollapse,
} from "@deluxe/ui";
import { usePathname } from "next/navigation";
import { sidebarItems } from "@/config/sidebar";
import { Badge } from "@/components/badge";
import { useSidebarContext } from "./sidebar-toggle";
export function DocsSidebar() {
  const pathname = usePathname();
  const { context } = useSidebarContext();
  return (
    <Sidebar
      open={context.open}
      onOpenChange={context.setOpen}
      className="border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 fixed left-0 top-[4rem] h-[calc(100vh-4rem)] shrink-0 -translate-x-[200%] data-[open=true]:translate-x-0 md:sticky md:-ml-4 md:block md:translate-x-0 md:duration-300"
    >
      <SidebarItems className="[scrollbar-gutter:stable] h-[calc(100vh-4rem)]">
        <SidebarItemsGroup>
          {sidebarItems.map((item, index) => (
            <SidebarItemCollapse
              key={index}
              className="max-h-[2rem] min-h-[2rem] my-1 px-2 py-0.5 pb-0 font-bold text-deluxe-900 dark:text-white"
              itemTitle={item.title}
              defaultOpen
            >
              {item.items.map((subItem, index) => {
                const isActive = pathname === subItem.href;
                return (
                  <SidebarItem
                    key={index}
                    className="max-h-[2rem] px-4 min-h-[2rem]"
                    as={Link}
                    label={
                      subItem.label ? <Badge>{subItem.label}</Badge> : null
                    }
                    disabled={subItem.disabled}
                    active={isActive}
                    href={subItem.href}
                  >
                    {subItem.title}
                  </SidebarItem>
                );
              })}
            </SidebarItemCollapse>
          ))}
        </SidebarItemsGroup>
      </SidebarItems>
    </Sidebar>
  );
}
