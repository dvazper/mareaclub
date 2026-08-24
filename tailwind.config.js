/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-day': '#e0f2fe',
        'sky-day-accent': '#bae6fd',
        'text-day': '#0f172a',
        'text-day-light': '#1e293b',
        'bg-night': '#0f172a',
        'bg-night-dark': '#020617',
        'text-night': '#f8fafc',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

