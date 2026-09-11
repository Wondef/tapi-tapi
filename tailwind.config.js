/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        base: '#0c0c0c',
        primary: '#ffffff',
        secondary: 'rgba(255,255,255,0.6)',
        accent: {
          blue: '#3D81E3',
          cyan: '#00d2ff',
          light: '#A4F4FD'
        }
      },
    },
  },
  plugins: [],
}