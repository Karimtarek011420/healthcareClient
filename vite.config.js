import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server:{
    proxy: {
      '/API': 'https://health.code-faster.giize.com'
    }
  },
  plugins: [react()],
})
