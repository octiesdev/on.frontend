import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Onexs from "./pages/Onexs";
import Profile from "./pages/Profile";
import Tasks from "./pages/Tasks";
import Logo from "./components/Logo";
import BottomMenu from "./components/BottomMenu";
import "./css/App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Logo />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/onexs" element={<Onexs />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
        <BottomMenu />
      </div>
    </Router>
  );
}

export default App;