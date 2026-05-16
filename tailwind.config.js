// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#059669",
          "primary-content": "#ffffff",
          secondary: "#3b82f6",
          accent: "#f43f5e",
          neutral: "#1f2937",
          "base-100": "#ffffff",
          "base-content": "#0f172a",
        },
      },
      {
        dark: {
          primary: "#22c55e",
          "primary-content": "#000000",
          secondary: "#60a5fa",
          accent: "#f472b6",
          neutral: "#111827",
          "base-100": "#0b1220",
          "base-content": "#e6eef8",
        },
      },
      "cupcake",
    ],
    darkTheme: "dark",
  },
};
