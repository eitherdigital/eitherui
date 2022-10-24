import React from "react";
import { classNamesString } from "../../lib/classNames";
import "./text.css";

export type TextProps = {
	weight?: "regular" | "medium" | "semibold";
	children?: React.ReactNode;
	style?: React.CSSProperties;
	className?: string;
};

function Text({ weight = "regular", children, style, className }: TextProps) {
	return (
		<p
			className={classNamesString("Text", `Text__${weight}`, className)}
			style={style}
		>
			{children}
		</p>
	);
}

export default Text;
