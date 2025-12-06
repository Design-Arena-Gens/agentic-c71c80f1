/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ecf5ff",
          100: "#d7e8ff",
          200: "#a8cfff",
          300: "#7ab7ff",
          400: "#4c9fff",
          500: "#1e87ff",
          600: "#006de6",
          700: "#0055b4",
          800: "#003c82",
          900: "#002350"
        }
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "\"Segoe UI\"",
          "sans-serif"
        ]
      }
    },
  },
  plugins: [],
}
