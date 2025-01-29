import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', 
  },
  "scripts": {
  "dev": "vite", // Для запуска сервера разработки
  "build": "vite build", // Для сборки проекта
  "preview": "vite preview" // Для предварительного просмотра собранного проекта
}
});