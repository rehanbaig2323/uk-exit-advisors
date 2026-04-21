module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#101a24',
        cedar: '#24382f',
        brass: '#7a4a33',
        paper: '#f4efe7',
        linen: '#ddd1c2',
        mist: '#efe7db',
        calm: '#5f6672',
        line: '#d9cbbb',
        accent: '#5b302c',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(18, 24, 38, 0.06)',
        lift: '0 18px 50px rgba(18, 24, 38, 0.08)',
      },
    },
  },
  plugins: [],
};
