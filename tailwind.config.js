/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        lightblue: "#b0cad1",
        tomato: {
          "100": "#f75757",
          "200": "#db4437",
        },
        lightgreen: "#78d25b",
        sandybrown: "#fa9441",
        mediumslateblue: "#6257f7",
        orange: "#ffab15",
        steelblue: "#007bb5",
        cornflowerblue: "#1da1f2",
        darkslateblue: "#3b5998",
      },
      spacing: {},
      fontFamily: {
        "segoe-ui": "'Segoe UI'",
        "font-awesome-5-free": "'Font Awesome 5 Free'",
        fontawesome5freesolid: "FontAwesome5FreeSolid",
        fontawesome5brandsregular: "FontAwesome5BrandsRegular",
      },
    },
    fontSize: {
      base: "16px",
      smi: "13px",
      sm: "14px",
      lg: "18px",
      "11xl": "30px",
      "3xs": "10px",
      "21xl": "40px",
      mini: "15px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
