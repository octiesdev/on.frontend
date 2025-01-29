import React from "react";
import logo from "/public/assets/logo.png"; // Указываем путь к логотипу
import "../css/Logo.css"; // Подключаем CSS

const Logo = () => {
  return <img src={logo} alt="Logo" className="logo" />;
};

export default Logo;