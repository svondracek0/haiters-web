/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000", // Black
        secondary: "#D2B48C", // Tan/Beige
        beige: "#D2B48C", // Explicit beige alias
        dark: "#FFFFFF", // White (Background)
        light: "#000000", // Black (Text)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

