import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile";
import Onexs from "./pages/onexs";
import Tasks from "./pages/tasks";
import BottomMenu from "./components/bottomMenu";
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