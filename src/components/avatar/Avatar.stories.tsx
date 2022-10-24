import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Avatar, { AvatarProps } from "./";
import EitherRoot from "../root";

export default {
	title: "Blocks/Avatar",
	component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => (
	<EitherRoot>
		<Avatar {...args}>Avatar</Avatar>
	</EitherRoot>
);

export const Main = Template.bind({});

Main.args = {
	src: "https://tx.me/i/userpic/320/eitherdigital.jpg",
	name: "Either Digital",
	userId: 1
};
