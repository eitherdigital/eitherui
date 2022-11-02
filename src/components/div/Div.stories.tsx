import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Div, { DivProps } from "./";
import EitherRoot from "../root";

export default {
	title: "Blocks/Div",
	component: Div,
} as Meta;

const Template: Story<DivProps> = args => (
	<EitherRoot>
		<Div
			width={["100px", "200px"]}
			height={["100px", "200px"]}
			style={{ border: "1px solid black", overflow: "hidden" }}
			margin={["10px", "20px"]}
			padding={["10px", "20px"]}
			borderRadius={["10px", "20px"]}
			{...args}
		>
			Div
		</Div>
	</EitherRoot>
);

export const Main = Template.bind({});
