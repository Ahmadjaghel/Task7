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
        background: "var(--background)",
        foreground: "var(--foreground)",
        nav: "#333333c4",
        myPrimary: "#FA8B02",
        bblack: "#333333",
      },
      backgroundImage: {
        "hero-home": "url('/img/hero-pattern.svg')",
        "hero-about": "url('/img/hero-about.svg')",
      },
    },
  },
  plugins: [],
};
