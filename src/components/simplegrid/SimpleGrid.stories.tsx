import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import SimpleGrid, { SimpleGridProps } from "./";
import EitherRoot from "../root";
import { Button } from "..";

export default {
	title: "Blocks/SimpleGrid",
	component: SimpleGrid,
} as Meta;

const Template: Story<SimpleGridProps> = args => (
	<EitherRoot>
		<SimpleGrid {...args}>
			<Button>Button 1</Button>
			<Button>Button 2</Button>
			<Button>Button 3</Button>
			<Button>Button 4</Button>
			<Button>Button 5</Button>
		</SimpleGrid>
	</EitherRoot>
);

export const Main = Template.bind({});

Main.args = {
	columns: [1, 2, 3],
	spacing: ["5px", "10px", "15px"],
};
