/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#9F2A2A',
					50: '#F8EBE4',
					100: '#F2D7CC',
					200: '#E5AC9C',
					300: '#D87B6C',
					400: '#CB463B',
					500: '#9F2A2A',
					600: '#83232A',
					700: '#661B26',
					800: '#4A1420',
					900: '#2E0C16',
					950: '#200810'
				}
			}
		}
	},
	plugins: [require('@designbycode/tailwindcss-mask-image')]
};
