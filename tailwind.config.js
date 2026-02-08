const heroui = require("@heroui/theme/dist/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./Components/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#e10098",
                    50: "rgb(251 207 232)",
                    100: "rgb(249 168 212)",
                    200: "rgb(244 114 182)",
                    300: "rgb(236 72 153)",
                    400: "rgb(219 39 119)",
                    500: "#e10098",
                    600: "rgb(190 24 93)",
                    700: "rgb(157 23 77)",
                    800: "rgb(131 24 67)",
                    900: "rgb(112 26 60)",
                    950: "rgb(80 7 36)",
                },
                secondary: {
                    DEFAULT: "#00bcd4",
                    50: "rgb(236 254 255)",
                    100: "rgb(207 250 254)",
                    200: "rgb(165 243 252)",
                    300: "rgb(103 232 249)",
                    400: "rgb(34 211 238)",
                    500: "#00bcd4",
                    600: "rgb(8 145 178)",
                    700: "rgb(14 116 144)",
                    800: "rgb(21 94 117)",
                    900: "rgb(22 78 99)",
                    950: "rgb(8 51 68)",
                },
                background: "#0f0f23",
                surface: "#1a1a2e",
            },
            animation: {
                pulse: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            keyframes: {
                pulse: {
                    "0%, 100%": { opacity: "0.5" },
                    "50%": { opacity: "0.8" },
                },
            },
        },
    },
    plugins: [heroui()],
};
