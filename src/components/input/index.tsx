import React from "react";
import { classNamesString } from "../../lib/classNames";
import styles from "./Input.css";

export type InputProps = {
	invalid?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input({ className, invalid, ...inputProps }: InputProps) {
	return (
		<input
			className={classNamesString(
				styles["Input"],
				invalid && styles["Input__invalid"],
				className
			)}
			{...inputProps}
		/>
	);
}

export default Input;
