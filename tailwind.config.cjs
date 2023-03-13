/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'lightBlue' : '#CAF0F8',
      'mediumBlue' : '#0077B6',
      'hardBlue' : '#023E8A',
    },
    width: {
      '256' : '56rem',
      '128': '48rem',
      '96' : '36rem',
      '64' : '24rem',
    },
    extend: {
      fontFamily: {
         ubuntu: ['Ubuntu'], 
      },
    },
  },
  plugins: [],
}
