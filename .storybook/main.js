const path = require("path");

async function supportCssModules(config) {
	config.module.rules.find(
		rule => rule.test.toString() === "/\\.css$/"
	).exclude = /\.css$/;

	config.module.rules.push({
		test: /\.css$/,
		use: [
			"style-loader",
			{
				loader: "css-loader",
				options: {
					modules: true,
				},
			},
		],
	});

	return config;
}

module.exports = {
	core: {
		builder: "webpack5",
	},
	stories: [
		"../src/stories/intro.stories.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],
	framework: "@storybook/react",
	webpackFinal: supportCssModules,
};
