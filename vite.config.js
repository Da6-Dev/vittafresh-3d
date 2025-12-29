import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Tem que ter a barra antes e depois do nome
  base: "/vittafresh-3d/", 
})