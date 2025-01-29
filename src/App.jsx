import React from "react";  // ✅ ОБЯЗАТЕЛЬНО
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
    </Routes>
  );
};

export default App;