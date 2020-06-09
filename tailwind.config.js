module.exports = {
  purge: {
    content: [
      './src/*.js',
      './src/*.jsx'
    ]
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
