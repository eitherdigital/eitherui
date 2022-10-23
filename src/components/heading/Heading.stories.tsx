import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Heading, { HeadingProps } from "./";
import EitherRoot from "../root";

export default {
	title: "Blocks/Heading",
	component: Heading,
} as Meta;

const Template: Story<HeadingProps> = (args) => (
	<EitherRoot>
		<Heading {...args}>Heading</Heading>
	</EitherRoot>
);

export const Main = Template.bind({});
