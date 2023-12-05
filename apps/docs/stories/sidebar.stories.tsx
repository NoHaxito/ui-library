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
import { ContactIcon } from "../icons/contact";
import { BookIcon } from "../icons/book";
import { CoinIcon } from "../icons/coin";

const items = [
  {
    id: 1,
    icon: <HomeIcon className="h-4 w-4" />,
    label: <span className="bg-indigo-500 rounded p-1">New</span>,
    href: "#",
    text: "Home",
    active: true,
  },
  {
    id: 2,
    icon: <InboxIcon className="h-4 w-4" />,
    href: "#",
    text: "Inbox",
    active: false,
  },
  {
    id: 4,
    icon: <SettingsIcon className="h-4 w-4" />,
    href: "#",
    text: "Settings",
  },
  {
    id: 5,
    icon: <ContactIcon className="h-4 w-4" />,
    href: "#",
    text: "Contact",
    active: false,
  },
  {
    id: 6,
    icon: <BookIcon className="h-4 w-4" />,
    href: "#",
    text: "Documentation",
    active: false,
  },
  {
    id: 7,
    icon: <SettingsIcon className="h-4 w-4" />,
    href: "#",
    text: "Settings",
  },
  {
    id: 8,
    icon: <CoinIcon className="h-4 w-4" />,
    href: "#",
    text: "Suscription",
    active: false,
  },
];

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: ({ collapsed }) => {
    return (
      <Sidebar collapsed={collapsed}>
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
  args: {
    collapsed: true,
  },
};
