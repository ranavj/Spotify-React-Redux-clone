import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
     '/refresh_token': 'http://localhost:8888'
    }
  },
  plugins: [react()],
})
