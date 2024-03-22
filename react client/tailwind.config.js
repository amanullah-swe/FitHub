/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Rubik', 'sans-serif'],
        heading: ['Catamaran', 'sans-serif'],
      },
      colors: {
        offwhite: "#f8f8f8",
        customgreen: "#0fb82e",
        primary: '#a17e4f',
        secondary: '#dff3c8',
        text: "#000000",

      }

    },
  },
  plugins: [
    import('@tailwindcss/aspect-ratio'),
    import('@tailwindcss/forms'),
  ],
}

