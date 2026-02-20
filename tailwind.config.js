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
        secondary: "#6B7280", // Gray-500
        beige: "#6B7280", // Gray-500
        dark: "#FFFFFF", // White (Background)
        light: "#000000", // Black (Text)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

