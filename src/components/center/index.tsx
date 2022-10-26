import React from "react";
import { classNamesString } from "../../lib/classNames";
import "./Center.css";

export type CenterProps = {} & React.HTMLAttributes<HTMLDivElement>;

function Center({ className, children, ...otherProps }: CenterProps) {
	return (
		<div className={classNamesString("Center", className)} {...otherProps}>
			{children}
		</div>
	);
}

export default Center;