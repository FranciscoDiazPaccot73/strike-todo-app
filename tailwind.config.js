/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        'calc': 'calc(100% - 40px)',
      },
      colors: {
        'blue-80': '#1f1fee80',
        'purple-80': '#a044e580',
        'gray-40': '#76778340',
        'gray-disabled': '#767783',
        light: {
          bg: '#F4F4F4',
          text: '#333333',
          'card': '#4a4a4f',
        },
        dark: {
          bg: '#1E1E1E',
          text: '#F4F4F4',
          'card': '#25273b',
        },
      },
    },
  },
  plugins: [],
}
