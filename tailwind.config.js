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
      animation: {
        'scroll-reveal': 'scrollReveal 0.8s ease-out forwards',
        'blur-reveal': 'blurReveal 0.8s ease-out forwards',
      },
      keyframes: {
        scrollReveal: {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)',
            clipPath: 'inset(0 0 100% 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
            clipPath: 'inset(0 0 0 0)',
          },
        },
        blurReveal: {
          '0%': {
            opacity: '0',
            filter: 'blur(12px)',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            filter: 'blur(0px)',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
