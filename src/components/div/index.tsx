import React from "react";
import { Text } from "..";
import { classNamesString } from "../../lib/classNames";
import "./div.css";

export type DivProps = {
	header?: {
		text: string;
		style?: React.CSSProperties;
		className?: string;
	};
	footer?: {
		text: string;
		style?: React.CSSProperties;
		className?: string;
	};
} & React.HTMLAttributes<HTMLDivElement>;

function Div({ children, header, footer, className, ...otherProps }: DivProps) {
	return (
		<div className={classNamesString("Div", className)} {...otherProps}>
			{header && (
				<div
					style={header.style}
					className={classNamesString("Div__header", header.className)}
				>
					<Text>{header.text}</Text>
				</div>
			)}
			{children}
			{footer && (
				<div
					style={footer.style}
					className={classNamesString("Div__footer", footer.className)}
				>
					<Text>{footer.text}</Text>
				</div>
			)}
		</div>
	);
}

export default Div;
