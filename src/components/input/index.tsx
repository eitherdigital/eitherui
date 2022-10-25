import React from "react";
import { classNamesString } from "../../lib/classNames";
import "./Input.css";

export type InputProps = {
	invalid?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input({ className, invalid, ...inputProps }: InputProps) {
	return (
		<input
			className={classNamesString(
				"Input",
				invalid && "Input__invalid",
				className
			)}
			{...inputProps}
		/>
	);
}

export default Input;
