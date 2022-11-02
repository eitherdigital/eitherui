import {
	getBreakpoints,
	mediaPrefix,
} from "../../lib/style-system/style.utils";

export type SimpleGridCssProps = {
	spacing?: string | string[];
	columns?: number | number[];
	className: string;
};

export function getStyles({ spacing, columns, className }: SimpleGridCssProps) {
	const breakpoints = getBreakpoints();

	let css: string = ``;

	breakpoints.map((breakpoint, index) => {
		let styles = "";

		if (!Array.isArray(spacing)) {
			styles += `grid-gap: ${spacing};`;
		} else {
			if (spacing[index]) styles += `grid-gap: ${spacing[index]};`;
		}

		if (!Array.isArray(columns)) {
			styles += `grid-template-columns: repeat(${columns}, minmax(0, 1fr));`;
		} else {
			if (columns[index])
				styles += `grid-template-columns: repeat(${columns[index]}, minmax(0, 1fr));`;
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
