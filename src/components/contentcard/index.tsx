import React from "react";
import { Heading, Text } from "..";
import Card, { CardProps } from "../card";
import "./ContentCard.css";

export type ContentCardProps = {
	title?: string;
	text?: string;
	actions?: React.ReactNode;
} & CardProps;

function ContentCard({ title, text, actions, ...cardProps }: ContentCardProps) {
	return (
		<Card {...cardProps}>
			<div className="ContentCard__stack">
				{title && (
					<Heading style={{ color: "var(--colors-main)" }}>{title}</Heading>
				)}
				{text && <Text className="ContentCard__text">{text}</Text>}
				{actions && actions}
			</div>
		</Card>
	);
}

export default ContentCard;
