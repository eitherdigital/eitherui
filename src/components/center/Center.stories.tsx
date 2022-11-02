import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Center, { CenterProps } from "./";
import { Heading, Text, EitherRoot } from "..";

export default {
	title: "Layout/Center",
	component: Center,
} as Meta;

const Template: Story<CenterProps> = args => (
	<EitherRoot {...args}>
		<Center width="100%">
			<Heading>Это центр</Heading>
		</Center>
	</EitherRoot>
);

export const Main = Template.bind({});
