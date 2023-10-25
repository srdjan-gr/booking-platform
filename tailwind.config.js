/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero_image': "url('/img/hero-image.png')",
      },
      colors: {
        'main_blue': "#65AEF2",
        'light_blue': "#65AEF2",
        'very_light_blue': "#E9F3F6",
        'main_black': "#1E1E1E",

      }
    },
  },
  plugins: [],
}

