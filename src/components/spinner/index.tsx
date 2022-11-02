import React from "react";
import SpinnerIcon44 from "./icons/SpinnerIcon44";
import SpinnerIcon32 from "./icons/SpinnerIcon32";
import SpinnerIcon24 from "./icons/SpinnerIcon24";
import SpinnerIcon16 from "./icons/SpinnerIcon16";
import styles from "./Spinner.css";
import { classNamesString } from "../../lib/classNames";

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
	size?: "xs" | "sm" | "md" | "lg";
}

const Spinner = React.memo(
	({
		size = "sm",
		"aria-label": ariaLabel = "Загрузка...",
		className,
		...restProps
	}: SpinnerProps) => {
		const SpinnerIcon = {
			lg: (
				<div
					style={{ width: "44px", height: "44px" }}
					className={styles["Spinner__self"]}
				>
					<SpinnerIcon44 />
				</div>
			),
			md: (
				<div
					style={{ width: "32px", height: "32px" }}
					className={styles["Spinner__self"]}
				>
					<SpinnerIcon32 />
				</div>
			),
			sm: (
				<div
					style={{ width: "24px", height: "24px" }}
					className={styles["Spinner__self"]}
				>
					<SpinnerIcon24 />
				</div>
			),
			xs: (
				<div
					style={{ width: "16px", height: "16px" }}
					className={styles["Spinner__self"]}
				>
					<SpinnerIcon16 />
				</div>
			),
		}[size];
		return (
			<span
				role="status"
				className={classNamesString(styles["Spinner"], className)}
				aria-label={ariaLabel}
				{...restProps}
			>
				{SpinnerIcon}
			</span>
		);
	}
);

export default Spinner;
