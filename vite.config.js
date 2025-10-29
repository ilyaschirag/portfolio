import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/portfolio/',
  server: {
    host: true,   // 👈 allows access from network (e.g. phone, another PC)
    port: 5173,   // 👈 optional; can change to any available port like 3000
  },
})
