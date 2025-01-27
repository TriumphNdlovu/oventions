import type { Config } from "tailwindcss";

export default {
  mode: 'jit',
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
      animation: {
        'fade-in-down': 'fadeInDown 1s ease-out', // Define the custom animation here
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '50%': { opacity: '0.5', transform: 'translateY(5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
