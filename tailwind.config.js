/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'team-photo': 'linear-gradient(rgba(31, 41, 55, 0.6), rgba(31, 41, 55, 1)), url("/team.webp")',
      },
      fontFamily: {
        glacialindifferencebold: ['GlacialIndifference-Bold', 'sans-serif'],
      },
    },
    minHeight: {
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
    },
  },
  plugins: [],
};
