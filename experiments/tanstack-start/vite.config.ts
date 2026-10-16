import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { nitro } from 'nitro/vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  resolve: {
    alias: [
      { find: 'react-router-dom', replacement: fileURLToPath(new URL('./src/lib/router-compat.tsx', import.meta.url)) },
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ],
    dedupe: ['react', 'react-dom'],
  },
  plugins: [tanstackStart(), nitro(), react()],
})
