/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0A0A0F',
        'accent': '#00E5A0',
        'accent-2': '#1A6BFF',
        'surface': '#111118',
        'surface-2': '#1C1C26',
        'text-primary': '#F0F0F5',
        'text-muted': '#7A7A9A',
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(56px, 8vw, 96px)',
      },
      spacing: {
        'section': 'clamp(60px, 10vw, 120px)',
      },
    },
  },
  plugins: [],
}