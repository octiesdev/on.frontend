import React from "react";
import "../styles/Profile.css";
import logo from "../assets/logo.png";
import Footer from "../Footer"; // Подключаем футер

const Profile = () => {
  return (
    <div className="profile-container">
      {/* Логотип в левом верхнем углу */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Основной контент страницы */}
      <div className="content">
        <h1>ONEX Telegram App</h1>
      </div>

      {/* Футер */}
      <Footer />
    </div>
  );
};

export default Profile;