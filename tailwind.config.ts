import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Use the 'class' strategy for toggling dark mode
  theme: {
    extend: {
      colors: {
        background: {
          light: '#ffffff', // Light mode background
          dark: '#1a202c', // Dark mode background
        },
        foreground: {
          light: '#1a202c', // Light mode text
          dark: '#ffffff', // Dark mode text
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
