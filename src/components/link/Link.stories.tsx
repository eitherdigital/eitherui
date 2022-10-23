import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Link, { LinkProps } from "./";
import EitherRoot from "../root";

export default {
	title: "Blocks/Link",
	component: Link,
} as Meta;

const Template: Story<LinkProps> = (args) => (
	<EitherRoot>
		<Link href="#" {...args}>
			Link
		</Link>
	</EitherRoot>
);

export const Main = Template.bind({});

Main.args = {
	isExternal: false,
};
