import React from "react";
import { classNamesString, generateClassname } from "../../lib/classNames";
import styles from "./Stack.css";
import { StyleProvider } from "../../lib/style-system";
import { getStyles } from "./style";

export type StackDirectionType =
	| "row"
	| "column"
	| "row-reverse"
	| "column-reverse";

export type StackProps = {
	direction?: StackDirectionType | StackDirectionType[];
	spacing?: string | string[];
} & React.HTMLAttributes<HTMLDivElement>;

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
			<div
				className={classNamesString(styles["Stack"], stackClass, className)}
				{...otherProps}
			>
				{children}
			</div>
		</StyleProvider>
	);
}

export default Stack;
