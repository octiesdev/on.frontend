import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Tasks from "./pages/Tasks";

console.log("🚀 `App.jsx` загружается...");

const App = () => {
  console.log("✅ `App.jsx` отрендерился!");
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  );
};

export default App;