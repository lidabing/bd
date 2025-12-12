/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.3s ease-out forwards',
      },
      keyframes: {
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-in-right': {
          'from': { opacity: '0', transform: 'translateX(-10px)' },
          'to': { opacity: '1', transform: 'translateX(0)' }
        }
      }
    },
  },
  plugins: [],
}
