import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      technologyCian1: '#e7f2f5',
      technologyCian2: '#c5e0e6',
      technologyCian3: '#97c7d2',
      technologyCian4: '#67acbd',
      technologyCian5: '#3994a9',
      technologyCian6: '#0e7c96',
      technologyCian7: '#0c6980',
      technologyCian8: '#0a586b',
      technologyCian9: '#084756',
      technologyCian10: '#063844',
      PinguinRed1: '#f8e7eb',
      PinguinRed2: '#edc5cf',
      PinguinRed3: '#df97a8',
      PinguinRed4: '#d06780',
      PinguinRed5: '#c23959',
      PinguinRed6: '#b40e35',
      PinguinRed7: '#990c2d',
      PinguinRed8: '#800a26',
      PinguinRed9: '#67081e',
      PinguinRed10: '#510618',
      white10: '#f8f8ff',
      black10: '#100E0E',
      black3: '#C9C9C9',
      black5: '#606060'
    }
  },
  plugins: []
}
export default config
