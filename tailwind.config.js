import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-headings": theme('colors.white'),
            "--tw-prose-links": theme('colors.yellow.200'),
            "--tw-prose-bold": theme('colors.white'),
          }
        }
      })
    },
  },
  plugins: [
    typography,
  ],
}

