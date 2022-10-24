import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import ContentCard, { ContentCardProps } from "./";
import EitherRoot from "../root";
import { Button } from "..";

export default {
	title: "Blocks/ContentCard",
	component: ContentCard,
} as Meta;

const Template: Story<ContentCardProps> = (args) => (
	<EitherRoot>
		<ContentCard {...args}>ContentCard</ContentCard>
	</EitherRoot>
);

export const Main = Template.bind({});

Main.argTypes = {
	mode: {
		options: ["solid", "outline"],
		control: { type: "radio" },
	},
};

Main.args = {
	title: "Дистрибуция",
	text: "В нашем распоряжении более 150 стриминговых площадок по всему миру. Ваша музыка — на каждой из них.",
	actions: (
		<div>
			<Button>Action</Button>
		</div>
	),
};
