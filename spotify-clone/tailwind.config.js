module.exports = {
  theme: {
    extend: {
      height: {
        screen: '100vh',
      },
    },
  },
  plugins: [
    require('@tailwindcss/scrollbar'),
    require('@tailwindcss/line-clamp'),
  ],
}
