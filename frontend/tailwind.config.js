const { createGlobPatternsForDependencies } = require("@nx/angular/tailwind");
const { join } = require("path");
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@spartan-ng/ui-core/hlm-tailwind-preset")],
  darkMode: "selector",

  content: [
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
