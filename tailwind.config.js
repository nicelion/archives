/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Comfortaa"]
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"]
  }
}

