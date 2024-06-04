/** @type {import('tailwindcss').Config} */
import screens from './screens.js';
import fontSizes from './fontSizes.js';
import extraWidthsValues from './extraWidths.js';

const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: fontSizes,
    },
    width: extraWidthsValues,
    screens,
  },
  plugins: [],
};

export default config;

// For CommonJS compatibility
 module.exports = config;
