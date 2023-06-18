  /** @type {import('tailwindcss').Config} */
  export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#f5385d",
        },
        keyframes: {
          turnAround: {
            "100%": { transform: "rotate(360deg)" },
          },
          popUp: {
            "0%": { transform: "translateY(100vh)" },
            "100%": { transform: "translateY(0px)" },
          },
          fade: {
            "0%": {
              "@apply bg-opacity-0": {},
            },
            "100%": {
              "@apply bg-opacity-50": {},
            },
          },
        },
        gridTemplateColumns: {
          layout: "repeat(3, minmax(0, 1fr)) minmax(60px, 100px)",
        },
      },
    },
    plugins: [
      function ({ addUtilities }) {
        addUtilities({
          ".bg-opacity-0": { "background-color": "rgba(0,0,0,0)" },
          ".bg-opacity-50": { "background-color": "rgba(0,0,0,0.5)" },
        });
      },
    ],
  };
