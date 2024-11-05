/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{svelte,html,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography', require('daisyui'))],
  daisyui:{
    base: false,
  }
}

