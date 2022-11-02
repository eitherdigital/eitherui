import React from "react";
import { classNamesString } from "../../lib/classNames";
import Div, { DivProps } from "../div";
import styles from "./Center.css";

export type CenterProps = {} & DivProps;

function Center({ className, children, ...otherProps }: CenterProps) {
	return (
		<Div
			className={classNamesString(styles["Center"], className)}
			{...otherProps}
		>
			{children}
		</Div>
	);
}

export default Center;
