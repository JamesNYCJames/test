import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/test/' : '/', // Correct base path for your 'test' repository
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for the build
    sourcemap: false, // Set to true if you want source maps in production
    minify: 'terser', // Use Terser for minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // Exclude dependencies from optimization
  },
});