import React from "react";
import { classNamesString } from "../../lib/classNames";
import "./Progress.css";

export type ProgressProps = {
	value?: number;
} & React.HTMLAttributes<HTMLDivElement>;

const PROGRESS_MIN_VALUE = 0;
const PROGRESS_MAX_VALUE = 100;

function Progress({ value = 0, className, ...restProps }: ProgressProps) {
	const progress = Math.max(
		PROGRESS_MIN_VALUE,
		Math.min(value, PROGRESS_MAX_VALUE)
	);

	return (
		<div
			aria-valuenow={value}
			{...restProps}
			role="progressbar"
			aria-valuemin={PROGRESS_MIN_VALUE}
			aria-valuemax={PROGRESS_MAX_VALUE}
			className={classNamesString("Progress", className)}
		>
			<div
				className="Progress__in"
				style={{ width: `${progress}%` }}
				aria-hidden
			/>
		</div>
	);
}

export default Progress;
