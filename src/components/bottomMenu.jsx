import React from "react";
import { Link } from "react-router-dom";
import "./../css/BottomMenu.css"; 

const BottomMenu = () => {
  return (
    <div className="bottom-menu">
      <Link to="/onexs">Onexs</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/tasks">Tasks</Link>
    </div>
  );
};

export default BottomMenu;