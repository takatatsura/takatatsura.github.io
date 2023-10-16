/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [
  //   "./index.html",
  //   "./src/**/*.{vue,js,ts,jsx,tsx}",
  // ],
  corePlugins: ["margin"],
  theme: {
    spacing: {
      0: "0",
      1: "4px",
      2: "8px",
      ...
  }, screens: {
      xs: { max: "340px" },
      sm: { max: "540px" },
      md: { max: "800px" },
      lg: { max: "1280px" },
    },
  }
  plugins: [],
}

