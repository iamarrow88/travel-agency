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
      }
      },
  },
  plugins: [],

}

