import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Spinner, { SpinnerProps } from "./";
import EitherRoot from "../root";

export default {
	title: "Blocks/Spinner",
	component: Spinner,
} as Meta;

const Template: Story<SpinnerProps> = (args) => (
	<EitherRoot>
		<Spinner {...args} />
	</EitherRoot>
);

export const Main = Template.bind({});
Main.argTypes = {
	size: {
		options: ["xs", "sm", "md", "lg"],
		control: { type: "radio" },
	},
};
