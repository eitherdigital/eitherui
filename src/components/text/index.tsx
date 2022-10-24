import React from "react";
import { classNamesString } from "../../lib/classNames";
import "./text.css";

export type TextProps = {
	weight?: "regular" | "medium" | "semibold";
	children?: React.ReactNode;
	style?: React.CSSProperties;
	className?: string;
};

function Text(props: TextProps) {
	return (
		<p
			className={classNamesString(
				"Text",
				`Text__${props.weight || "regular"}`,
				props.className
			)}
			style={props.style}
		>
			{props.children}
		</p>
	);
}

export default Text;
