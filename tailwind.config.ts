import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
        primary: '#FF6B00', // Industrial Orange (CTAs, Buttons)
        secondary: '#222831', // Graphite Black (Headings, Strong Elements)
        accent: '#0077B6', // Steel Blue (Links, Highlights)
        background: '#F5F5F5', // Light Gray (Main Background)
        border: '#9E9E9E', // Medium Gray (Borders, Shadows)
      },
      fontFamily: {
        roboto: ["var(--font-inter)", "sans-serif"],  
      },
    },
  },
  plugins: [],
} satisfies Config;
