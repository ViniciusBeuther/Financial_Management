/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#1D3D59",
        secundary: "#F2E8B6",
        terciary: "#F2EFDC",
        solidPurple: {
          100: '#FDCCFF',
          200: '#FA82FF',
          300: '#D700F1',
          400: '#E524FF',
          500: '#90359E',
          600: '#7B2987',
          700: '#6F1E7A',
          800: '#641B6E',
          900: '#512458',
          950: '#3A253D',
          1000: '#322634'
        },
        solidGray: {
          100: '#EEE',
          200: '#B7B7B7',
          300: '#828282',
          400: '#777',
          500: '#6C6C6C',
          600: '#555',
          700: '#4A4A4A',
          800: '#434343',
          900: '#393939',
          950: '#313131',
          1000: '#2B2B2B',
        },
      }
    },
  },
  plugins: [],
}

