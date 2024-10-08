import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG', '**/*.png'], // Add this line to include PNG files
  base: '/<git@github.com:Amauri817/Website.git>/',
})
