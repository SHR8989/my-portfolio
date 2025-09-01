/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {},
      animation: {
        "spin-slow": "spin 8s linear infinite", // slower spin
      },
    },
    plugins: [],
  },
};
