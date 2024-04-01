/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat', 'sans-serif'],
        heading: ['Rubick', 'sans-serif'],
      },
      colors: {
        offwhite: "#f8f8f8",
        customgreen: "hsla(165, 77%, 17%, 1)",
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

