import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/card-pair-match/',
  build: {
    outDir: 'docs',
  },
})
