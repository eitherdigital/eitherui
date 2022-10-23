import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Card, { CardProps } from "./";
import EitherRoot from "../root";

export default {
	title: "Blocks/Card",
	component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => (
	<EitherRoot>
		<Card {...args}>Card</Card>
	</EitherRoot>
);

export const Main = Template.bind({});

Main.argTypes = {
	mode: {
		options: ["solid", "outline"],
		control: { type: "radio" },
	},
};
