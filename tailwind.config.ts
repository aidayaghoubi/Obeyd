import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        primary: "#fa7500", // Custom red color
        mainBlue: '#CCDCE5',
        textColor: '#414149',
        mainRed: '#C4616E',
        activeRed: "#D21341",
        background: "var(--background)", // Using CSS variables
        foreground: "var(--foreground)", // Using CSS variables
      },
      backgroundImage: {
        'aboutUsPattern': "url('/aboutUs.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
};

export default config;
