/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'fall': 'fall linear infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-100vh) rotate(0deg)' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}