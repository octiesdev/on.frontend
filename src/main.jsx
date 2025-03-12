import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import App from "./App.jsx";

console.log("🚀 React загружается...");

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("❌ Ошибка: `#root` не найден в `index.html`!");
} else {
  console.log("✅ Найден `#root` в `index.html`");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/octiesdev/tonconnect-manifest/refs/heads/main/tonconnect-manifest.json">
      <BrowserRouter>
        <Profile />
        <App />
      </BrowserRouter>
    </TonConnectUIProvider>
  </React.StrictMode>
);

console.log("✅ React успешно отрендерился!");