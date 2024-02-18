/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-1": "#8e8d90",
        "gray-2": "#646266",
        "blue-3": "#396c7c",
        "blue-2": "#85bfd2",
        "blue-1": "#a8dbec",
        white: "#FFFFFF",
        black: "#181818",
      },
      fontFamily: {
        agba: ["Agbalumo", "monospace"],
        jose: ["Josefin Sans", "sans", "sans serif"],
      },
    },
  },
  plugins: [],
}
