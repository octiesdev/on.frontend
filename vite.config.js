import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*", // Разрешает доступ к ресурсам с любого домена
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS", // Разрешённые HTTP-методы
      "Access-Control-Allow-Headers": "Content-Type, Authorization" // Разрешённые заголовки
    }
  }
});