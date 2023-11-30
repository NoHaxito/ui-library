import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@sihaxito/deluxe-ui";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => (
    <Button className={props.className} {...props}>
      {props.children}
    </Button>
  ),
  name: "Button",
  args: {
    children: "Hello",
    type: "button",
    className: "hover:translate-x-2",
    disabled: false,
    buttonStyle: "outline",
  },
};
