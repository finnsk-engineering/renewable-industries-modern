/** @type {import('tailwindcss').Config} */
import { Poppins } from 'google-fonts';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#78b833',
          DEFAULT: '#5ea338',
          dark: '#4a8a29',
        },
        secondary: '#0F172A', // A dark blue/slate color for text and accents
        light: '#F8FAFC', // Off-white for section backgrounds
        dark: '#020617', // Site background
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
