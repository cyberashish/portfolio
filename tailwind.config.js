/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#55E6A5',
        secondary:'#141C27',
        dark:"#02050A",
        lightgray:"#191919",
        darkgray:"#09101A",
        body:"#a2a2a2",
        semigray:"#333f4d",
        darkemphasis:"#181818",
        lightprimary:"#55E6A530"
      },
      boxShadow: {
        'dark-sm': 'rgb(255 255 255 / 20%) 0px 7px 29px 0px',
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

