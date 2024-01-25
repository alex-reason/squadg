/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        "accent": "#FFDE7D",
        "primary-1": "#E0CEF1",
        "primary-lighter": "#ECDDFA",
        "primary-2": "#9A6AAD",
        "primary-3": "#573782",
        "white-1": "#FDFDFD",
        "gray-3": "#F3F3F3",
        "gray-2": "#DCDCDC",
        "gray-1": "#F1F1F1",
        "black-4": "#4D4D54",
        "black-3": "#343439",
        "black-2": "#2F2F36",
        "black-1": "#18181B",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}