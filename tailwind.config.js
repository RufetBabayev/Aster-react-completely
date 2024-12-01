/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        skyBlue: '#2F9FF8',
        primary: '#0768B5',
        amberBlack: '#072D4B',
      },
      borderRadius:{
        theme:'4px'
      },
      boxShadow:{
        theme:' 0px 2px 20px 0px rgba(0, 0, 0, 0.04)'
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2'
      },
      backgroundImage: {
        'night': "url('https://freesvg.org/storage/img/thumb/crescent.png')",
        'day': "url('https://www.svgrepo.com/show/78390/sun.svg')",
      }
    },
  },
  plugins: [],
}