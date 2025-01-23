/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      // We consider it's a good practice to centralize the most used colors in a single place to avoid repetition
      colors: {
        primary: "#368beb", 
		secondary: "#83D6E7",

      },
    },
  },
  plugins: [],
};
