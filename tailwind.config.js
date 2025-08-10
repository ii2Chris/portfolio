/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "#1a2238",
  	darkred:  "#7d1e2b",      // deep red surfaces
  	ember:    "#ff5a3c",      // bright orange-red glow
  	ember2:   "#ffb199",      // softer inner glow
	},
    },
},
  plugins: [],
};
