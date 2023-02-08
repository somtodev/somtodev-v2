/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{jsx,js,ts,tsx}'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px'
    },
    extend: {
      colors: {
        "hl-color": "#eef3ec",
        "primary": "#bac3b8",
        "secondary": "#faffe4",
        "alt-dark": "#181818",
        "faded": "#5e635e",
        "bg-color": "#222222",
        "font": "#6D6D6D",
      }
    }
  },
  plugins: [],
}