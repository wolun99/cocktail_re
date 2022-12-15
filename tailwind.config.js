/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width:{
        '1200':1200,
        '600' : 600,
        '400' : 400
      },
      lineHeight:{
        '4rem':'4rem',
        '2.5rem':'2.5rem'
      },
      borderRadius:{
        '30px':'30px'
      },
      height:{
        '500':500
      },
      backgroundColor:{
        'btnhover':'#6ab1c9'
      }
    },
  },
  plugins: [],
}
