import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@zakath-online/ui-web': resolve(__dirname, '../../packages/ui-web/src/index.tsx')
    }
  }
});
