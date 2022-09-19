/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/**.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        galaxy:"url('/background-galaxy.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572fc 33%, #43e7ad 55%, #e1d55d 80.08%)'
      },
      colors: {
        
      }
    },
  },
  plugins: [],
}
