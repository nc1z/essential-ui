import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import "./button";

export default {
  title: "button",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: { action: "onClick" },
  },
  render: (args) => html`<e-button @click=${args.onClick} label=${args.label}></e-button>`,
} as Meta;

export const Default: StoryObj = {
  name: "Default",
  args: {
    label: "Click me!",
  },
};
