/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: [
      // override themes (emerald and dracula) to disable uppercased button.
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=emerald]"],
          "--btn-text-case": ""
        },
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dracula]"],
          "--btn-text-case": ""
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: ""
  },
}
