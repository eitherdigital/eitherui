import React from "react";
import { classNamesString, generateClassname } from "../../lib/classNames";
import { StyleProvider } from "../../lib/style-system";
import { DivCssProps } from "../../lib/style-system/style.types";
import { getStyles } from "./style";

export type DivProps = {} & DivCssProps & React.HTMLAttributes<HTMLDivElement>;

function Div({
	children,
	className,
	width,
	maxWidth,
	height,
	maxHeight,
	borderRadius,
	margin,
	marginBottom,
	marginLeft,
	marginRight,
	marginTop,
	padding,
	paddingBottom,
	paddingRight,
	paddingTop,
	paddingLeft,
	display,
	...otherProps
}: DivProps) {
	const [divClass] = React.useState(generateClassname("Div"));

	return (
		<StyleProvider
			css={getStyles({
				className: divClass,
				width: width,
				height: height,
				borderRadius: borderRadius,
				margin: margin,
				marginBottom: marginBottom,
				marginLeft: marginLeft,
				marginRight: marginRight,
				marginTop: marginTop,
				padding: padding,
				paddingBottom: paddingBottom,
				paddingLeft: paddingLeft,
				paddingRight: paddingRight,
				paddingTop: paddingTop,
				display: display,
				maxWidth: maxWidth,
				maxHeight: maxHeight,
			})}
		>
			<div className={classNamesString(divClass, className)} {...otherProps}>
				{children}
			</div>
		</StyleProvider>
	);
}

export default Div;
