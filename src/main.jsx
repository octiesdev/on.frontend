import React from "react";  // ✅ ОБЯЗАТЕЛЬНО
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import App from "./App.jsx";

const container = document.getElementById("root");
if (!container) {
  console.error("⚠️ Ошибка: Элемент #root не найден в index.html!");
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl="https://your-app.netlify.app/tonconnect-manifest.json">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TonConnectUIProvider>
  </React.StrictMode>
);