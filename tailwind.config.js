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
      content: {
        remove: 'url(/close.svg)',
        complete: 'url(/check.svg)',
      },
      width: {
        'calc': 'calc(100% - 50px)',
      },
      colors: {
        'blue': '#1f1fee',
        'blue-80': '#1f1fee80',
        'purple': '#a044e5',
        'purple-80': '#a044e580',
        'gray-40': '#76778340',
        'gray-disabled': '#767783',
        'main-light': '#f1f2f5',
        light: {
          bg: '#FFF',
          text: '#333333',
          'card': '#f1f1f1',
          'modal': '#373950',
        },
        dark: {
          bg: '#1E1E1E',
          text: '#F4F4F4',
          'card': '#25273b',
          'modal': '#373950',
        },
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      },
      animation: {
        gradient: 'gradient 4s ease infinite',
      },
      backgroundSize: {
        '400': '400%',
      }
    },
  },
  plugins: [],
}
