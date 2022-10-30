import React from "react";
import { classNamesString, generateClassname } from "../../lib/classNames";
import { injectStyles } from "../../lib/styles";
import styles from "./Stack.css";

export type StackProps = {
	direction?: "row" | "column" | "row-reverse" | "column-reverse";
	/**
	 * Укажите этот параметр, если вам нужно другое значение direction на телефонах.
	 */
	mobileDirection?: "row" | "column" | "row-reverse" | "column-reverse";
	spacing?: string;
	/**
	 * Укажите этот параметр, если вам нужно другое значение spacing на телефонах.
	 * Внимание! Нельзя указывать mobileSpacing при этом не указав spacing.
	 */
	mobileSpacing?: string;
} & React.HTMLAttributes<HTMLDivElement>;

function Stack({
	direction = "column",
	mobileDirection,
	spacing,
	mobileSpacing,
	children,
	className,
	...otherProps
}: StackProps) {
	if (mobileSpacing && !spacing) {
		throw new Error(
			"Нельзя указывать mobileSpacing при этом не указав spacing"
		);
	}

	const [width, setWidth] = React.useState<number>(function getWidth() {
		if (typeof window !== "undefined") {
			return window.innerWidth;
		}
		return 0;
	});

	let isSSR: boolean = false;

	const isMobile = width <= 768;

	const getSpacing = (
		currentDirection: "row" | "column" | "row-reverse" | "column-reverse"
	) => {
		if (isMobile) {
			if (mobileDirection && mobileSpacing) {
				return mobileDirection === currentDirection ? mobileSpacing : "0px";
			}
			if (mobileDirection && !mobileSpacing) {
				return mobileDirection === currentDirection ? spacing : "0px";
			}
			if (!mobileDirection && !mobileSpacing) {
				return direction === currentDirection ? spacing : "0px";
			}
		}
		return direction === currentDirection ? spacing : "0px";
	};

	let stackClass = generateClassname("Stack");
	let css = `
    ${
			spacing
				? `
      .${stackClass}>*:not(style)~*:not(style) {
        margin-top: ${getSpacing("column")};
        -webkit-margin-end: ${getSpacing("row-reverse")};
        margin-inline-end: ${getSpacing("row-reverse")};
        margin-bottom: ${getSpacing("column-reverse")};
        -webkit-margin-start: ${getSpacing("row")};
        margin-inline-start: ${getSpacing("row")};
      }
    `
				: ""
		}
  `;

	React.useEffect(() => {
		if (isSSR) {
			injectStyles(css);
		}
		setWidth(window.innerWidth);
		window.addEventListener("resize", () => setWidth(window.innerWidth));
		return () => {
			window.removeEventListener("resize", () => setWidth(window.innerWidth));
		};
	}, []);

	if (typeof window !== "undefined") {
		injectStyles(css);
	} else {
		isSSR = true;
	}

	return (
		<div
			className={classNamesString(
				styles["Stack"],
				styles[
					`Stack--${
						isMobile
							? mobileDirection
								? mobileDirection
								: direction
							: direction
					}`
				],
				stackClass,
				className
			)}
			{...otherProps}
		>
			{children}
		</div>
	);
}

export default Stack;
