/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6BFA88",
        secondary: "#5039EC",
        dark: "#0D0C0C",
      },
    },
  },
  plugins: [],
};