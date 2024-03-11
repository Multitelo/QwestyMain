/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        244:'244px',
        475: '475px',
        237: '237px',
        531: '531px',
        992:'992px',
        1097: '1097px',
        1207:'1207px',
        1320:'1320px'
      }
    },
  },
  plugins: [],
}

