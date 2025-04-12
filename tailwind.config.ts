import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quran: ['var(--font-quran)'],
      },
      colors: {
        customBlue: '#4c6ef5',
        customPurple: '#6a4c93',
        customPink: '#f06595',
        primary: "#14406D",
        secondary: "#E5E0D3",
        tertiary: "#C4BBB6",
      },
      animation: {
        scroll: 'scroll 2s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
