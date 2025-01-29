import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Директория билда
    sourcemap: false, // Отключаем сорсмапы (могут ломать сборку)
  }
});