/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "#1a2238",
        darkred: "#7d1e2b",
        accent: "#9daaf2",
      },
    },
  },
  plugins: [],
};
