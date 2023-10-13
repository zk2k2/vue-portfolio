/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans']
      },
      colors: {
        primary: '#00B2A7',
        secondary: '#345862'
      }
    }
  },
  plugins: []
}
