import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Text, { TextProps } from "./";
import EitherRoot from "../root";

export default {
	title: "Blocks/Text",
	component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => (
	<EitherRoot>
		<Text {...args}>Text</Text>
	</EitherRoot>
);

export const Main = Template.bind({});
