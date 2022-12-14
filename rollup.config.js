import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import path from "path";
import autoprefixer from "autoprefixer";

const packageJson = require("./package.json");

export default {
	input: "src/index.tsx",
	output: [
		{
			file: packageJson.main,
			format: "cjs",
			sourcemap: true,
		},
		{
			file: packageJson.module,
			format: "esm",
			sourcemap: true,
		},
	],
	plugins: [
		peerDepsExternal(),
		resolve(),
		commonjs(),
		typescript({
			useTsconfigDeclarationDir: true,
			exclude: ["**/*.test.tsx", "**/*.stories.*"],
		}),
		postcss({
			extensions: [".css"],
			extract: path.resolve("dist/eitherui.css"),
			modules: true,
			plugins: [autoprefixer()],
		}),
	],
};
