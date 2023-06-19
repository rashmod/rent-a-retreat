/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#E6E6E8',
				// primary: '#D4D5DA',
				// secondary: '#C9D9D2',
				secondary: '#031D44',
				accent: '#3B6552',
			},
		},
		fontFamily: {
			sans: ['Poppins', ...defaultTheme.fontFamily.sans],
		},
	},
	plugins: [],
};
