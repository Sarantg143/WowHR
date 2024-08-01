/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        defaultBlue: "#1850a8",
        darkBlue: "#011329",
        lightBlue: "#089ede",
      },
      fontFamily: {
        comfortaa: ["Comfortaa", "sans-serif"],
        antic: ["Antic", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      screens: {
        xs: "320px",
      },
      // fontSize: {
      //   xxs: "0.625rem",
      //   xs: "0.75rem",
      //   sm: "0.875rem",
      //   base: "1rem",
      //   lg: "1.125rem",
      //   xl: "1.25rem",
      // },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */

// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       animation: {
//         "bounce-slow": "bounce 1s linear",
//       },
//       backgroundImage: {
//         logsbg: `url("./src/assets/LogSvg/LogBg.png")`,
//       },
//       screens: {
//         xs: "320px",
//       },
//       colors: {
//         theme: {
//           purple1000: "#1c1650",
//           purple900: "#2d2689",
//           purple800: "#3225ae",
//           purple700: "#3e2ad8",
//           purple600: "#4836f5",
//           purple: "#5A57FF",
//           purple400: "#757dff",
//           purple300: "#9caaff",
//           purple200: "#c2cdff",
//           purple100: "#dde4ff",
//           purple50: "#ecf0ff",
//         },
//       },
//     },
//   },
//   plugins: [],
// };
