import { CaretLeft, Gear, Layout, PaperPlane } from "@phosphor-icons/react";
import {
  Sidebar,
  SidebarItems,
  SidebarItemGroup,
  SidebarItem,
} from "@sihaxito/deluxe-ui";
import { useState } from "react";

export default function SidebarDemo() {
  const [active, setActive] = useState(1);
  return (
    <Sidebar className="absolute left-0 top-0 h-full border-r dark:border-neutral-800">
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem
            active={active === 1}
            onClick={() => setActive(1)}
            icon={<Layout />}
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            active={active === 2}
            onClick={() => setActive(2)}
            icon={<PaperPlane />}
          >
            Email
          </SidebarItem>
          <SidebarItem
            active={active === 3}
            onClick={() => setActive(3)}
            icon={<Gear />}
          >
            Settings
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
