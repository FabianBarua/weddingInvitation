/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}"  
  ],
  options: {
    safelist: [
      'text-salmon',
      'text-bwhite',
    ],
  },
  theme: {
    extend: {
      colors:{
        bred:'#9A2A2D',
        salmon:'#F9BEB9',
        bwhite:'#FFF3F2',
        confirm:'#FFDEDB'
        
      },
      backgroundImage: {
        'fondo': "url('/img/fondo.png')",      
      },
      fontFamily: {
        'judson': ['Judson', 'sans-serif'],
        'italianno': ['Italianno', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
};
