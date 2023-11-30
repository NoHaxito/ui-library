import type { Meta, StoryObj } from "@storybook/react";
import {
  Sidebar,
  SidebarItems,
  SidebarItemGroup,
  SidebarItem,
} from "@sihaxito/deluxe-ui";
import { HomeIcon } from "../icons/home";
import { InboxIcon } from "../icons/inbox";
import { SettingsIcon } from "../icons/settings";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => (
    <Sidebar {...props}>
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem
            active
            as="div"
            collapsed={props.collapsed}
            icon={HomeIcon}
          >
            Home
          </SidebarItem>
          <SidebarItem as="div" collapsed={props.collapsed} icon={InboxIcon}>
            Inbox
          </SidebarItem>
          <SidebarItem as="div" collapsed={props.collapsed} icon={SettingsIcon}>
            Settings
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  ),
  name: "Sidebar",
  args: {
    collapsed: false,
  },
};
