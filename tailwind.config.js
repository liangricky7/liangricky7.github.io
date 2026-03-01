/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        '@font-face': [
          {
            fontFamily: 'Geist',
            fontWeight: '400',
            fontStyle: 'normal',
            fontDisplay: 'swap',
            src: `url('./assets/fonts/Geist/static/Geist-Regular.woff2') format('woff2'), url('./assets/fonts/Geist/static/Geist-Regular.ttf') format('truetype')`,
          },
          {
            fontFamily: 'Geist',
            fontWeight: '600',
            fontStyle: 'normal',
            fontDisplay: 'swap',
            src: `url('./assets/fonts/Geist/static/Geist-SemiBold.woff2') format('woff2'), url('./assets/fonts/Geist/static/Geist-SemiBold.ttf') format('truetype')`,
          },
          {
            fontFamily: 'Inter',
            fontWeight: '600',
            fontStyle: 'normal',
            fontDisplay: 'swap',
            src: `url('./assets/fonts/Inter/static/Inter_18pt-SemiBold.woff2') format('woff2'), url('./assets/fonts/Inter/static/Inter_18pt-SemiBold.ttf') format('truetype')`,
          },
          {
            fontFamily: 'Inter',
            fontWeight: '600',
            fontStyle: 'italic',
            fontDisplay: 'swap',
            src: `url('./assets/fonts/Inter/static/Inter_18pt-SemiBoldItalic.woff2') format('woff2'), url('./assets/fonts/Inter/static/Inter_18pt-SemiBoldItalic.ttf') format('truetype')`,
          },
          {
            fontFamily: 'Inter',
            fontWeight: '400',
            fontStyle: 'normal',
            fontDisplay: 'swap',
            src: `url('./assets/fonts/Inter/static/Inter_18pt-Regular.woff2') format('woff2'), url('./assets/fonts/Inter/static/Inter_18pt-Regular.ttf') format('truetype')`,
          },
          {
            fontFamily: 'Inter',
            fontWeight: '400',
            fontStyle: 'italic',
            fontDisplay: 'swap',
            src: `url('./assets/fonts/Inter/static/Inter_18pt-Italic.woff2') format('woff2'), url('./assets/fonts/Inter/static/Inter_18pt-Italic.ttf') format('truetype')`,
          }
        ]
      })
    }
  ],
}