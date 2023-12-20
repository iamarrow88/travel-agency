/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "skyDark": "#979C9E",
        "green": {
          "template": "#BCFD49"
        },
        "template": {
          "lightGray": "#CCC",
          "ultraLightGray": "#F2F1F1",
          "inkLight": "#6C7072",
          "navi": "#7483BD",
          "black": "#101010",
          "gray": "#808080"
        }
      },
      fill: {
        "template": {
          "black": "#000",
          "gray": "#808080",
          "white": "#fff",
          "lightGray": "#F2F1F1"
        }
      },
      stroke: {
        "template": {
          "black": "#000",
          "gray": "#808080",
          "white": "#fff",
          "lightGray": "#F2F1F1"
        }
      },
      spacing: {
        "32and": "32.25rem"
      },
      backgroundImage: {
        "main-bg": "url('/public/assets/img/home-main-section.jpg')"
      },
      width: {
        "300": "300%"
      },
      fontFamily: {
        body: ["Raleway", "sans-serif"],
        title: ["Roboto", "sans-serif"],
        accent: ["Inter", "sans-serif"]
      },
      lineHeight: {
        "160": "160%"
      },
      gridTemplateColumns: {
        "sliderArrows": "40px calc(100%-80px) 40px",
        "recentCards": "repeat(3, 1fr)"
      },
      gridTemplateRows: {
        "655px": "655px"
      },
      borderRadius: {
        '6xl': '3rem'
      }
    },
  },
  plugins: [],

}

