/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#9BB8CD",
        secondary: "#FFF7D4",
        yellowed: "#EEC759",
        sage: "#B1C381",
      },
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  plugins: [import("flowbite/plugin")],
};
