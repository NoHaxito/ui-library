import { CaretLeft, Gear, Layout, PaperPlane } from "@phosphor-icons/react";
import {
  Sidebar,
  SidebarItems,
  SidebarItemGroup,
  SidebarItem,
  SidebarHead,
  SidebarHeadTitle,
  SidebarHeadToggle,
} from "@sihaxito/deluxe-ui";

export default function SidebarDemo() {
  return (
    <Sidebar className="absolute left-0 top-0 h-full">
      <SidebarHead className="w-full">
        <SidebarHeadTitle>Sidebar</SidebarHeadTitle>
        <SidebarHeadToggle />
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
