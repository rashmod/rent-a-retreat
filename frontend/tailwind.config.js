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
					100: '#d5d4d6',
					200: '#aaa9ac',
					300: '#807d83',
					400: '#555259',
					500: '#2b2730',
					600: '#221f26',
					700: '#1a171d',
					800: '#111013',
					900: '#09080a',
				},
				'my-accent': {
					100: '#fbe0ec',
					200: '#f6c2d9',
					300: '#f2a3c6',
					400: '#ed85b3',
					500: '#e966a0',
					600: '#dd478b',
					700: '#c02c6f',
					800: '#ab185a',
					900: '#82063e',
				},
				'my-secondary-I': {
					100: '#eae3f8',
					200: '#d5c8f2',
					300: '#bfaceb',
					400: '#aa91e5',
					500: '#9575de',
					600: '#775eb2',
					700: '#594685',
					800: '#3c2f59',
					900: '#1e172c',
				},
				'my-secondary-II': {
					100: '#e0ddef',
					200: '#c1bbdf',
					300: '#a398cf',
					400: '#8476bf',
					500: '#6554af',
					600: '#51438c',
					700: '#3d3269',
					800: '#282246',
					900: '#141123',
				},

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
				icons: {
					to: { 'stroke-width': 1.6 },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				icons: 'icons 0.2s ease-out forwards',
			},
		},
		fontFamily: {
			sans: ['Poppins', ...defaultTheme.fontFamily.sans],
		},
	},
	plugins: [tailwindcssAnimate],
};
