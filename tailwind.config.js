/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundColor: {
        'deep-blue': '#1E3A8A',
        'bright-cyan': '#38BDF8',
      }
    },
  },
  plugins: [],
}

