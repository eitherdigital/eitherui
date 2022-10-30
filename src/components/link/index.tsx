import React from "react";
import { classNamesString } from "../../lib/classNames";
import styles from "./Link.css";

export type LinkProps = {
	children?: React.ReactNode;
	style?: React.CSSProperties;
	href?: string;
	isExternal?: boolean;
	className?: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

export default function Link({
	href,
	className,
	isExternal,
	children,
	...other
}: LinkProps) {
	return (
		<a
			className={classNamesString(styles["Link"], className)}
			href={href}
			target={isExternal ? "_blank" : undefined}
			{...other}
		>
			{children}
		</a>
	);
}
