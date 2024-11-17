// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        'text': 'rgb(var(--text))',
        'background': 'rgb(var(--background))',
        'primary': 'rgb(var(--primary))',
        'secondary': 'rgb(var(--secondary))',
        'accent': 'rgb(var(--accent))',
        'text-sub': 'rgb(var(--text-sub))',
        'text-title': 'rgb(var(--text-title))',
        
       },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'], // Define sua fonte padrão
      },
    },
  },
  plugins: [],
};

export default config;
