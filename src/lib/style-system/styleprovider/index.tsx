import React from "react";
import { UniversalStyle as Style } from "react-css-component";

export type StyleProviderProps = {
	children: React.ReactNode;
	css: string;
};

function StyleProvider({ children, css }: StyleProviderProps) {
	return (
		<>
			<Style css={css.replace(/\s+/g, " ").replace(/(^\s*)|(\s*)$/g, "")} />
			{children}
		</>
	);
}

export default StyleProvider;
