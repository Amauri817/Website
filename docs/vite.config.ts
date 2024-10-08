import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.PNG', '**/*.png'], // Add this line to include PNG files
  plugins: [react()],
  server: {
    open: true,
  },
});