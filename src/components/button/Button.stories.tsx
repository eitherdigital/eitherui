import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button, { ButtonProps } from "./";
import EitherRoot from "../root";

export default {
	title: "Blocks/Button",
	component: Button,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => (
	<EitherRoot>
		<Button {...args}>Button</Button>
	</EitherRoot>
);

// Reuse that template for creating different stories
export const Main = Template.bind({});
