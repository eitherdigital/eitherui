import React from "react";
import { classNamesString, generateClassname } from "../../lib/classNames";
import styles from "./Stack.css";
import { StyleProvider } from "../../lib/style-system";
import { getStyles } from "./style";
import Div, { DivProps } from "../div";

export type StackDirectionType =
	| "row"
	| "column"
	| "row-reverse"
	| "column-reverse";

export type StackProps = {
	direction?: StackDirectionType | StackDirectionType[];
	spacing?: string | string[];
} & DivProps;

function Stack({
	direction = "column",
	spacing = "1.5rem",
	children,
	className,
	...otherProps
}: StackProps) {
	const [stackClass] = React.useState<string>(generateClassname("Stack"));

	return (
		<StyleProvider
			css={getStyles({
				direction: direction,
				spacing: spacing,
				className: stackClass,
			})}
		>
			<Div
				className={classNamesString(styles["Stack"], stackClass, className)}
				{...otherProps}
			>
				{children}
			</Div>
		</StyleProvider>
	);
}

export default Stack;
