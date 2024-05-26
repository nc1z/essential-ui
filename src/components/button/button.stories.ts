import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import ".";
import { ButtonVariant } from "./button.types";

export default {
  title: "button",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: { action: "onClick" },
    variant: {
      options: [ButtonVariant.DEFAULT, ButtonVariant.INVERSE],
      control: { type: "radio" },
    },
  },
  render: (args) => html`<e-button @click=${args.onClick} label=${args.label} variant=${args.variant}></e-button>`,
} as Meta;

export const Default: StoryObj = {
  name: "Default",
  args: {
    label: "Click me!",
    variant: ButtonVariant.DEFAULT,
  },
};
