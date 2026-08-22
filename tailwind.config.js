/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'SF Pro Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'Inter',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'SF Mono',
          'Fira Code',
          'Cascadia Code',
          'Consolas',
          'monospace',
        ],
      },
      colors: {
        apple: {
          bg: '#FBFBFD',
          card: '#FFFFFF',
          darkBg: '#0B0B0C',
          darkCard: '#161618',
          text: '#1D1D1F',
          subtext: '#6E6E73',
          border: '#E5E5E7',
          darkBorder: '#27272A',
          blue: '#0066CC',
          blueHover: '#0055B3',
        },
      },
      letterSpacing: {
        tightest: '-0.035em',
        tighter: '-0.025em',
      },
      boxShadow: {
        'apple-sm': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'apple-md': '0 8px 24px rgba(0, 0, 0, 0.06)',
        'apple-lg': '0 16px 40px rgba(0, 0, 0, 0.08)',
        'apple-dark': '0 16px 40px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
