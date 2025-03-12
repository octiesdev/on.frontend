import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Tasks from "./pages/Tasks";
import Onexs from "./pages/Onexs";
import AmbasProgram from "./pages/AmbasProgram";


console.log("🚀 `App.jsx` загружается...");

const App = () => {
  console.log("✅ `App.jsx` отрендерился!");
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Profile />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/onexs" element={<Onexs />} />
      <Route path="/ambasProgram" element={<AmbasProgram />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;