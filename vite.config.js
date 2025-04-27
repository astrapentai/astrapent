import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),     tailwindcss(),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    colors: {
      'blue-900': '#1E3A8A',
      'gray-100': '#F3F4F6',
    },
  },
  
})
// vite.config.ts

