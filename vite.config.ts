import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@rive': new URL('./src/components/rive', import.meta.url).pathname,
      '@layout': new URL('./src/components/layout', import.meta.url).pathname
    }
}});