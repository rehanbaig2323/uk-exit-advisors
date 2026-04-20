module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#121826',
        cedar: '#21352e',
        brass: '#8b6b3e',
        paper: '#f7f2ea',
        linen: '#e4dbcf',
        mist: '#f1ece3',
        calm: '#68707d',
        line: '#d8cfbf',
        accent: '#2f4a41',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(18, 24, 38, 0.06)',
        lift: '0 18px 50px rgba(18, 24, 38, 0.08)',
      },
    },
  },
  plugins: [],
};
