/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
        exo: ["Exo 2", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["dark", "light"],
  },
  plugins: [require("daisyui")],
};
