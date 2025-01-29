import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";

console.log("🚀 `App.jsx` загружается...");

const App = () => {
  console.log("✅ `App.jsx` отрендерился!");
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
    </Routes>
  );
};

export default App;