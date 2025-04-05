const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./Components/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
          ],
          theme: {
        extend: {
            colors: {
          primary: {
              50: "#f7f7f7",

              100: "#e3e3e3",

              200: "#c8c8c8",

              300: "#a4a4a4",

              400: "#818181",

              500: "#666666",

              600: "#4d4d4d",

              700: "#333333",

              800: "#1a1a1a",

              900: "#0d0d0d",
          },

          secondary: {
              50: "#f2ffe6",

              100: "#e6ffcc",

              200: "#ccff99",

              300: "#b3ff66",

              400: "#99ff33",

              500: "#80ff00",

              600: "#66cc00",

              700: "#4d9900",

              800: "#336600",

              900: "#1a3300",
          },

          accent: {
              50: "#e6fff5",

              100: "#ccffeb",

              200: "#99ffd6",

              300: "#66ffc2",

              400: "#33ffad",

              500: "#00ff99",

              600: "#00cc7a",

              700: "#00995c",

              800: "#00663d",

              900: "#00331f",
          },

          neutral: {
              50: "#f5f5f5",

              100: "#e5e5e5",

              200: "#d4d4d4",

              300: "#a3a3a3",

              400: "#737373",

              500: "#525252",

              600: "#404040",

              700: "#262626",

              800: "#171717",

              900: "#0a0a0a",
          },

          success: {
              50: "#f0fdf4",

              100: "#dcfce7",

              200: "#bbf7d0",

              300: "#86efac",

              400: "#4ade80",

              500: "#22c55e",

              600: "#16a34a",

              700: "#15803d",

              800: "#166534",

              900: "#14532d",
          },

          warning: {
              50: "#fefce8",

              100: "#fef9c3",

              200: "#fef08a",

              300: "#fde047",

              400: "#facc15",

              500: "#eab308",

              600: "#ca8a04",

              700: "#a16207",

              800: "#854d0e",

              900: "#713f12",
          },

          error: {
              50: "#fef2f2",

              100: "#fee2e2",

              200: "#fecaca",

              300: "#fca5a5",

              400: "#f87171",

              500: "#ef4444",

              600: "#dc2626",

              700: "#b91c1c",

              800: "#991b1b",

              900: "#7f1d1d",
          },

          teal: {
              50: "#e6fffa",

              100: "#b2f5ea",

              200: "#81e6d9",

              300: "#4fd1c5",

              400: "#38b2ac",

              500: "#319795",

              600: "#2c7a7b",

              700: "#285e61",

              800: "#234e52",

              900: "#1d4044",
          },
            },
        },
          },
          plugins: [nextui()]
};
