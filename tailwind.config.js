// @filename tailwind.config.js
module.exports = {
	 mode:'jit',
	   purge: [
     './public/**/*.html',
     './src/**/*.{js,jsx,ts,tsx,vue,svelte}',
   ],
	theme: {
		// ...
	},
	plugins: [
		require("tailwindcss-animate"),
		// ...
	],
}