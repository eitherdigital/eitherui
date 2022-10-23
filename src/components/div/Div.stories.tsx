import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Div, { DivProps } from "./";
import EitherRoot from "../root";

export default {
	title: "Blocks/Div",
	component: Div,
} as Meta;

const Template: Story<DivProps> = (args) => (
	<EitherRoot>
		<Div
			header={{
				text: "Header",
			}}
			footer={{
				text: "Footer",
				style: { color: "gray" },
			}}
			{...args}
		>
			Div
		</Div>
	</EitherRoot>
);

export const Main = Template.bind({});
