import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react/jsx-runtime'] // Указываем, что react/jsx-runtime - внешний модуль
    }
  }
});