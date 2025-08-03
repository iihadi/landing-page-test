import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/components/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#00a826',
      },
      keyframes: {
        'spin-once': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'spin-once': 'spin-once 1s ease-in-out',
      }
    },
  },
  plugins: [],
};

export default config;
