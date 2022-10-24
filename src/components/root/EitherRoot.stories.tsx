import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import EitherRoot, { RootProps } from "./";
import { Heading, Text } from "..";

export default {
	title: "Layout/EitherRoot",
	component: EitherRoot,
} as Meta;

const Template: Story<RootProps> = (args) => (
	<EitherRoot {...args}>
		<Heading>EitherRoot</Heading>
		<Text style={{ marginTop: "10px" }}>
			Обязательный компонент-обёртка над приложением. Подключает CSS-свойства
			необходимые для работы EitherUI.
		</Text>
	</EitherRoot>
);

export const Main = Template.bind({});
