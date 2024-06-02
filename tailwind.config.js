/** @type {import('tailwindcss').Config} */
import screens from './screens.js';
import fontSizes from './fontSizes.js';

const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: fontSizes,
    },
    screens,
  },
  plugins: [],
};

export default config;

// For CommonJS compatibility
module.exports = config;
