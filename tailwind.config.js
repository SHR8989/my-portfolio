/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes: {
        dash: {
          "0%": { "background-position": "0 0" },
          "100%": { "background-position": "100% 0" },
        },
      
      },
      animation: {
        dash: "dash 11s linear infinite",
         "spin-slow": "spin 8s linear infinite", // slower spin
          
     
    },
  },
  plugins: [],
},
}

