import React from "react";
import "../styles/Profile.css";
import logo from "../assets/logo.png";
import Footer from "../Footer"; // Подключаем футер

const Profile = () => {
  return (
    <div className="profile-container">
      {/* Фон */}
      <div className="background"></div>

      {/* Логотип */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Прямоугольник */}
      <div className="rectangle">
        <img src="/assets/dollar-img.png" class="dollar-icon" alt="Dollar Icon"/>
      </div>

      {/* Футер */}
      <Footer />
    </div>
  );
};

export default Profile;