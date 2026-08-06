import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Relative base so the static build works at any path (e.g. GitHub Pages).
  base: './',
  plugins: [react(), tailwindcss()],
})
