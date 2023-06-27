/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				'my-primary': {
					100: '#fafafa',
					200: '#f5f5f6',
					300: '#f0f0f1',
					400: '#ebebed',
					500: '#e6e6e8',
					600: '#b8b8ba',
					700: '#8a8a8b',
					800: '#5c5c5d',
					900: '#2e2e2e',
				},
				'my-primary-muted': {
					100: '#f1f1f2',
					200: '#e2e3e5',
					300: '#d4d5d9',
					400: '#c5c7cc',
					500: '#b7b9bf',
					600: '#929499',
					700: '#6e6f73',
					800: '#494a4c',
					900: '#252526',
				},
				// primary: '#D4D5DA',
				// secondary: '#C9D9D2',
				'my-secondary': {
					100: '#cdd2da',
					200: '#9aa5b4',
					300: '#68778f',
					400: '#354a69',
					500: '#031d44',
					600: '#021736',
					700: '#021129',
					800: '#010c1b',
					900: '#01060e',
				},
				'my-accent': '#3B6552',

				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
		fontFamily: {
			sans: ['Poppins', ...defaultTheme.fontFamily.sans],
		},
	},
	plugins: [tailwindcssAnimate],
};
