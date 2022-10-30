export function injectStyles(styles: string) {
	if (typeof window !== "undefined") {
		const style = document.createElement("style");
		style.textContent = styles;
		document.head.append(style);
	}
}
