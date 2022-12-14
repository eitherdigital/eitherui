import { StackDirectionType } from ".";
import {
	getBreakpoints,
	mediaPrefix,
} from "../../lib/style-system/style.utils";

export type getStylesProps = {
	direction: StackDirectionType | StackDirectionType[];
	spacing: string | string[];
	className: string;
};

export function getSpacing(currentDirection: string, spacing: string) {
	return `
		margin-top: ${currentDirection == "column" ? spacing : "0px"};
  	-webkit-margin-end: ${currentDirection == "row-reverse" ? spacing : "0px"};
    margin-inline-end: ${currentDirection == "row-reverse" ? spacing : "0px"};
    margin-bottom: ${currentDirection == "column-reverse" ? spacing : "0px"};
    -webkit-margin-start: ${currentDirection == "row" ? spacing : "0px"};
    margin-inline-start: ${currentDirection == "row" ? spacing : "0px"};
	`;
}

export function getStyles({ direction, spacing, className }: getStylesProps) {
	const breakpoints = getBreakpoints();

	const prefix = `.${className}>*:not(style)~*:not(style)`;

	let css: string = ``;

	breakpoints.map((breakpoint, index) => {
		let styles = ``;
		if (!Array.isArray(direction)) {
			styles += `flex-direction: ${direction};`;
		} else {
			if (direction[index]) styles += `flex-direction: ${direction[index]};`;
		}

		if (!Array.isArray(spacing)) {
			let direct =
				index > direction.length
					? direction[direction.length - 1]
					: direction[index];

			css += breakpoint
				? `${mediaPrefix(breakpoint)} {
				${prefix} {
					${getSpacing(direct, spacing as string)}
				}
			}`
				: `${prefix} {
					${getSpacing(direct, spacing as string)}
				}`;
		} else {
			let direct =
				index > direction.length
					? direction[direction.length - 1]
					: direction[index];
			let spacingIndex =
				index > spacing.length ? spacing[spacing.length - 1] : spacing[index];

			css += breakpoint
				? `${mediaPrefix(breakpoint)} {
				${prefix} {
					${getSpacing(direct, spacingIndex as string)}
				}
			}`
				: `${prefix} {
					${getSpacing(direct, spacingIndex as string)}
				}`;
		}
		if (styles.trim() !== "")
			css += breakpoint
				? `${mediaPrefix(breakpoint)} {
			.${className} {
				${styles}
			}
		}`
				: `.${className} {
				${styles}
			}`;
	});

	return css;
}
