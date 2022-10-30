import React from "react";
import { classNamesString } from "../../lib/classNames";
import styles from "./Card.css";

export type CardProps = {
	mode?: "outline" | "solid";
} & React.HTMLAttributes<HTMLDivElement>;

export default function Card({
	children,
	mode = "solid",
	className,
	...otherProps
}: CardProps) {
	return (
		<div
			className={classNamesString(
				styles["Card"],
				styles[`Card__${mode}`],
				className
			)}
			{...otherProps}
		>
			<div className={styles["Card__content"]}>{children}</div>
		</div>
	);
}
