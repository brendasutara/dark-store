/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-pink": "#f54b64",
        "primary-light-pink": "#f78361",
      },
    },
  },
  plugins: [],
};
