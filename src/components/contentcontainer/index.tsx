import React from "react";
import { classNamesString } from "../../lib/classNames";
import Center from "../center";
import Div, { DivProps } from "../div";
import styles from "./ContentContainer.css";

export type ContentContainerProps = {} & DivProps;

function ContentContainer({
	className,
	children,
	...otherProps
}: ContentContainerProps) {
	return (
		<Center style={{ width: "100%" }}>
			<Div
				className={classNamesString(styles["ContentContainer"], className)}
				{...otherProps}
			>
				{children}
			</Div>
		</Center>
	);
}

export default ContentContainer;
