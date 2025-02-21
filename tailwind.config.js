/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_color: "var(--primary-color)",
        primary_hover: "var(--primary-hover)",
        secondray_color: "var(--secondray-color)",
        light_color: "var(--light-color)",
        text_color: "var(--text-color)",
        dark_color: "var(--dark-color)",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};
