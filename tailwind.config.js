/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      'normal-bg-color': 'rgb(245 245 245)',
      'text-color': 'rgb(31 31 31)',
      'secondary-contrast-color': 'rgb(204 204 204)',
      'link-color': 'rgb(51 51 51)',
      'colorful-element-color': 'rgb(248 221 201)',
      'lighter-colorful-element-color': 'rgb(254 248 244)',
      'colorful-element-border-color': 'rgb(253 245 239)',
    },
    fontFamily: {
      normal: ['JetBrains Mono', 'monospace'],
      serif: ['EB Garamond', 'serif']
    },
    extend: {
      borderRadius: {
        'normal': '1em'
      }
    },
  },
  plugins: [],
}

