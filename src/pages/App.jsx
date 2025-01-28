import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Onexs from "./pages/Onexs";
import Tasks from "./pages/Tasks";
import BottomMenu from "./components/BottomMenu";
import "./App.module.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/onexs" element={<Onexs />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>

        {/* Нижнее меню */}
        <BottomMenu />
      </div>
    </Router>
  );
}

export default App;