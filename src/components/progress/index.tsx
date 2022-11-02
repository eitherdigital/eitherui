import React from "react";
import { classNamesString } from "../../lib/classNames";
import Div, { DivProps } from "../div";
import styles from "./Progress.css";

export type ProgressProps = {
	value?: number;
} & DivProps;

const PROGRESS_MIN_VALUE = 0;
const PROGRESS_MAX_VALUE = 100;

function Progress({ value = 0, className, ...restProps }: ProgressProps) {
	const progress = Math.max(
		PROGRESS_MIN_VALUE,
		Math.min(value, PROGRESS_MAX_VALUE)
	);

	return (
		<Div
			aria-valuenow={value}
			{...restProps}
			role="progressbar"
			aria-valuemin={PROGRESS_MIN_VALUE}
			aria-valuemax={PROGRESS_MAX_VALUE}
			className={classNamesString(styles["Progress"], className)}
		>
			<Div
				className={styles["Progress__in"]}
				style={{ width: `${progress}%` }}
				aria-hidden
			/>
		</Div>
	);
}

export default Progress;
