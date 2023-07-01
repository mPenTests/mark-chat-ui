/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'auth-background': 'url("https://assets2.lottiefiles.com/packages/lf20_vpsfayvd.json")',
      }
    },
  },
  plugins: [],
}