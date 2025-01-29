import React from "react";
import BottomMenu from "../components/BottomMenu";
import Logo from "../components/Logo";
import "./styles/Tasks.css";  // Подключаем стили

function Tasks() {
  return (
    <div className="tasks-page">
      <Logo />
      <h1>Tasks Page</h1>
      <BottomMenu />
    </div>
  );
}

export default Tasks;