import React from "react";
import { classNamesString } from "../../lib/classNames";
import styles from "./Textarea.css";

export type TextareaProps = {
	invalid?: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

function Textarea({ className, invalid, ...otherProps }: TextareaProps) {
	return (
		<textarea
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
