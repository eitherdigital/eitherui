export function getBreakpoints() {
	return [null, "30em", "48em", "62em", "80em", "96em"];
}

export const mediaPrefix = (width: string) => {
	return `@media screen and (min-width: ${width})`;
};
