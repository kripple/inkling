import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/inkling/',
  build: { outDir: 'docs' },
  clearScreen: false,
  plugins: [react()],
  server: {
    open: true,
  },
});
