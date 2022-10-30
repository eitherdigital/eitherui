import React from "react";
import { classNamesString } from "../../lib/classNames";
import styles from "./Button.css";

export type ButtonProps = {
	children?: React.ReactNode;
	mode?: "solid" | "outline";
	full?: boolean;
	style?: React.CSSProperties;
	size?: "xs" | "sm" | "md" | "lg";
	className?: string;
	disabled?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

function Button({
	children,
	mode = "solid",
	full,
	style,
	size = "md",
	className,
	disabled,
	...other
}: ButtonProps) {
	return (
		<button
			disabled={disabled}
			className={classNamesString(
				styles["Button"],
				styles[`Button__${mode}`],
				styles[`Button__size_${size}`],
				full && styles["Button__full"],
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
