import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Switch, { SwitchProps } from "./";
import EitherRoot from "../root";

export default {
	title: "Forms/Switch",
	component: Switch,
} as Meta;

const Template: Story<SwitchProps> = args => (
	<EitherRoot>
		<Switch {...args} />
	</EitherRoot>
);

export const Main = Template.bind({});
Main.argTypes = {
	size: {
		options: ["md", "lg"],
		control: { type: "radio" },
	},
};
