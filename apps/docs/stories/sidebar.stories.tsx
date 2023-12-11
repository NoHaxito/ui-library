import type { Meta, StoryObj } from "@storybook/react";
import {
  Sidebar,
  SidebarItems,
  SidebarItemGroup,
  SidebarItem,
  SidebarHead,
  SidebarHeadLogo,
  SidebarHeadTitle,
  SidebarHeadToggle,
} from "@sihaxito/deluxe-ui";
import { HomeIcon } from "../icons/home";
import { InboxIcon } from "../icons/inbox";
import { SettingsIcon } from "../icons/settings";
import { Logo } from "../icons/logo";

const items = [
  {
    id: 1,
    icon: <HomeIcon />,
    label: "New",
    text: "Home",
    active: true,
  },
  {
    id: 2,
    icon: <InboxIcon />,
    text: "Inbox",
    active: false,
  },
  {
    id: 4,
    icon: <SettingsIcon />,
    text: "Settings",
  },
];

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => {
    return (
      <Sidebar>
        <SidebarHead>
          <SidebarHeadLogo>
            <Logo height={32} width={32} />
          </SidebarHeadLogo>
          <SidebarHeadTitle>Sidebar Component</SidebarHeadTitle>
          <SidebarHeadToggle />
        </SidebarHead>
        <SidebarItems>
          <SidebarItemGroup>
            {items.map((item) => {
              return (
                <SidebarItem
                  active={item.active}
                  as="a"
                  className="data-[active=false]:!bg-gray-300"
                  href={item.href}
                  icon={item.icon}
                  key={item.id}
                  label={item.label}
                >
                  {item.text}
                </SidebarItem>
              );
            })}
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    );
  },
  name: "Sidebar",
};
