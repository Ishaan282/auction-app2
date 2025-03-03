/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS/JSX/TS/TSX files in the src directory
  ],
  theme: {
    extend: {}, // Extend or customize the default Tailwind theme here
  },
  plugins: [], // Add Tailwind plugins here if needed
};