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
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        bear: {
          brown: '#8B4513',
          honey: '#FFB347',
          forest: '#2F4F2F',
          cream: '#FFF8DC',
        },
        primary: {
          DEFAULT: '#00D632',
          light: '#00B82E',
          dark: '#009A25',
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

