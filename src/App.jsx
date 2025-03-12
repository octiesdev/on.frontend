import React from "react";
import { Routes, Route } from "react-router-dom";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import Profile from "./pages/Profile";
import Tasks from "./pages/Tasks";
import Onexs from "./pages/Onexs";
import AmbasProgram from "./pages/AmbasProgram";
import OnAmbasProgram from "./pages/OnAmbasProgram";


console.log("🚀 `App.jsx` загружается...");

const App = () => {
  console.log("✅ `App.jsx` отрендерился!");
  return (
    <TonConnectUIProvider 
    manifestUrl="https://resilient-madeleine-9ff7c2.netlify.app/tonconnect-manifest.json"
    buttonRootId="HeaderButtonsContainer">
      <Profile />
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/onexs" element={<Onexs />} />
      <Route path="/ambasProgram" element={<AmbasProgram />} />
      <Route path="/onambasProgram" element={<OnAmbasProgram />} />
    </Routes>
    </TonConnectUIProvider>
  );
};

export default App;