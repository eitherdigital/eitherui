import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Stack, { StackProps } from "./";
import EitherRoot from "../root";
import { Button } from "..";

export default {
	title: "Blocks/Stack",
	component: Stack,
} as Meta;

const Template: Story<StackProps> = (args) => (
	<EitherRoot>
		<Stack {...args}>
			<Button>Button 1</Button>
			<Button>Button 2</Button>
		</Stack>
	</EitherRoot>
);

export const Main = Template.bind({});

Main.args = {
	direction: "row",
	spacing: "20px",
	mobileDirection: "column",
	mobileSpacing: "10px",
};
