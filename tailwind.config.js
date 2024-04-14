/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#166534",
				secondary: "",
				background: "#20BF55",
				lightText: "#F7FFF7",
				darkText: "#0B1215",
			},
		},
	},
	plugins: [],
};
