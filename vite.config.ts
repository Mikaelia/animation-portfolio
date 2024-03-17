import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@rive': new URL('./src/components/rive', import.meta.url).pathname,
      '@components': new URL('./src/components/', import.meta.url).pathname,
      '@': new URL('./src', import.meta.url).pathname
    }
  }
});