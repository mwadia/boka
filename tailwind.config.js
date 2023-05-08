/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF914D',
        shallowOrang: '#fffaf8',
        businessTitle: '#02323D',
        bgTrans: '#FFFAF8',
      },
      prefix: 'tw-',
    },
  },
  plugins: [],
};
