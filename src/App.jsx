import "./polyfills.jsx"
import { UserProvider } from "./UserContext"; // Убедись, что путь правильный
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import Profile from "./pages/Profile";
import Tasks from "./pages/Tasks";
import Onexs from "./pages/Onexs";
import AmbasProgram from "./pages/AmbasProgram";
import OnAmbasProgram from "./pages/OnAmbasProgram";

const App = () => {

  return (
    <UserProvider>
    <TonConnectUIProvider 
    manifestUrl="https://viber-redirect.netlify.app/tonconnect-manifest.json">
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/onexs" element={<Onexs />} />
      <Route path="/ambasProgram" element={<AmbasProgram />} />
      <Route path="/onambasProgram" element={<OnAmbasProgram />} />
    </Routes>
    </TonConnectUIProvider>
    </UserProvider>
  );
};

export default App;