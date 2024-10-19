
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Optionally, use vite-tsconfig-paths for aliasing
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': '/src',  // Define your custom alias for '@/lib/utils'
    },
  },
});
