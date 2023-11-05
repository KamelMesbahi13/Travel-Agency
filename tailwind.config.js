/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#233C8C",
        "second-color": "#F8AB35",
      },
    },
  },
  plugins: [],
};
