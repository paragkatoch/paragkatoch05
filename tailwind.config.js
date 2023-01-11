/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			openSans: "var(--font-openSans), sans-serif",
			kano: "var(--font-kano), sans-serif",
		},
		screens: {
			sm: "390px",
			md: "768px",
			mdl: "1080px",
			lgs: "1280px",
			lg: "1440px",
		},
		extend: {
			colors: {
				pureWhite: "#ffffff",
				white: "#D1E1F5",
				darkBlue: "#090710",
				blue: "#1C2A97",
			},
		},
	},
	plugins: [],
};
