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
        terciary: "#F2EFDC"
      }
    },
  },
  plugins: [],
}

