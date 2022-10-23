import React from "react";
import { classNamesString } from "../../lib/classNames";
import "./card.css";

export type CardProps = {
	mode?: "outline" | "solid";
} & React.HTMLAttributes<HTMLDivElement>;

export default function Card({
	children,
	mode,
	className,
	...otherProps
}: CardProps) {
	return (
		<div
			className={classNamesString("Card", `Card__${mode || "solid"}`)}
			{...otherProps}
		>
			<div className="Card__content">{children}</div>
		</div>
	);
}
