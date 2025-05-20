// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // choose 'media' to follow the OS setting, or 'class' to toggle manually
  darkMode: "media",

  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      // (optional) add custom colors, animations, etc.
    },
  },

  plugins: [],
};
