import React from "react";
import { classNamesString } from "../../lib/classNames";
import Center from "../center";
import styles from "./ContentContainer.css";

export type ContentContainerProps = {} & React.HTMLAttributes<HTMLDivElement>;

function ContentContainer({
	className,
	children,
	...otherProps
}: ContentContainerProps) {
	return (
		<Center style={{ width: "100%" }}>
			<div
				className={classNamesString(styles["ContentContainer"], className)}
				{...otherProps}
			>
				{children}
			</div>
		</Center>
	);
}

export default ContentContainer;
