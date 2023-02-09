/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        veryDarkVioletMain: "hsl(268, 75%, 9%)",
        veryDarkVioletSecandary: "hsl(268, 71%, 12%)",
        darkVioletKey: "hsl(281, 89%, 26%)",
        vividMagenta: "hsl(285, 91%, 52%)",
        pureCyan: "hsl(176, 100%, 44%)",
        softCyan: "hsl(177, 92%, 70%)",
        veryDarkVioletkey: " hsl(268, 47%, 21%)",
        darkMagenta: "hsl(290, 70%, 36%)",
        lightYellow: "hsl(52, 100%, 62%)",
        veryDarkBlue: "hsl(198, 20%, 13%)",
      },
      fontFamily: {
        LogoFont: "Dancing Script",
        pageFont: "Itim",
      },
    },
  },
  plugins: [],
};
