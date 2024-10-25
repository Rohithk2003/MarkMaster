const { createGlobPatternsForDependencies } = require("@nx/angular/tailwind");
const { join } = require("path");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  presets: [require("@spartan-ng/ui-core/hlm-tailwind-preset")],
  content: [
    "./src/**/*.{html,ts}",
    "./libs/ui/**/*.{html,ts}",
    join(__dirname, "src/**/!(*.stories|*.spec).{ts,html}"),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        main: "#222222",
      },
    },
  },
  plugins: [],
};
