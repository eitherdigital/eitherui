import { getRandomInt } from "../../lib/random";

function getInitials(name: string) {
	const [firstName, lastName] = name.split(" ");
	return firstName && lastName
		? `${firstName.charAt(0)}${lastName.charAt(0)}`
		: firstName.charAt(0);
}

function getInitialsFontSize(avatarSize: number) {
	const calculatedFontSize = Math.ceil(avatarSize * 0.36);
	const evenFix = calculatedFontSize % 2;
	return calculatedFontSize + evenFix;
}

function getRandomColor(userId?: number) {
	const colors = [
		"#e52e40",
		"#e62e6b",
		"#e66b2e",
		"#e7a902",
		"#6cd97e",
		"#2bb4d6",
		"#3f8ae0",
		"#8f3fe0",
	];

	return colors[userId ? userId % 8 : getRandomInt(1, colors.length) - 1];
}

export { getInitials, getInitialsFontSize, getRandomColor };
