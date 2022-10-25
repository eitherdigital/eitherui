import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Textarea, { TextareaProps } from "./";
import EitherRoot from "../root";
import Div from "../div";

export default {
	title: "Forms/Textarea",
	component: Textarea,
} as Meta;

const Template: Story<TextareaProps> = (args) => (
	<EitherRoot>
		<Div>
			<Textarea {...args} />
		</Div>
	</EitherRoot>
);

export const Main = Template.bind({});

Main.args = {
	placeholder: "Textarea",
};
