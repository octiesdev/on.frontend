import React from 'react';
import { createRoot } from 'react-dom/client'; // React 18+
import App from './src/App'; // Подключаем главный компонент
import './css/profile.css'; // Подключаем стили

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);