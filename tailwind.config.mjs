/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
	  extend: {
		colors: {
		  'app-bg': '#09090b',
		  'app-card': '#18181b',
		  'app-accent': '#a855f7',
		}
	  },
	},
	plugins: [],
  }