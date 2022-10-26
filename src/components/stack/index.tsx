import React from "react";
import { classNamesString, generateClassname } from "../../lib/classNames";
import { injectStyles } from "../../lib/styles";

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

	const [width, setWidth] = React.useState<number>(0);

	React.useEffect(() => {
		window.addEventListener("resize", () => setWidth(window.innerWidth));
		return () => {
			window.removeEventListener("resize", () => setWidth(window.innerWidth));
		};
	}, []);

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
	let styles = `
    .${stackClass} {
      display: flex;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      flex-direction: ${
				isMobile ? (mobileDirection ? mobileDirection : direction) : direction
			};
    }
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

	injectStyles(styles);

	return (
		<div className={classNamesString(stackClass, className)} {...otherProps}>
			{children}
		</div>
	);
}

export default Stack;
