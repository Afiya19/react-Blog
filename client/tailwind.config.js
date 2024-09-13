// tailwind.config.js
const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(), // Add this line to include Flowbite's content
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(), // Add this line to include Flowbite's plugin
  ],
};
