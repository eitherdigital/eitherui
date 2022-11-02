import React from "react";
import { classNamesString, generateClassname } from "../../lib/classNames";
import { StyleProvider } from "../../lib/style-system";
import { DivCssProps } from "../../lib/style-system/style.types";
import { getStyles } from "../div/style";
import styles from "./Button.css";

export type ButtonProps = {
	children?: React.ReactNode;
	mode?: "solid" | "outline";
	full?: boolean;
	style?: React.CSSProperties;
	size?: "xs" | "sm" | "md" | "lg";
	className?: string;
	disabled?: boolean;
} & DivCssProps &
	React.HTMLAttributes<HTMLButtonElement>;

function Button({
	children,
	mode = "solid",
	full,
	style,
	size = "md",
	className,
	disabled,
	width,
	height,
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
	...other
}: ButtonProps) {
	const [buttonClass] = React.useState(generateClassname("Button"));

	return (
		<StyleProvider
			css={getStyles({
				className: buttonClass,
				width: width,
				height: height,
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
			})}
		>
			<button
				disabled={disabled}
				className={classNamesString(
					styles["Button"],
					styles[`Button__${mode}`],
					styles[`Button__size_${size}`],
					full && styles["Button__full"],
					buttonClass,
					className
				)}
				style={style}
				{...other}
			>
				{children}
			</button>
		</StyleProvider>
	);
}

export default Button;
