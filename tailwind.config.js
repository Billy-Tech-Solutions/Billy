/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple-main': '#9747FF',
        'button-main': '#C848B9',
        'pink-main': '#C848B9',
        'gray-main': '#C4C4C4',
        'yellow-main': '#FFBA69',
        
        'pink-secondary': '#EBDCFF',
        'purple-secondary': '#160032'
      }
    },
  },
  plugins: [],
}
