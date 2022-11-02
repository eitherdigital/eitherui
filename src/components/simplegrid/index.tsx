import React from "react";
import { classNamesString, generateClassname } from "../../lib/classNames";
import { StyleProvider } from "../../lib/style-system";
import Div, { DivProps } from "../div";
import { getStyles } from "./style";
import styles from "./SimpleGrid.css";

export type SimpleGridProps = {
	spacing?: string | string[];
	columns?: number | number[];
} & DivProps;

function SimpleGrid({
	spacing = "10px",
	columns = 2,
	className,
	children,
	...otherProps
}: SimpleGridProps) {
	const [gridClass] = React.useState(generateClassname("SimpleGrid"));

	return (
		<StyleProvider css={getStyles({ spacing, columns, className: gridClass })}>
			<Div
				className={classNamesString(styles.SimpleGrid, gridClass, className)}
				{...otherProps}
			>
				{children}
			</Div>
		</StyleProvider>
	);
}

export default SimpleGrid;
