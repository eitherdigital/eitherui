import React from "react";
import { classNamesString } from "../../lib/classNames";
import "./button.css";

export type ButtonProps = {
	children?: React.ReactNode;
	mode?: "solid" | "outline";
	full?: boolean;
	style?: React.CSSProperties;
	size?: "xs" | "sm" | "md" | "lg";
	className?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

function Button({
	children,
	mode,
	full,
	style,
	size,
	className,
	...other
}: ButtonProps) {
	return (
		<button
			className={classNamesString(
				"Button",
				`Button__${mode || "solid"}`,
				`Button__size_${size || "md"}`,
				full && "Button__full",
				className
			)}
			style={style}
			{...other}
		>
			{children}
		</button>
	);
}

export default Button;
