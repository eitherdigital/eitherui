import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Progress, { ProgressProps } from "./";
import EitherRoot from "../root";
import { Div } from "..";

export default {
	title: "Blocks/Progress",
	component: Progress,
} as Meta;

const Template: Story<ProgressProps> = (args) => (
	<EitherRoot>
		<Div header={{ text: "Прогресс", style: { color: "var(--colors-text)" } }}>
			<Progress {...args} />
		</Div>
	</EitherRoot>
);

export const Main = Template.bind({});

Main.args = {
	value: 45,
};
