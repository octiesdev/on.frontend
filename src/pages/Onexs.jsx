import React from "react";
import BottomMenu from "../components/BottomMenu";
import Logo from "../components/Logo";
import "./styles/Onexs.css";  // Подключаем стили

function Onexs() {
  return (
    <div className="onexs-page">
      <Logo />
      <h1>Onexs Page</h1>
      <BottomMenu />
    </div>
  );
}

export default Onexs;