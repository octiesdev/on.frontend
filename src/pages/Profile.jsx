import React from "react";
import "../styles/Profile.css"; // Подключаем стили
import logo from "../assets/logo.png"; // Логотип
import Footer from "../Footer"; // Футер

const Profile = () => {
  return (
    <div className="profile-container">
      {/* Фон */}
      <div className="background"></div>

      {/* Логотип в левом верхнем углу */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Основной контент */}
      <div className="content">
        <h1>ONEX Telegram App</h1>
        <p>Добро пожаловать в приложение ONEX!</p>
      </div>

      {/* Футер */}
      <Footer />
    </div>
  );
};

export default Profile;