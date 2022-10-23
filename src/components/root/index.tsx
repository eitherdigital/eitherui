import React from "react";
import "./root.css";

export type RootProps = {
	children?: React.ReactNode;
};

export default function EitherRoot({ children }: RootProps) {
	return (
		<div id="eitherui__Root" className={"root"}>
			{children}
		</div>
	);
}
