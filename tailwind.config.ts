import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        steel: '#2c2c2c',
        molten: '#ff6b2c',
        gold: '#c49a4a',
        bone: '#f8f8f8',
        forge: {
          primary: '#2c2c2c', // deep steel gray
          accent: '#ff6b2c', // molten orange
          gold: '#c49a4a', // forged gold
          bg: '#f8f8f8' // off-white
        }
      }
    }
  },
  plugins: []
}

export default config
