import React from "react";
import { classNamesString } from "../../lib/classNames";
import "./heading.css";

export type HeadingProps = {
	style?: React.CSSProperties;
	size?: "4xl" | "3xl" | "2xl" | "xl" | "lg" | "md" | "sm" | "xs";
	children?: React.ReactNode;
	className?: string;
} & React.HTMLAttributes<HTMLHeadingElement>;

function Heading({ style, size, children, className, ...other }: HeadingProps) {
	return (
		<h2
			className={classNamesString(
				"Heading",
				`Heading__size_${size || "xl"}`,
				className
			)}
			style={style}
			{...other}
		>
			{children}
		</h2>
	);
}

export default Heading;
