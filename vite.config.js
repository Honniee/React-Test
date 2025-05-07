import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/React-Test/',
  server: {
    port: 3000,
    open: true,
    cors: true,
  }
})
