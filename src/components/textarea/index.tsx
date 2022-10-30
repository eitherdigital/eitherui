import React from "react";
import { classNamesString } from "../../lib/classNames";
import styles from "./Textarea.css";

export type TextareaProps = {
	defaultValue?: string;
	invalid?: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

function Textarea({
	defaultValue,
	className,
	invalid,
	...otherProps
}: TextareaProps) {
	return (
		<textarea
			value={defaultValue}
			className={classNamesString(
				styles["Textarea"],
				invalid && styles["Textarea__invalid"],
				className
			)}
			{...otherProps}
		/>
	);
}

export default Textarea;
