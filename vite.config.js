import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Убедитесь, что каталог для билда указан правильно
  },
  server: {
    port: 3000, // Можно указать другой порт
    open: true,
  }
});