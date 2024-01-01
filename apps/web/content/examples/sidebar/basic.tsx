import { Gear, Layout, PaperPlane } from "@phosphor-icons/react";
import {
  Sidebar,
  SidebarItems,
  SidebarItemGroup,
  SidebarItem,
} from "@sihaxito/deluxe-ui";

export default function SidebarDemo() {
  return (
    <Sidebar>
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
