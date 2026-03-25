/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    { pattern: /text-(indigo|violet|cyan|emerald|amber|rose|slate)-(400|500|600)/ },
    { pattern: /bg-(indigo|violet|cyan|emerald|amber|rose)-(500)\/(5|10|20)/ },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
