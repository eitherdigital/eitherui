import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Input, { InputProps } from "./";
import EitherRoot from "../root";
import Div from "../div";

export default {
	title: "Forms/Input",
	component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => (
	<EitherRoot>
		<Div>
			<Input {...args} />
		</Div>
	</EitherRoot>
);

export const Main = Template.bind({});

Main.args = {
	placeholder: "Input",
};
