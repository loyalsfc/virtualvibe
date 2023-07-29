/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'switzer': ['Switzer', "sans-serif"],
        'dm-sans': ['DM Sans', "sans-serif"],
        'work-sans': ["sans-serif", "sans-serif"]
      },
      colors: {
        "orange": '#FF4C00',
        "logo": "#122B1A",
        "cc-200": "#303C4D",
        "cc-300": "#061428",
        "cc-400": "#040E1C",
      },
      boxShadow: {
        "btn": "0px 10px 50px 0px rgba(61, 55, 241, 0.25)"
      }
    },
  },
  plugins: [],
}
