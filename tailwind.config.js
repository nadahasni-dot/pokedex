/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "menu-item": "url('/icons/menu-bg.svg')",
        pokeball: "url('/icons/pokeball.svg')",
      },
      backgroundPosition: {
        "right-top-negative": "right -4rem top -4rem",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
