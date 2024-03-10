/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        475: '475px',
        992:'992px',
        1207:'1207px',
        1320:'1320px'
      }
    },
  },
  plugins: [],
}

