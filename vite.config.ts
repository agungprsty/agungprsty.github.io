import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import transformImports from '@rolldown/plugin-transform-imports';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    transformImports({
      '@mui/icons-material': {
        transform: '@mui/icons-material/esm/{{member}}'
      }
    })
  ],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'build'
  }
});
