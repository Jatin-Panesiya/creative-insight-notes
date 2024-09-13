/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#15202b",
        secondary: "#0f172a",
        hover: "#64748b",
        dark: "#1d2a35",
      },
    },
  },
  plugins: [],
};
