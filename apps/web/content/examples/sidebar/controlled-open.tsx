import { Gear, Layout, PaperPlane } from "@phosphor-icons/react";
import {
  Sidebar,
  SidebarItems,
  SidebarItemGroup,
  SidebarItem,
  SidebarHead,
  SidebarHeadTitle,
  SidebarHeadToggleOpen,
} from "@sihaxito/deluxe-ui";
import { useState, useEffect } from "react";

export default function SidebarDemo() {
  const [open, setOpen] = useState(true);

  // ignore line 16 to 21, only for example purposes
  useEffect(() => {
    if (open === true) return;
    setTimeout(() => {
      setOpen(true);
    }, 3000);
  }, [open]);

  return (
    <Sidebar
      className="absolute left-0 top-0 z-20 h-full -translate-x-[300%] border-r transition-[width,transform] duration-500 ease-in data-[open=true]:translate-x-0 dark:border-neutral-800"
      open={open}
      onOpenChange={setOpen}
    >
      <SidebarHead className="w-full">
        <SidebarHeadTitle>Sidebar</SidebarHeadTitle>
        <SidebarHeadToggleOpen className="!flex" />
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
