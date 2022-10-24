import { addons } from "@storybook/addons";
import EitherTheme from "./EitherTheme";

addons.setConfig({
	sidebar: {
		collapsedRoots: ["utility", "hermione"],
	},
	theme: EitherTheme,
});
