import React from "react";
import styles from "./Root.css";

export type RootProps = {
	children?: React.ReactNode;
};

export default function EitherRoot({ children }: RootProps) {
	return (
		<div id="eitherui__Root" className={styles["root"]}>
			{children}
		</div>
	);
}
