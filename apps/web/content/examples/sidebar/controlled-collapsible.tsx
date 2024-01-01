import { CaretLeft, Gear, Layout, PaperPlane } from "@phosphor-icons/react";
import {
  Sidebar,
  SidebarItems,
  SidebarItemGroup,
  SidebarItem,
  SidebarHead,
  SidebarHeadTitle,
} from "@sihaxito/deluxe-ui";
import { useState } from "react";

export default function SidebarDemo() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sidebar
      className="absolute left-0 top-0 h-full"
      collapsed={collapsed}
      onCollapsedChange={setCollapsed}
    >
      <SidebarHead className="w-full">
        <button
          className="absolute right-0 flex h-5 w-5 translate-x-1/2 items-center justify-center rounded-lg bg-neutral-100 text-black"
          onClick={() => setCollapsed(!collapsed)}
        >
          <CaretLeft />
        </button>
        <SidebarHeadTitle>Sidebar</SidebarHeadTitle>
      </SidebarHead>
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem icon={<Layout />}> Dashboard</SidebarItem>
          <SidebarItem icon={<PaperPlane />}>Email</SidebarItem>
          <SidebarItem icon={<Gear />}>Settings</SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
