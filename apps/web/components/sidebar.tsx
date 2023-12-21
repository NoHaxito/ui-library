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

const sidebarItems = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Installation",
        href: "/docs/getting-started/installation",
      },
      {
        title: "Customization",
        href: "/docs/getting-started/customization",
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        title: "Accordion",
        href: "/docs/components/accordion",
      },
      {
        title: "Alert dialog",
        href: "/docs/components/alert-dialog",
      },
      {
        title: "Card",
        href: "/docs/components/card",
      },
      {
        title: "Checkbox",
        href: "/docs/components/checkbox",
      },
      {
        title: "Collapsible",
        href: "/docs/components/collapsible",
      },
      {
        title: "Context Menu",
        href: "/docs/components/context-menu",
      },
      {
        title: "Dialog",
        href: "/docs/components/dialog",
      },
      {
        title: "Dropdown Menu",
        href: "/docs/components/dropdown-menu",
      },
      {
        title: "Hover Card",
        href: "/docs/components/hover-card",
      },
      {
        title: "Input",
        href: "/docs/components/input",
      },
      {
        title: "Menubar",
        href: "/docs/components/menubar",
      },
      {
        title: "Popover",
        href: "/docs/components/popover",
      },
      {
        title: "Progress",
        href: "/docs/components/progress",
      },
      {
        title: "Radio Group",
        href: "/docs/components/radio-group",
      },
      {
        title: "Select",
        href: "/docs/components/select",
      },
      {
        title: "Switch",
        href: "/docs/components/switch",
      },
      {
        title: "Tabs",
        href: "/docs/components/tabs",
      },
      {
        title: "Tooltip",
        href: "/docs/components/tooltip",
      },
    ],
  },
];

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
        "bg-transparent dark:bg-transparent border-none data-[open=true]:translate-x-0 -translate-x-[200%] border-r dark:border-neutral-800 data-[open=true]:min-w-full fixed md:translate-x-0 top-[4rem] duration-500 md:duration-300 z-30 h-[calc(100vh-4rem)] w-full shrink md:!sticky md:block",
      )}
    >
      <SidebarItems>
        <SidebarItemGroup>
          {sidebarItems.map((item) => (
            <SidebarItemCollapse
              defaultOpen
              key={item.title}
              itemTitle={item.title}
              className="font-bold dark:text-white"
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
