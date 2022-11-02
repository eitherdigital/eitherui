import React from "react";
import { classNamesString } from "../../lib/classNames";
import Div, { DivProps } from "../div";
import styles from "./Card.css";

export type CardProps = {
	mode?: "outline" | "solid";
} & DivProps;

export default function Card({
	children,
	mode = "solid",
	className,
	...otherProps
}: CardProps) {
	return (
		<Div
			className={classNamesString(
				styles["Card"],
				styles[`Card__${mode}`],
				className
			)}
			{...otherProps}
		>
			<Div className={styles["Card__content"]}>{children}</Div>
		</Div>
	);
}
