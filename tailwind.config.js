/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dsi-green': '#1B4332',
        'dsi-green-light': '#2D6A4F',
        'dsi-orange': '#F97316',
        'dsi-orange-dark': '#EA580C',
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'count-up': 'countUp 2s ease forwards',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%': { transform: 'translateX(-50%) translateY(8px)' },
        },
      }
    },
  },
  plugins: [],
}
