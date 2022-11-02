import React from "react";
import {
	getBreakpoints,
	mediaPrefix,
} from "../../lib/style-system/style.utils";

export type DivStylesProps = {
	width?: string | string[];
	height?: string | string[];
	borderRadius?: string | string[];
	margin?: string | string[];
	marginTop?: string | string[];
	marginBottom?: string | string[];
	marginLeft?: string | string[];
	marginRight?: string | string[];
	padding?: string | string[];
	paddingTop?: string | string[];
	paddingBottom?: string | string[];
	paddingLeft?: string | string[];
	paddingRight?: string | string[];
	className: string;
};

export function getStyles({
	width,
	height,
	margin,
	marginBottom,
	marginTop,
	marginLeft,
	marginRight,
	padding,
	paddingBottom,
	paddingLeft,
	paddingRight,
	paddingTop,
	borderRadius,
	className,
}: DivStylesProps) {
	const breakpoints = getBreakpoints();

	let css: string = ``;

	breakpoints.map((breakpoint, index) => {
		let styles = ``;

		if (width) {
			if (!Array.isArray(width)) {
				styles += `width: ${width};`;
			} else {
				if (width[index]) styles += `width: ${width[index]};`;
			}
		}
		if (height) {
			if (!Array.isArray(height)) {
				styles += `height: ${height};`;
			} else {
				if (height[index]) styles += `height: ${height[index]};`;
			}
		}
		if (borderRadius) {
			if (!Array.isArray(borderRadius)) {
				styles += `border-radius: ${borderRadius};`;
			} else {
				if (borderRadius[index])
					styles += `border-radius: ${borderRadius[index]};`;
			}
		}
		if (margin) {
			if (!Array.isArray(margin)) {
				styles += `margin: ${margin};`;
			} else {
				if (margin[index]) styles += `margin: ${margin[index]};`;
			}
		}
		if (marginBottom) {
			if (!Array.isArray(marginBottom)) {
				styles += `margin-bottom: ${marginBottom};`;
			} else {
				if (marginBottom[index])
					styles += `margin-bottom: ${marginBottom[index]};`;
			}
		}
		if (marginLeft) {
			if (!Array.isArray(marginLeft)) {
				styles += `margin-left: ${marginLeft};`;
			} else {
				if (marginLeft[index]) styles += `margin-left: ${marginLeft[index]};`;
			}
		}
		if (marginTop) {
			if (!Array.isArray(marginTop)) {
				styles += `margin-top: ${marginTop};`;
			} else {
				if (marginTop[index]) styles += `margin-top: ${marginTop[index]};`;
			}
		}
		if (marginRight) {
			if (!Array.isArray(marginRight)) {
				styles += `margin-right: ${marginRight};`;
			} else {
				if (marginRight[index])
					styles += `margin-right: ${marginRight[index]};`;
			}
		}
		if (padding) {
			if (!Array.isArray(padding)) {
				styles += `padding: ${padding};`;
			} else {
				if (padding[index]) styles += `padding: ${padding[index]};`;
			}
		}
		if (paddingBottom) {
			if (!Array.isArray(paddingBottom)) {
				styles += `padding-bottom: ${paddingBottom};`;
			} else {
				if (paddingBottom[index])
					styles += `padding-bottom: ${paddingBottom[index]};`;
			}
		}
		if (paddingLeft) {
			if (!Array.isArray(paddingLeft)) {
				styles += `padding-left: ${paddingLeft};`;
			} else {
				if (paddingLeft[index])
					styles += `padding-left: ${paddingLeft[index]};`;
			}
		}
		if (paddingTop) {
			if (!Array.isArray(paddingTop)) {
				styles += `padding-top: ${paddingTop};`;
			} else {
				if (paddingTop[index]) styles += `padding-top: ${paddingTop[index]};`;
			}
		}
		if (paddingRight) {
			if (!Array.isArray(paddingRight)) {
				styles += `padding-right: ${marginRight};`;
			} else {
				if (paddingRight[index])
					styles += `padding-right: ${paddingRight[index]};`;
			}
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
