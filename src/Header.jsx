import React from "react";
import "./Header.css"; // Подключаем стили

const Header = () => {
  return (
    <header className="header">
      <img src="/src/assets/logo.png" alt="ONEX Logo" className="logo" />
      <div className="header-buttons">
        <button className="header-button">🤝</button>
        <button className="header-button">💼</button>
      </div>
    </header>
  );
};

export default Header;