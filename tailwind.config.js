/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,php}"],
  theme: {
    extend: {
      margin: {
        '20': '5rem',
        '25': '6rem',
      },
    },
  },
  plugins: [],
}

// npx tailwindcss -i ./assets/core.css -o ./assets/tailwind.css --minify