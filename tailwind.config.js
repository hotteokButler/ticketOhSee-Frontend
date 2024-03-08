/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        aFadeInOut: {
          '0%, 7% ,95%,100%': { transform: 'translate(-50%,100%)', opacity: '0', visibility: 'hidden', zIndex: '10' },
          '7%,95%': { transform: 'translate(-50%,0%)', opacity: '1', visibility: 'visible', zIndex: '11' },
        },
      },
      animation: {
        fadeInOut: 'aFadeInOut 3.5s ease-in-out 1 forwards',
      },
      width: {
        '48%': '48%',
      },
    },
  },
  plugins: [],
};
