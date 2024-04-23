/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        500: '500px'
      },
      colors: {
        'light-white': '#F8F9FA',
        'middle-white': '#E9ECEF',
        'low-white': '#DEE2E6',
        'light-gray': '#CED4DA',
        'middle-gray': '#ADB5BD',
        'low-gray': '#6C757D',
        'light-black': '#495057',
        'middle-black': '#343A40',
        'low-black': '#212529'
      }
    }
  },
  variants: {
    extend: {}
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui'), require('tailwind-hamburgers')]
}
