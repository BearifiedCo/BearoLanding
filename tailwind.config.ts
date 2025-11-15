import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bear: {
          brown: '#8B4513',
          honey: '#FFB347',
          forest: '#2F4F2F',
          cream: '#FFF8DC',
        },
        apechain: {
          primary: '#FF6B00',
          secondary: '#FFE5D0',
        },
        solana: {
          primary: '#14F195',
          secondary: '#9945FF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config

