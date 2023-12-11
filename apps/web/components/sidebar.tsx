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
import { Award, Home } from "lucide-react";

export function SidebarComp() {
  return (
    <Sidebar className="border-r dark:border-neutral-800 fixed top-0 z-30 hidden h-[calc(100vh)] w-full shrink-0 md:!sticky md:!block">
      <SidebarHead>
        <SidebarHeadLogo>
          <Award className="h-8 w-8" />
        </SidebarHeadLogo>
        <SidebarHeadTitle>Deluxe UI</SidebarHeadTitle>
        <SidebarHeadToggle />
      </SidebarHead>
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem icon={<Home className="-ml-0.5" />} active href="/">
            Home
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
