/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,

	sassOptions: {
		includePaths: [path.join(__dirname, "src/styles")],
	},

	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
};

module.exports = nextConfig;
