import React from "react";
import { classNamesString } from "../../lib/classNames";
import { DeepMergeTwoTypes } from "../../lib/types.utils";
import styles from "./Switch.css";

export type SwitchProps = DeepMergeTwoTypes<
	{
		size?: "md" | "lg";
	},
	React.InputHTMLAttributes<HTMLInputElement>
>;

function Switch({ size = "md", className, ...otherProps }: SwitchProps) {
	return (
		<label
			className={classNamesString(
				styles["Switch"],
				styles[`Switch__size_${size}`],
				className
			)}
			role="presentation"
		>
			<input
				type="checkbox"
				className={styles["Switch__input"]}
				{...otherProps}
			/>
			<span role="presentation" className={styles["Switch__children"]} />
		</label>
	);
}

export default Switch;
