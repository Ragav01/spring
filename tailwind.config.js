/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#39B54A',
        surface: '#F1FDF4',
        text: {
          base: '#141414',
          mute: '#595959'
        }
      }
    },
  },
  plugins: [],
}

