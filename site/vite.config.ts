import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '/cvs': path.resolve(__dirname, '../cvs'),
    },
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
})
