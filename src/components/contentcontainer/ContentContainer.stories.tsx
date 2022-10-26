import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import ContentContainer, { ContentContainerProps } from "./";
import { Heading, Text, EitherRoot } from "..";

export default {
	title: "Layout/ContentContainer",
	component: ContentContainer,
} as Meta;

const Template: Story<ContentContainerProps> = (args) => (
	<EitherRoot {...args}>
		<ContentContainer>
			<Heading>ContentContainer</Heading>
			<Text style={{ marginTop: "10px" }}>
				Компонент-обёртка, который обеспечивает контент адаптивными отступами.
			</Text>
		</ContentContainer>
	</EitherRoot>
);

export const Main = Template.bind({});
