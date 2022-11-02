import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import SimpleGrid, { SimpleGridProps } from "./";
import EitherRoot from "../root";
import { Button, ContentCard } from "..";

export default {
	title: "Blocks/SimpleGrid",
	component: SimpleGrid,
} as Meta;

const Template: Story<SimpleGridProps> = args => (
	<EitherRoot>
		<SimpleGrid {...args}>
			<ContentCard
				title="Дистрибуция"
				text="В нашем распоряжении более 150 стриминговых площадок по всему миру. Ваша музыка — на каждой из них."
			/>
			<ContentCard
				title="Продвижение"
				text="Продвижение вашего контента на стартовых страницах сервисов, в редакционных плейлистах и рубриках."
			/>
			<ContentCard
				title="Поддержка"
				text="Мелкий шрифт не останется незамеченным. Мы поможем разобраться с любыми ситуациями и защитим ваши права."
			/>
			<ContentCard
				title="Личный менеджер"
				text="Один в поле музыкального бизнеса — не воин. Персональный менеджер всегда на связи и готов помочь любые вопросы."
			/>
		</SimpleGrid>
	</EitherRoot>
);

export const Main = Template.bind({});

Main.args = {
	columns: [1, 2],
	spacing: ["10px", "5px"],
};
