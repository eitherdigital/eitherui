export function injectStyes(styles: string) {
	const style = document.createElement("style");
	style.textContent = styles;
	document.head.append(style);
}
