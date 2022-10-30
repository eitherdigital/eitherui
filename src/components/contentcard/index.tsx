import React from "react";
import { Heading, Text } from "..";
import Card, { CardProps } from "../card";
import styles from "./ContentCard.css";

export type ContentCardProps = {
	title?: string;
	text?: string;
	actions?: React.ReactNode;
} & CardProps;

function ContentCard({ title, text, actions, ...cardProps }: ContentCardProps) {
	return (
		<Card {...cardProps}>
			<div className={styles["ContentCard__stack"]}>
				{title && (
					<Heading style={{ color: "var(--colors-main)" }}>{title}</Heading>
				)}
				{text && <Text className={styles["ContentCard__text"]}>{text}</Text>}
				{actions && actions}
			</div>
		</Card>
	);
}

export default ContentCard;
