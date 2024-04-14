/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primaryGreen: "#166534",
				secondaryGreen: "#8FB339",
				background: "#20BF55",

				titleTwo: "white",

				lightText: "#F7FFF7",
				darkText: "#0B1215",

				main: "black",

				white: "#F8F8FF",
			},
		},
	},
	plugins: [],
};
